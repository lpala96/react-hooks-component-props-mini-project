import React from "react";

function Article(props, date = "January 1, 1970"){
    return (
        <article>
            <h3>{props.title}</h3>
            <small>{props.date}</small>
            <p>{props.preview}</p>
        </article>
    )
}

export default Article