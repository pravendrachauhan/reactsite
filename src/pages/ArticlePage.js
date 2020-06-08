import React, { useState, useEffect } from 'react';
import articleContent from '../data/article-content'
import NotFoundPage from '../pages/NotFound404Page'
import CommentsList from '../components/CommentsList'
import UpvotesSection from '../components/UpvotesSection'
import AddCommentForm from '../components/AddCommentForm'
/*
const ArticlePage = ({ match }) => {
    const name = match.params.name;
    return (
        <>

            <h1>QA Job Support an Article {name} Page</h1>
        </>
    )
}
*/
/*
class ArticlePage extends React.Component {
    render() {
        const urlArticleName = this.props.match.params.name;
        const article = articleContent.find(article => article.name === urlArticleName)

        const [articleInfo, setArticleInfo]=useState({upvotes: 0, comments:[]});

        if (!article) return <NotFoundPage />
        return (
            <>
                <h1>QA Job Support an Article {article.title} Page</h1>
                <p>This post has been upvoted {articleInfo.upvotes} times</p>
                {article.content.map( (paragraph, key) => (
                        <p key={key}>{paragraph}</p>
                )) }

            </>
        )
    }
}
*/
const ArticlePage = ({ match }) => {
    const urlArticleName = match.params.name;
    const article = articleContent.find(article => article.name === urlArticleName)

    const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });
    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`/api/articles/${urlArticleName}`)
            const body = await result.json()
            setArticleInfo(
                body
            )
        }
        fetchData();

    }, [urlArticleName])
    if (!article) return <NotFoundPage />

    return (
        <>
            <h1>QA Job Support an Article {article.title} Page</h1>
            <UpvotesSection articleInfo={articleInfo} setArticleInfo={setArticleInfo}/>
            {article.content.map((paragraph, key) => (
                <p key={key}>{paragraph}</p>
            ))}
            {console.log(`${articleInfo.comments}`)};

            <CommentsList comments={articleInfo.comments} />
            <AddCommentForm articleInfo={articleInfo} setArticleInfo={setArticleInfo}/>
        </>
    )
}



export default ArticlePage;
