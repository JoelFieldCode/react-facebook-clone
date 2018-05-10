import React, { Component } from 'react';
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

class PostList extends Component {

    postsList() {
        return this.props.posts.map( (post, index) => {
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
                  <MenuItem onClick={ () => this.props.onDeletePost(post)}>Delete</MenuItem>
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

    render() {
        return (
            <div>
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

export default PostList;
