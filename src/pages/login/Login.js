import "./Login.css"
import { useRef, useState, useEffect} from "react";
import {Link} from "react-router-dom";

function Login({succes, setSucces}) {
    const userRef = useRef();
    const errRef = useRef();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setError("");
    }, [username, password])

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(username, password);
        setUsername('');
        setPassword('');
        setSucces(true);
    }

    return(
        <>
            {succes ? (
                <section className={"login-message"}>
                    <h1>You are logged in!</h1>
                    <p>
                        <Link className={"login-link"} to={"/"}>Go to Home</Link>
                    </p>
                </section>
            ) : (
        <section className={"login-section"}>
            <p ref={errRef} className={error ? "errmsg" :
            "offscreen"} aria-live={"assertive"}>{error}</p>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor={"username"}>
                <input
                    type={"text"}
                    id={"username"}
                    ref={userRef}
                    autoComplete={"off"}
                    onChange={(e) => { setUsername(e.target.value)}}
                    value={username}
                    placeholder={"username"}
                    required
                />
                </label>

                <label htmlFor={"password"}>
                <input
                    type={"password"}
                    id={"password"}
                    onChange={(e) => { setPassword(e.target.value)}}
                    value={password}
                    placeholder={"password"}
                    required
                />
                </label>

                <button type={"submit"}>Sign In</button>
            </form>
        </section>
            )}
        </>
    )
}

export default Login