import React, { useState, useEffect } from 'react';
import trainingContent from '../data/training-content'
import NotFoundPage from './NotFound404Page'
import CommentsList from '../components/CommentsList'
import UpvotesSection from '../components/UpvotesSection'
import AddCommentForm from '../components/AddCommentForm'

import { FcOk } from "react-icons/fc";
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
const OnlineTrainingPage = ({ match }) => {
    const urlTrainingName = match.params.name;
    
    const trainingContent1 = trainingContent.find(article => article.name === urlTrainingName)
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [urlTrainingName])
    // const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const result = await fetch(`/api/articles/${urlArticleName}`)
    //         const body = await result.json()
    //         setArticleInfo(
    //             body
    //         )
    //     }
    //     fetchData();

    // }, [urlArticleName])
    // if (!article) return <NotFoundPage />
    if(!trainingContent1){
        return(
            <h2>No course content for specified course, please contact us for more info</h2>
        )
    }
    return (
        <>
            <h1>Course Overview</h1>
            <h2>Training Details:</h2>
            <p>{trainingContent1.duration}</p>
            <p>{trainingContent1.info}</p>
            <h1>{trainingContent1.title}</h1>

            {
                trainingContent1.content.map((paragraph, key) => {
                    return paragraph.includes("SubHeading: ") ?
                        (<h2 key={key}>{paragraph.replace('SubHeading: ', '')}</h2>)
                        :
                        (<div><p key={key} ><FcOk style={{ padding: "0px 5px 0px 0px" }} />{paragraph}</p></div>)
                }
                )
            }

            {/* 
            {console.log(`${articleInfo.comments}`)};

            <CommentsList comments={articleInfo.comments} />
            <AddCommentForm articleInfo={articleInfo} setArticleInfo={setArticleInfo}/> */}
        </>
    )
}



export default OnlineTrainingPage;
