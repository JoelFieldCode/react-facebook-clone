import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class AddPost extends Component {

    constructor(props) {
        super(props);

        this.state = {
            newPost: {}
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({newPost: {message: event.target.value}});
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.onAddPost(this.state.newPost);
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
            </div>
        );
    }

}

export default AddPost;
