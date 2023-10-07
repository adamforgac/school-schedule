const tdElements = document.querySelectorAll("tbody td");

tdElements.forEach(td => {
    const div = document.createElement("div");
    div.classList.add("cell-layout");

    while (td.firstChild) {
        div.appendChild(td.firstChild);
    }

    td.appendChild(div);
});

const button = document.querySelector(".button-area button");
const scheduleArea = document.querySelector(".table-area");

button.addEventListener("click", () => {
    window.print(scheduleArea);
})
