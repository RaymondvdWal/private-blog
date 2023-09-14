import React from 'react';
import './Home.css';
import {Link} from "react-router-dom";

function Home() {
    return (
        <main className="page-container">
            <div className={"inner-container"}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut debitis doloribus
                    facilis iste placeat praesentium sint voluptatem. Architecto at, maiores?
                </p>
                <p className="content-container-col2">
                    Consectetur adipisicing elit. Blanditiis cum, dolor ea enim fugiat fugit id inventore ipsam libero magni modi natus
                    necessitatibus nisi optio quas qui quis quo, reprehenderit saepe similique sint sit soluta ut veritatis voluptatem.
                    Ab aliquid amet animi aperiam assumenda, atque autem dolorum ducimus et excepturi ipsa magnam nemo nulla possimus provident,
                    quos ratione repellendus sed sequi tempore! Accusantium amet commodi deleniti exercitationem impedit obcaecati quis repudiandae!
                    Consectetur eligendi ipsam odio repellendus sequi veniam voluptas? Adipisci at consectetur eaque fuga hic inventore ipsa magnam
                    provident vitae. Ad animi commodi consectetur, corporis dicta doloremque dolorum error hic inventore iste laudantium libero magnam
                    mollitia necessitatibus nemo nesciunt nihil non obcaecati odio odit pariatur quae quaerat quas quisquam quos rem sapiente sequi
                    similique sint vero? Accusamus aliquam aliquid blanditiis consequatur est et minima mollitia neque non, odit perspiciatis placeat
                    provident quos, similique sit totam vero. Beatae consequatur cupiditate rerum?
                </p>
                <p>Bekijk <Link className={"link"} to={"/blogposts"}>hier</Link> het blog overzicht</p>
            </div>
        </main>
    );
}

export default Home;