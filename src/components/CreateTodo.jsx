import { useState } from "react"
import axios from "axios"

export function CreateTodo({ onTodoCreated }){

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    async function onClickHandler(){
        try{
            const response = await axios.post("https://todo-app-backend-or8b.onrender.com/todo", {
                title: title,
                description: description
            });
            console.log(response.data.msg);
            setTitle("");
            setDescription("");
            onTodoCreated();
        } catch(error){
            console.error("Error creating todo:", error.response.data.msg);
        }
    }


    return <div>
        <input value={title} placeholder="Title" onChange={(e) => {setTitle(e.target.value)}}></input>
        <br></br>
        <input value={description} placeholder="Description" onChange={(e) => setDescription(e.target.value)}></input>
        <br></br>
        <button onClick={onClickHandler}>Create Todo</button>
    </div>
}