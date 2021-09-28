import React, {ChangeEvent} from 'react';
import p from './MyPosts.module.css';
import {Post} from "./dream/Post";
import {store} from "../../../Redux/State"
import {MyPostsPropsType} from "./MyPostsContainer";


export const MyPosts = (props: MyPostsPropsType) => {


    let newText = props.profilePage.posts.map(d => <Post message={d.message} like={d.like}/>)
    // let newDreamElement = React.createRef<HTMLTextAreaElement>()
    let onAddPost = () => {
        props.addPost()
    }
    const newChangeTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
        debugger
        let text = e.currentTarget.value
        console.log(text)
        props.updateNewText(text)
    }


    return (
        <div className={p.since}>
            <h3> My posts </h3>
            {store._state.profilePage.posts.map(t => <div key={t.id}><b>{t.message}</b></div>)}
            <div>
                <textarea value={props.profilePage.newPostText}
                          onChange={newChangeTextArea}/>

                <button onClick={onAddPost}>Add post</button>
                <div>{newText}</div>
            </div>

            <div className={p.dreams}>

            </div>
        </div>

    )

}