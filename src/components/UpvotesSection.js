import React from 'react'
// <p>This post has been upvoted {articleInfo.upvotes} times</p>

const UpvotesSection = ({ articleInfo,setArticleInfo }) => {
    const upvoteArticle = async () => {
        const result = await fetch(`/api/articles/${articleInfo.name}/upvote`,{
            method:'post'
        })
        const body = await result.json()
        setArticleInfo(
            body
        )
    }
    return (
        <div id="upvote-section">
            <button onClick={upvoteArticle}>Add Upvote</button>
            <p>This post has been upvoted {articleInfo.upvotes} times</p>
        </div>
    )
}

export default UpvotesSection