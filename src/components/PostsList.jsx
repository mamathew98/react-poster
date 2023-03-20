import Post from "./Post";
import classes from "./PostsList.module.css";
import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function PostsList(props) {
    // ATTENTION: code below causes infintie loop
    // fetch("https://dummyjson.com/posts")
    //     .then((res) => res.json())
    //     .then((data) => {
    //         setPosts(data.posts);
    //     });

    // const [posts, setPosts] = useState([]);
    // const [isFetching, setIsFetching] = useState(false);

    const posts = useLoaderData();

    // should not return promise
    // useEffect(() => {
    //     async function fetchPost() {
    //         setIsFetching(true);
    //         const response = await fetch("https://dummyjson.com/posts");
    //         const resData = await response.json();
    //         setPosts(resData.posts);
    //         setIsFetching(false);
    //     }

    //     fetchPost();
    // }, []);

    // function addPostHandler(postData) {
    //     fetch("https://dummyjson.com/posts/add", {
    //         method: "POST",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify({
    //             title: postData.title,
    //             body: postData.body,
    //             userId: 5,
    //             /* other post data */
    //         }),
    //     })
    //         .then((res) => res.json())
    //         .then(console.log(res));

    //     // setPosts([postData, ...posts]);
    //     // better way to update dependant state is arrow function
    //     setPosts((existingPosts) => [postData, ...existingPosts]);
    // }

    // let modalContent;

    // if (modalIsVisible) {
    //     modalContent = <Modal onClose={hideModaleHandler}>
    //         <NewPost
    //             onBodyChange={bodyChangeHandler}
    //             onTitleChange={titleChangeHandler}
    //         />
    //     </Modal>;
    // }

    return (
        <>
            {/* {modalContent} */}
            {/* {modalIsVisioble ? modalContent : null} */}

            {posts.length > 0 && (
                <ul className={classes.posts}>
                    {posts.map((post) => (
                        <Post
                            key={post.id}
                            id={post.id}
                            title={post.title}
                            body={post.body}
                            tags={post.tags}
                            reactions={post.reactions}
                        />
                    ))}
                </ul>
            )}
            {posts.length == 0 && (
                <div style={{ textAlign: "center", color: "white" }}>
                    <h2>There are no posts yet</h2>
                    <p>Start adding some!</p>
                </div>
            )}

            {/* {isFetching && (
                <div style={{ textAlign: "center", color: "white" }}>
                    <p>Loading Posts...</p>
                </div>
            )} */}
        </>
    );
}

export default PostsList;
