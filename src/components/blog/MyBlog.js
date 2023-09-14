import posts from '../data/posts.json';
import {Link, useParams} from "react-router-dom";
import "./MyBlog.css"
import React from "react";

function MyBlog({succes}) {
    console.log(posts);
    const {blogId} = useParams();
    console.log(blogId)

    const myPost = posts.find((post) => {return post.id === blogId})
    console.log(myPost)

    return (
        <>
            {succes ?
            <article className={"blog-article"}>
                <h1>{myPost.title}</h1>
                <p>{myPost.date}</p>
                <p>{myPost.content}</p>
            </article> :
            <article className={"login-error"}>
                <p> Je moet ingelogd zijn op deze pagina te bezoeken</p>
                <Link to="/login">→ login ←</Link>
            </article>
            }
        </>
    );
}

export default MyBlog