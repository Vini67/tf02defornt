const ulElement = document.querySelector(".content ul.demo");
const liElementCollection = ulElement.querySelectorAll("li");

liElementCollection.forEach((liElement) => {
    liElement.addEventListener("click", (event) => {
        const liElement = event.currentTarget;


        /** CODAR AQUI */
    document.addEventListener("DOMContentLoaded", () => {
  const listItems = document.querySelectorAll(".content ul.demo>li");

  listItems.forEach(item => {
    item.addEventListener("click", (event) => {
      const li = event.target.closest("li"); // garante pegar o li correto
      if (!li) return;

      // Remove .selected de todos
      listItems.forEach(el => el.classList.remove("selected"));

      // Adiciona .selected no li clicado
      li.classList.add("selected");
    });
  });
});







        
    });
});