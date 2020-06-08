import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from './assets/images/logo.jpg'


const NavBar = () => {

    // useEffect(() => {
    //     // navslide
    //     window.scrollTo(0, 0)

    // }, [urlTrainingName])

    const navslide = () => {

        const burger = document.querySelector(".burger");
        const nav = document.querySelector(".nav-links");
        const navLinks = document.querySelectorAll(".nav-links li");
        // nav.style.backgroundColor=""
        // nav.style.display="none"
        console.log(window.innerWidth)
        if (window.innerWidth <= "800")
            nav.style.display = "flex"
        nav.classList.toggle('nav-active')

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
                //  nav.style.backgroundColor="white"
                if (window.innerWidth <= "800")
                    nav.style.display = "none"
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +
                    0.5}s`;
            }
        });

        burger.classList.toggle("toggle");
    };



    return (
        <>

            <nav>

                <div className="logo">
                    <img src={logoImage} alt="Whatsapp" width="40" height="40" />
                </div>
                <ul className="nav-links" onClick={navslide} >
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/online-training">Courses
                        
                        </Link>
                    </li>
                    <li>
                        <Link to="/instant-support" >Instant Support</Link>
                    </li>
                    <li>
                        <Link to="/Payment">Payment</Link>
                    </li>
                    <li>
                        <Link to="/ContactUs">Contact Us</Link>
                    </li>
                    {/* <li>
                        <Link to="/WorkWithUs">Work With Us</Link>
                    </li> */}
                    {/* <li>
                        <Link to="/articles-list">Blogs</Link>
                    </li> */}

                </ul>
                <div className="burger" onClick={navslide}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>

            </nav>
        </>
    )

}


export default NavBar;

