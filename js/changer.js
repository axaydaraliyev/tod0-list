// import { deleteTodo } from "./crud.js";
import { elTodosContener, elTempledCard } from "./html-selection.js";
// import { changeTodos } from "./todos.js";

export function changerR(todos){
    console.log(todos);
    elTodosContener.innerHTML=null;
    todos.length > 0 && todos.forEach((el)=>{
        const {title, id} = el;
        const clone = elTempledCard.content.cloneNode(true);
        const elTitle = clone.querySelector("h5");
        const elSee = clone.querySelector(`[title="Ko'rish"]`)
        const elDelete = clone.querySelector(`[title="O'chirish"]`)
        const elUpdete = clone.querySelector(`[title="O'zgartrish"]`)

        elTitle.textContent = title;
        elTodosContener.append(clone);
        elSee.id = id;
        elDelete.id = id;
        elUpdete.id = id;

        // const li = document.createElement("li");
        // const buuton = document.createElement("button");

        // buuton.id=el.id;
        // li.textContent = el.title;

        // buuton.addEventListener("click", (evt)=>{
        //     const result = deleteTodo(todos, evt.target.id);
        //     changerR(result);
        //     changeTodos(result);
        // })
        // li.append(buuton);
        // buuton.textContent = "delete";
        // elTodosContener.append(li);
    });
};