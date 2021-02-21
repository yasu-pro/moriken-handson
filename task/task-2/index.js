function task_2() {
  const ulTag = document.getElementsByTagName("ul")[0];
  const createLi = document.createElement("li");
  ulTag.appendChild(createLi);

  const createAnchor = document.createElement("a");

  createAnchor.setAttribute("href", "1.html");
  const createImg = document.createElement("img");
  createImg.setAttribute("src", "bookmark.png");
  createImg.setAttribute("alt", "ブックマーク");
  createAnchor.textContent = "これです";

  createAnchor.prepend(createImg);

  createLi.appendChild(createAnchor);
}

task_2();
