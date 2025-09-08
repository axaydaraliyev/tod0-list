import { changerR } from "./changer.js";

export let todos = localStorage.getItem("todos")
  ? JSON.parse(localStorage.getItem("todos"))
  : [];

//  [
//     {
//         title: "todo 1",
//         id : 1,

//     },

//        {
//         title: "todo 2",
//         id : 2,

//     },
// ];

export function changeTodos(value) {
  todos = value;
  localStorage.setItem("todos", JSON.stringify(todos));

  changerR(todos);
}
