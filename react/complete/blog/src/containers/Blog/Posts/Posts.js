import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import FullPost from '../FullPost/FullPost';
import './Posts.css';

class Posts extends Component {
    state = {
        posts: []
    };

    componentDidMount() {
        axios.get('/posts')
            .then(response => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(p => {
                    return {
                        ...p,
                        author: 'Max'
                    }
                });
                this.setState({posts: updatedPosts});
            })
            .catch((error) => {
                console.log(error);
            });
    }

    postSelectedHandler = (id) => {
        this.props.history.push('/posts/' + id);
    }

    render() {
        let posts = <p>Something went wrong!</p>;
        if (!this.state.error) {
            posts = this.state.posts.map(p => {
                return (
                    <Post key={p.id} title={p.title} 
                        author={p.author}
                        clicked={() => this.postSelectedHandler(p.id)} />
                );
            });
        }
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <Route path="/posts/:id" exact component={FullPost} />
            </div>
        );
    }
}

export default Posts;