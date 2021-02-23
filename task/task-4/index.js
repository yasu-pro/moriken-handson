const createLi = document.createElement("li");
const ulTag = document.getElementsByTagName("ul")[0];

const obj = [
  { to: "bookmark.html", img: "1.png", alt: "画像1", text: "ブックマーク" },
  { to: "message.html", img: "2.png", alt: "画像2", text: "メッセージ" },
];

function task_1() {
  ulTag.appendChild(createLi);
}

function task_4() {
  task_1();

  obj.forEach(function (item, index) {
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
}

task_4();
