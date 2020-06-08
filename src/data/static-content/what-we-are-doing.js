import React from 'react'
import Image1 from '../../../src/assets/images/Image1.jpg'
import TechSuportImg from '../../../src/assets/images/tech-support.jpg'
import Image2 from '../../../src/assets/images/Image2.png'

const WhatWeAreDoing = ()=>(

    <>
        <h2 style={{color:"darkblue",textAlign:"center",paddingBottom:"20px",fontSize:"30px"}}>
        What we are doing!
        </h2>
        <div className="row">
        <div className="col-md-4">
            <i><img src={Image1} alt="support" width="250px" height="200px" /></i>
            <p>Proxy support provides job support services globally across U.S, Europe, Asia and Africa from India</p>
        </div>
        <div className="col-md-4">
            <i><img src={TechSuportImg} alt="support" width="250px" height="200px" /></i>
            <p>Product/Project support provides services globally across U.S, Europe, Asia and Africa from India</p>
        </div>
        <div className="col-md-4">
            <i><img src={Image2} alt="support" width="250px" height="200px" /></i>
            <p>QA Job Support provides On-line Trainings support services globally across U.S, Europe, Asia and Africa from India</p>
        </div>
        </div>
        <br></br>
    </>
)

export default WhatWeAreDoing