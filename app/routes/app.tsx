import { json } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Outlet } from "@remix-run/react";
import { increment } from "~/store/reducer";

export async function loader() {
    return json({
        data: "Test"
    });
}

export default function App() {
    const dispatch = useDispatch();
    const data = useSelector((state: any) => state.userData);

    return <>
        <h1> Test </h1>
        <Link to="/app/was"> to nested</Link>
        <h1>{JSON.stringify(data)}</h1>
        <button onClick={() => {
            dispatch(increment());
        }}>Increase count +1</button>
        <Outlet />
    </>
}