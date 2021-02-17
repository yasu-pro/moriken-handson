const ulTag = document.getElementsByTagName("ul")[0];
const createLi = document.createElement("li");
createLi.textContent = "これです";
ulTag.appendChild(createLi);

console.log("createLi");
