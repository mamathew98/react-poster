import PostsList from "../components/PostsList";
import { useState } from "react";
import { Outlet } from "react-router-dom";

function Posts() {
    const [modalIsVisible, setModalIsVisible] = useState(false);

    return (
        <>
            <Outlet />
            <main>
                <PostsList />
            </main>
        </>
    );
}

export default Posts;

export async function loader() {
    const response = await fetch("https://dummyjson.com/posts");
    const resData = await response.json();
    console.log(resData.posts[3]);
    return resData.posts;
}
