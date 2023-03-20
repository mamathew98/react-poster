import classes from "./Tag.module.css";
import { MdTag } from "react-icons/md";

function Tag({ tag }) {
    return (
        <div className={classes.tag}>
            <MdTag /> {tag}
        </div>
    );
}

export default Tag;
