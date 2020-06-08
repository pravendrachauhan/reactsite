import React from 'react'
const CommentsList = ({comments}) => (
    
    <>
        {
            comments.map((commentVal,key) => (
                <div className="comment" key={key}>
                    <h4>{commentVal.username}</h4>
                    <p>{commentVal.comment}</p>
                </div>
            ))
        }
    </>

)

export default CommentsList