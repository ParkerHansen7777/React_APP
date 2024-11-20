import React from 'react'
import profile from '../../pictures/linkedinPfp.jpg';
export default function About(){
    return(
        <section>
            <div className='container-row'>
                <img src={profile} style={{height: '400px', width: "400px", padding: "10px"}} alt="Parker"/>
                <div style={{display: "grid"}}>
                    <h1 style={{display: "inline", justifySelf: "center"}}>About me</h1>
                    <p>I'm a software developer based in Los Angeles, California. I have experience with languages and frameworks such as, C, C++, Python, JavaScript, Java, React.JS, Node.JS, SQL. I'm currently freelancing, training AI with a focus on software development. I've created multiple projects with React with some using the MERN stack, I've even made a Minecraft mod with Java! I love to problem solve. I love to build things. I'm passionate about programming, and I love the process of solving smaller problems to lead to a solution to a big problem, thus building something great!</p>
                </div>
            </div>
        </section>
    )
}