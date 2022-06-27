import React from "react";


function About(props, image= "https://via.placeholder.com/215 (Links to an external site.)") {
    return (
        <aside>
            <img src={props.image} alt="blog logo"></img>
            <p>{props.about}</p>
        
        </aside>
    )
}


export default About