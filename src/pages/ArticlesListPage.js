import React from 'react';
import ArticleList from '../components/ArticleList'
import articleContent from '../data/article-content'

const ArticlesListPage = () => (
    <>
        <h1>QA Job Support Blogs Page</h1>
        <ArticleList articles={articleContent} />
    </>
)


export default ArticlesListPage;
