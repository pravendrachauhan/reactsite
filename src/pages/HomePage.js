import React from 'react';
import JobsupportInfo from '../data/static-content/jobsupport-info'
import Jobsupportindia from '../data/static-content/jobsupport-india'
import WhatWeAreDoing from '../data/static-content/what-we-are-doing'

const HomePage = () => (
    <>
        <div className="col-md-12">
            <div className="container">
                <JobsupportInfo />
            </div>
            <div className="container">
                <Jobsupportindia />
            </div>
            <WhatWeAreDoing />
        </div>
        
    </>

)


export default HomePage;
