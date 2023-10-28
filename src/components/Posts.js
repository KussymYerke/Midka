import React, {useState} from 'react';
import Post from "./Post";
import s from './Posts.module.css'
import {rerender} from "../index";

const Posts = () => {

    let [posts, setPost] = useState([
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: "It is my first post", likesCount: 23}
    ])

    let newPostText = 'Hello'

    let onAddPost = () => {
        let newPost={
            id: 4,
            message: newPostText,
            likesCount: 0
        };
        setPost([...posts, newPost]);
    }

    let onPostChange = (e) => {
        let body = e.target.value;
        newPostText = body;
    }

    return (
        <div>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea  onChange={onPostChange} value={newPostText} />
                </div>
                <div>
                    <button onClick={ onAddPost }>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {
                    posts.map(p => <Post id={p.id} key={p.id} message={p.message} likes={p.likesCount}/>)
                }
            </div>
        </div>
    );
};

export default Posts;