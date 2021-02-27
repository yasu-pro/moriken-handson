const createLi = document.createElement("li");
const ulTag = document.getElementsByTagName("ul")[0];

const obj = [
  { to: "bookmark.html", img: "1.png", alt: "画像1", text: "ブックマーク" },
  { to: "message.html", img: "2.png", alt: "画像2", text: "メッセージ" },
];

function task_1() {
  ulTag.appendChild(createLi);
}

const result = new Promise((resolve) => {
  //task-7
  const divTag = document.getElementsByTagName("div")[0];
  divTag.style.display = "none";
  const bodyTag = document.getElementsByTagName("body")[0];
  const createImg = document.createElement("img");
  createImg.setAttribute("src", "./img/loading-circle.gif");
  createImg.setAttribute("id", "loading-circle");
  bodyTag.appendChild(createImg);
  setTimeout(() => {
    resolve(obj);
    createImg.style.display = "none";
    divTag.style.display = "block";
  }, 3000);
});

function task_5() {
  task_1();

  result.then((data) => {
    data.forEach(function (item, index) {
      const createAnchor = document.createElement("a");

      createAnchor.setAttribute("href", item["to"]);
      const createImg = document.createElement("img");
      createImg.setAttribute("src", item["img"]);
      createImg.setAttribute("alt", item["alt"]);
      createAnchor.textContent = item["text"];

      ulTag.appendChild(createLi);
      createAnchor.prepend(createImg);
      createLi.appendChild(createAnchor);
    });
  });
}

task_5();
