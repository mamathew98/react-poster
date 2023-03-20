import classes from "./PostDetails.module.css";
import Modal from "../components/Modal";
import { useLoaderData, Link } from "react-router-dom";
import PostFooter from "../components/PostFooter";

function PostDetails() {
    const post = useLoaderData();

    if (!post) {
        return (
            <Modal>
                <main className={classes.details}>
                    <h1>Could not find post!</h1>
                    <p>Unfortunately, the requested post could not be found</p>
                    <p>
                        <Link to=".." className={classes.btn}>
                            Okay
                        </Link>
                    </p>
                </main>
            </Modal>
        );
    }

    return (
        <Modal>
            <main className={classes.details}>
                <h1 className={classes.title}>{post.title}</h1>
                <hr />
                <p className={classes.text}>{post.body}</p>
                <PostFooter tags={post.tags} reactions={post.reactions} />
            </main>
        </Modal>
    );
}

export default PostDetails;

export async function loader({ request, params }) {
    const response = await fetch(
        "https://dummyjson.com/posts/" + params.postId
    );
    const resData = await response.json();
    console.log(resData);
    return resData;
}
