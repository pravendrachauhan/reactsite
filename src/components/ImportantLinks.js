import React from 'react'
import { Link } from 'react-router-dom';

const ImportantLinks =()=>(

    <>
<div className="container">
        <h2 style={{color:"darkblue",textAlign:"center",paddingBottom:"10px",fontSize:"30px"}}>
        Few Important links for Job Support & Training
        </h2>
            {/* <table style={{ width: "100%",marginLeft:"auto",marginRight:"auto"}}> */}
            <table>

                <tbody>
                <tr>
                    <td className="block"><Link to="/jobsupport/appium-job-support">Appium Job Support</Link></td>
                    <td className="block"> <Link to="/online-training/appium-online-training/">Appium Online Training</Link></td>
                    <td className="block"><Link to="/frameworksupport/appium-framework-designing-support">Appium Framework Designing Support</Link></td>
                </tr>
                <tr>
                    <td className="block"><Link to="/jobsupport/selenium-job-support">Selenium Job Support</Link></td>
                    <td className="block"> <Link to="/online-training/selenium-online-training/">Selenium Online Training</Link></td>
                    <td className="block"><Link to="/frameworksupport/selenium-framework-designing-support">Selenium Framework Designing Support</Link></td>
                </tr>
                <tr>
                    <td className="block"><Link to="/jobsupport/java-job-support">Java Job Support</Link></td>
                    <td className="block"> <Link to="/online-training/java-online-training/">Java Online Training</Link></td>
                    <td className="block"><Link to="/frameworksupport/java-framework-designing-support">Java Framework Designing Support</Link></td>
                </tr>
                <tr>
                    <td className="block"><Link to="/jobsupport/python-job-support">Python Job Support</Link></td>
                    <td className="block"> <Link to="/online-training/python-online-training/">Python Online Training</Link></td>
                    <td className="block"><Link to="/frameworksupport/python-framework-designing-support">Python Framework Designing Support</Link></td>
                </tr>
                <tr>
                    <td className="block"><Link to="/jobsupport/robot-framework-job-support">Robot framework Job Support</Link></td>
                    <td className="block"> <Link to="/online-training/robot-framework-online-training/">Robot framework Online Training</Link></td>
                    <td className="block"><Link to="/frameworksupport/robot-framework-designing-support">Robot framework Framework Designing Support</Link></td>
                </tr>
                <tr>
                    <td className="block"><Link to="/jobsupport/eggplant-job-support">Eggplant Job Support</Link></td>
                    <td className="block"> <Link to="/online-training/eggplant-online-training/">Eggplant Online Training</Link></td>
                    <td className="block"><Link to="/frameworksupport/eggplant-framework-designing-support">Eggplant Framework Designing Support</Link></td>
                </tr>
                <tr>
                    <td className="block"><Link to="/jobsupport/js-job-support">Javascript Job Support</Link></td>
                    <td className="block"> <Link to="/online-training/js-online-training/">Javascript Online Training</Link></td>
                    <td className="block"><Link to="/frameworksupport/js-framework-designing-support">Javascript Framework Designing Support</Link></td>
                </tr>
                <tr>
                    <td className="block"><Link to="/jobsupport/react-job-support">React Job Support</Link></td>
                    <td className="block"> <Link to="/online-training/react-online-training/">React Online Training</Link></td>
                    <td className="block"><Link to="/frameworksupport/react-framework-designing-support">React Framework Designing Support</Link></td>
                </tr>
                <tr>
                    <td className="block"><Link to="/jobsupport/nodejs-job-support">Node JS Job Support</Link></td>
                    <td className="block"> <Link to="/online-training/nodejs-online-training/">Node JS Online Training</Link></td>
                    <td className="block"><Link to="/frameworksupport/nodejs-framework-designing-support">Node JS Framework Designing Support</Link></td>
                </tr>
                </tbody>
            </table>

        </div>


    </>
)

export default ImportantLinks