import classes from "./NewPost.module.css";
import { useState } from "react";
import Modal from "../components/Modal";
import { Link, Form, redirect } from "react-router-dom";

function NewPost(props) {
    // const [enteredBody, setEnteredBody] = useState("");
    // const [eneteredTitle, setEneteredTitle] = useState("");

    // function bodyChangeHandler(event) {
    //     setEnteredBody(event.target.value);
    // }

    // function titleChangeHandler(event) {
    //     setEneteredTitle(event.target.value);
    // }

    // function submitHnadler(event) {
    //     event.preventDefault();
    //     const postData = {
    //         body: enteredBody,
    //         title: eneteredTitle,
    //     };
    //     props.onCancel();
    // }

    return (
        <Modal>
            <Form method="post" className={classes.form}>
                <p>
                    <label htmlFor="body">Text</label>
                    {/* functions are values in js */}
                    <textarea id="body" required rows={3} name="body" />
                </p>
                <p>
                    <label htmlFor="name">Title</label>
                    <input type="text" id="name" required name="title" />
                </p>
                <p className={classes.actions}>
                    <Link to="..">Cancel</Link>
                    <button type="submit">Submit</button>
                </p>
            </Form>
        </Modal>
    );
}

export default NewPost;

export async function action({ request }) {
    const formData = await request.formData();
    const postData = Object.fromEntries(formData); // { body: '...', author: '...' }
    const response = await fetch("https://dummyjson.com/posts/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            title: postData.title,
            body: postData.body,
            userId: 5,
            /* other post data */
        }),
    });

    return redirect("/");
}
