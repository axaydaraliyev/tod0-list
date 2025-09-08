import { elTodosContener, elTempledCard } from "./html-selection.js";

export function changerR(todos) {
  console.log(todos);
  elTodosContener.innerHTML = null;
  todos.length > 0 &&
    todos.forEach((el) => {
      const { title, id } = el;
      const clone = elTempledCard.content.cloneNode(true);
      const elTitle = clone.querySelector("h5");
      const elSee = clone.querySelector(`[title="Ko'rish"]`);
      const elDelete = clone.querySelector(`[title="O'chirish"]`);
      const elUpdete = clone.querySelector(`[title="O'zgartrish"]`);

      elTitle.textContent = title;
      elTodosContener.append(clone);
      elSee.id = id;
      elDelete.id = id;
      elUpdete.id = id;
    });
}
