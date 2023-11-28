addEventListener('DOMContentLoaded', () => {
    for (const elem of document.getElementsByClassName("dropdown")) {
        const dropdownContent = elem.getElementsByClassName("dropdown-content")[0];
        const dropdownIndicator = document.createElement("super");
        dropdownIndicator.classList.add("dropdown-indicator");
        dropdownIndicator.innerText = "*";
        elem.insertBefore(dropdownIndicator, dropdownContent);
        
        elem.addEventListener("click", () => {
            elem.classList.toggle("dropdown-shown");
        });
    }
})