const createLi = document.createElement("li");
const ulTag = document.getElementsByTagName("ul")[0];

function task_1() {
  ulTag.appendChild(createLi);
}

function task_3() {
  task_1();

  for (let i = 0; i < 2; i++) {
    const createAnchor = document.createElement("a");

    createAnchor.setAttribute("href", `a${i}.html`);
    const createImg = document.createElement("img");
    createImg.setAttribute("src", "bookmark.png");
    createImg.setAttribute("alt", "/img/bookmark.png");
    createAnchor.textContent = `a${i}`;

    ulTag.appendChild(createLi);
    createAnchor.prepend(createImg);
    createLi.appendChild(createAnchor);
  }
}

task_3();
