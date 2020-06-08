import React, { useState } from 'react'

const AddCommentForm = ({ articleInfo, setArticleInfo }) => {
    const [username, setUsername] = useState('');
    const [commentText, setCommentText] = useState('');

    const addComment = async () => {
        //take username and comment from html
        //post it to server based on article

        //add it to html comments list, 
        //this effect will set when we click and use useState on username and comments value
        const result = await fetch(`/api/articles/${articleInfo.name}/add-comment`, {
            method: 'post',
            body: JSON.stringify({
                username: username,
                comment: commentText
            }),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        const body = await result.json()
        setArticleInfo(body)
        setUsername('')
        setCommentText('')
    }

    return (
        <div id="add-comment-form">
            <h3>Add a Comment</h3>
            <label> Name:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            <label> Comment:
        <textarea row="4" cols="50" value={commentText} onChange={(e) => setCommentText(e.target.value)} />
            </label>
            <button onClick={addComment}>Add Comment</button>
        </div>
    )

}

export default AddCommentForm