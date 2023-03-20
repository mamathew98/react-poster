import classes from "./PostFooter.module.css";
import Reactions from "./Reactions";
import Tag from "./Tag";

function PostFooter({ tags, reactions }) {
    return (
        <div className={classes.footer}>
            <div className={classes.tags}>
                {tags.map((tag) => (
                    <Tag tag={tag} />
                ))}
            </div>

            <div>
                <Reactions reactions={reactions} />
            </div>
        </div>
    );
}

export default PostFooter;
