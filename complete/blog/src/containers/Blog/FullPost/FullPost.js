import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {
    state = {
        loadedPost: null
    }

    componentDidMount() {
        this.loadData();
    }

    componentDidUpdate() {
        this.loadData();
    }    

    loadData() {
        if (this.props.match.params.id) {
            if (!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.match.params.id+0)) {
                axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.match.params.id)
                    .then(response => {
                        this.setState({loadedPost: response.data});
                    });
            }
        }
    }

    deletePostHandler = (id) => {
        axios.delete('https://jsonplaceholder.typicode.com/posts/' + id)
            .then(response => {
                console.log(response);
            });
    }

    render () {
        const style = {textAlign: 'center'};
        let post = <p style={style}>Please select a Post!</p>;
        if (this.props.id) {
            post = <p style={style}>Loading...</p>;
        }
        if (this.state.loadedPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button className="Delete" 
                            onClick={() => this.deletePostHandler(this.state.loadedPost.id)}>Delete</button>
                    </div>
                </div>
    
            );   
        }        
        return post;
    }
}

export default FullPost;