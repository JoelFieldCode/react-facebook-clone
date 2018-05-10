import React, { Component } from 'react';
import PostService from '../../services/PostService.js';
import PostList from '../NewsFeed/PostList.js';
import AddPost from '../NewsFeed/AddPost.js';

class NewsFeed extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: [],
        }

        this.deletePost = this.deletePost.bind(this);
        this.addPost = this.addPost.bind(this);
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

    deletePost(post) {
        PostService.delete(post._id).then( () => {
            this.getPosts();
        });
    }

    addPost(post) {
        PostService.add(post).then( () => {
            this.getPosts();
        });
    }

    render() {
        return (
            <div>
                 <AddPost onAddPost={this.addPost} />
                 <PostList posts={this.state.posts} onDeletePost={this.deletePost} />
            </div>
        );
    }

}

export default NewsFeed;
