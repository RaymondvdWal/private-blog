import {Link} from "react-router-dom";
import Home from "../../pages/home/Home";

function Logout ({succes, setSucces}) {


    return (
        <>
            {setSucces(false)}
        {succes ?
        <section>
            <h1>You are still logged in!</h1>
            <p>
                <Link to={"/"}>Go to Home</Link>
            </p>
        </section> :
        <Home/>
        }
        </>
    )
}

export default Logout;