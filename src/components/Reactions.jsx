import classes from "./Reactions.module.css";
import { MdThumbUp } from "react-icons/md";

function Reactions({ reactions }) {
    return (
        <div className={classes.reactions}>
            <MdThumbUp /> {reactions}
        </div>
    );
}

export default Reactions;
