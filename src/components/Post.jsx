import { Link } from "react-router-dom";
import classes from "./Post.module.css";
import PostFooter from "./PostFooter";

function Post({ id, title, body, tags, reactions }) {
    return (
        <li className={classes.post}>
            <Link to={"/" + id}>
                <p className={classes.title}>{title}</p>
                <hr />
                <p className={classes.text}>{body}</p>
            </Link>
            <PostFooter tags={tags} reactions={reactions} />
        </li>
    );
}

export default Post;
