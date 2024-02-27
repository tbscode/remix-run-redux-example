import { json } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { useSelector } from "react-redux";

export default function Was() {
    const data = useSelector((state: any) => state.userData);
    return <>
        <Link to="/app"> to nested</Link>
        <h1> THE FUCK? </h1>
        <h1>{JSON.stringify(data)}</h1>
    </>
}
