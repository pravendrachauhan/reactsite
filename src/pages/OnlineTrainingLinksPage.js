import React, { useState, useEffect } from 'react';
import trainingContent from '../data/training-content'
import NotFoundPage from './NotFound404Page'
import CommentsList from '../components/CommentsList'
import UpvotesSection from '../components/UpvotesSection'
import AddCommentForm from '../components/AddCommentForm'
import { Link } from 'react-router-dom';

import { FcOk } from "react-icons/fc";

const OnlinetrainingLinksPage = () => {

    const tdStyle = {
        border: "2px solid grey",
        textAlign: "left",
        padding: "15px",
        borderStyle:"double"
    }

    return (
        <>
            <div className="container">
                <h2 style={{ color: "darkblue", textAlign: "center", paddingBottom: "5px", fontSize: "30px" }}>
                    Online Training Courses
                </h2>
                <table>
                    <tbody>
                        <tr>

                            <td className="block" style={tdStyle}> <Link to="/online-training/appium-online-training/"><b>Appium Online Training</b></Link></td>
                            <td className="block" style={tdStyle}>
                                <p>Duration: {trainingContent.find(article => article.name === "appium-online-training").duration}</p>
                                <p>{trainingContent.find(article => article.name === "appium-online-training").info}</p>
                            </td>
                        </tr>
                        <tr>
                            <td className="block" style={tdStyle}> <Link to="/online-training/selenium-online-training/"><b>Selenium Online Training</b></Link></td>
                            <td className="block" style={tdStyle}>
                                <p>Duration: {trainingContent.find(article => article.name === "selenium-online-training").duration}</p>
                                <p>{trainingContent.find(article => article.name === "selenium-online-training").info}</p>
                            </td>
                        </tr>
                        <tr>
                            <td className="block" style={tdStyle}> <Link to="/online-training/java-online-training/"><b>Java Online Training</b></Link></td>
                            <td className="block" style={tdStyle}>
                                <p>Duration: {trainingContent.find(article => article.name === "java-online-training").duration}</p>
                                <p>{trainingContent.find(article => article.name === "java-online-training").info}</p>
                            </td>
                        </tr>
                        <tr>
                            <td className="block" style={tdStyle}> <Link to="/online-training/python-online-training/"><b>Python Online Training</b></Link></td>
                            <td className="block" style={tdStyle}>
                                <p>Duration: {trainingContent.find(article => article.name === "python-online-training").duration}</p>
                                <p>{trainingContent.find(article => article.name === "python-online-training").info}</p>
                            </td>
                        </tr>
                        <tr>
                            <td className="block" style={tdStyle}> <Link to="/online-training/robot-framework-online-training/"><b>Robot framework Online Training</b></Link></td>
                            <td className="block" style={tdStyle}>
                                <p>Duration: {trainingContent.find(article => article.name === "robot-framework-online-training").duration}</p>
                                <p>{trainingContent.find(article => article.name === "robot-framework-online-training").info}</p>
                            </td>
                        </tr>
                        <tr>
                            <td className="block" style={tdStyle}> <Link to="/online-training/eggplant-online-training/"><b>Eggplant Online Training</b></Link></td>
                            <td className="block" style={tdStyle}>
                                <p>Duration: {trainingContent.find(article => article.name === "eggplant-online-training").duration}</p>
                                <p>{trainingContent.find(article => article.name === "eggplant-online-training").info}</p>
                            </td>
                        </tr>
                        <tr>
                            <td className="block" style={tdStyle}> <Link to="/online-training/js-online-training/"><b>Javascript Online Training</b></Link></td>
                            <td className="block" style={tdStyle}>
                                <p>Duration: {trainingContent.find(article => article.name === "js-online-training").duration}</p>
                                <p>{trainingContent.find(article => article.name === "js-online-training").info}</p>
                            </td>
                        </tr>
                        <tr>
                            <td className="block" style={tdStyle}> <Link to="/online-training/react-online-training/"><b>React Online Training</b></Link></td>
                            <td className="block" style={tdStyle}>
                                <p>Duration: {trainingContent.find(article => article.name === "react-online-training").duration}</p>
                                <p>{trainingContent.find(article => article.name === "react-online-training").info}</p>
                            </td>
                        </tr>
                        <tr>
                            <td className="block" style={tdStyle}> <Link to="/online-training/nodejs-online-training/"><b>Node JS Online Training</b></Link></td>
                            <td className="block" style={tdStyle}>
                                <p>Duration: {trainingContent.find(article => article.name === "nodejs-online-training").duration}</p>
                                <p>{trainingContent.find(article => article.name === "nodejs-online-training").info}</p>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>


        </>
    )
}



export default OnlinetrainingLinksPage;
