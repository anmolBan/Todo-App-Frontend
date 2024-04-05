import axios from "axios";
import { useState } from "react";

export function Todo({id, title, description, completed, onClickDelete}){
    const [completeStatus, setCompleteStatus] = useState(completed);
    async function onClickHandler(){
        if(completed == false){
            try{
                const response = await axios.put("https://todo-app-backend-or8b.onrender.com/completed", {
                    id: id
                });
                console.log(response.data.msg);
                setCompleteStatus(true);
            } catch(error){
                console.error("Error updating todo:", error.response.data.msg);
            }
        }
    }

    async function deleteClickHandler(){
        try{
            // console.log(id);
            const response = await axios.delete("https://todo-app-backend-or8b.onrender.com/remove-todo", {
                data: { id: id }
            });
            console.log(response.data.msg);
            onClickDelete();
        } catch(error){
            console.error("Error deleting todo:", error)
        }
    }


    return(
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
            <button onClick={onClickHandler}>{completeStatus ? "Completed" : "Mark as complete"}</button>
            <button onClick={deleteClickHandler}>Delete</button>
        </div>
    )
}