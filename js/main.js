import { changeTodos, todos } from "./todos.js";
import { changerR } from "./changer.js";
import { elTodosContener, elTodoForm, elTodoNameInput } from "./html-selection.js";
import { deleteTodo, getTodo, addTodo, updete } from "./crud.js";

changerR(todos);

let editingId = null; // Hozir qaysi todoni o'zgartiryapmiz, shu id saqlanadi

elTodosContener.addEventListener("click", (evt) => {
  const action = evt.target.title;
  const target = evt.target;

  if (action === "Ko'rish") {
    const todo = getTodo(todos, target.id);
    alert(`${todo.title}`);
  }

  if (action === "O'chirish") {
    const newTodos = deleteTodo(todos, target.id);
    changeTodos(newTodos);
  }

  if (action === "O'zgartrish") {
    const updeteTodo = getTodo(todos, target.id);
    elTodoNameInput.value = updeteTodo.title;
    editingId = target.id; // hozir qaysi todoni edit qilayapmiz
  }
});

elTodoForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const result = {
    id: editingId ? editingId : window.crypto.randomUUID(), // agar edit bo'lsa eski id qoladi
  };

  const form = new FormData(elTodoForm);
  form.forEach((value, key) => {
    result[key] = value;
  });

  let newTodos;
  if (editingId) {
    // Agar edit bo'layotgan bo'lsa
    newTodos = updete(todos, editingId, result);
    editingId = null; // qayta default holatga qaytarib qo'yamiz
  } else {
    // Agar yangi todo qo'shayotgan bo'lsa
    newTodos = addTodo(todos, result);
  }

  changeTodos(newTodos);
  elTodoForm.reset();
});






