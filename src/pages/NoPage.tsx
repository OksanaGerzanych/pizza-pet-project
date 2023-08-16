import { Link } from "react-router-dom";
export default function NoPage() {
    return (
        <>
            <h1>404</h1>
            <p>Oops! We can`t find that page! </p>
            <p>Either something went wrong or the page doesn`t exist enymore.` </p>
           <Link to="/">Home page</Link>
        </>
    )
}