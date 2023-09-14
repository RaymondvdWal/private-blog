import React from 'react';
import './BlogPosts.css';
import {Link, Route, Routes} from "react-router-dom";
import MyBlog from "../../components/blog/MyBlog";
import posts from '../../components/data/posts.json';
function BlogPosts({succes}) {


       const blogs =  posts.map((post)=>{
            return post.title
        })
    console.log(blogs)

    return (
    <>
        { succes ?
        <article className="page-container">
            <h1>
                Welkom in het blog overzicht
            </h1>
            <p className="content-container-col2">
                <ul className={"posts"}>
                    {posts.map((post)=>{
                        return <li><Link className={"inner-posts"} to={`/blogpost/${post.id}`}>{post.title}</Link></li>
                    })}
                </ul>
            </p>
        </article> :
        <article className={"login-message"}>
            <p>Log in om deze pagina te bezoeken </p>
            <Link to="/login">→ Login ←</Link>
        </article>
        }
    </>
    );
}

export default BlogPosts;