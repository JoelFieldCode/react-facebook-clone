import React, { Component } from 'react';
import PostService from '../../services/PostService.js'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import {grey400} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import TimeAgo from '../../utils/timeAgo.js'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Posts extends Component {

    state = {
        posts: [],
        newPost: {}
    }

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.getPosts();
    }

    getPosts() {
        PostService.posts().then( resp => {
            this.setState({
                posts: resp.data
            });
        }); 
    }

    postsList() {
        return this.state.posts.map( (post, index) => {
            const iconButtonElement = (
                <IconButton
                  touch={true}
                  tooltip="more"
                  tooltipPosition="bottom-left"
                >
                  <MoreVertIcon color={grey400} />
                </IconButton>
              );
              
            const rightIconMenu = (
                <IconMenu iconButtonElement={iconButtonElement}>
                  <MenuItem>Reply</MenuItem>
                  <MenuItem>Forward</MenuItem>
                  <MenuItem onClick={ () => this.deletePost(post)}>Delete</MenuItem>
                </IconMenu>
            );

            return (
                <div key={index}>
                    <ListItem
                        primaryText={post.message}
                        rightIconButton={rightIconMenu}
                        secondaryText={
                            <p>
                                {TimeAgo(post.createdAt)}
                            </p>
                        }
                        secondaryTextLines={2}
                    />
                    <Divider inset={true}/>
                </div>
            )
        });
    }

    deletePost(post) {
        PostService.delete(post._id).then( () => {
            this.getPosts();
        });
    }

    addPost() {
        PostService.add(this.state.newPost).then( () => {
            this.getPosts();
        });
    }

    handleChange(event) {
        this.setState({newPost: {message: event.target.value}});
    }

    handleSubmit(e){
        e.preventDefault();
        this.addPost();
    }

    render() {
        return (
            <div>
                  <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
                        <MuiThemeProvider>
                            <TextField
                                hintText="What's on your mind?"
                                onChange={this.handleChange}
                            />
                        </MuiThemeProvider>
                        <MuiThemeProvider>
                            <RaisedButton style={{margin: 12}} type="submit" label="Post" primary={true} />
                        </MuiThemeProvider>
                   </form>
                 <MuiThemeProvider>
                    <List>
                        <Subheader>Recent Posts</Subheader>
                        {this.postsList()}
                    </List>
                </MuiThemeProvider>
            </div>
        );
    }

}

export default Posts;
