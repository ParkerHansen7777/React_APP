import React from 'react'
import profile from '../../pictures/linkedinPfp.jpg';
export default function About(){
    return(
        <section>
            <div className='container-row'>
                <img id='about-me-pic' src={profile} alt="Parker"/>
                <div id='about-me-text'>
                    <h1>About me</h1>
                    <p>I'm a software developer based in Los Angeles, California. I have experience with languages and frameworks such as, C, C++, Python, JavaScript, Java, React.JS, Node.JS, SQL. I'm currently freelancing, training AI with a focus on software development. I've created multiple projects with React, with some using the MERN stack. I've also developed a Minecraft mod using Java! I love to problem solve. I love to build things. I'm passionate about programming, and I love the process of solving smaller problems to lead to a solution to a big problem, thus building something great!</p>
                </div>
            </div>
        </section>
    )
}