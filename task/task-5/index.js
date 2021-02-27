const createLi = document.createElement("li");
const ulTag = document.getElementsByTagName("ul")[0];

const obj = [
  { to: "bookmark.html", img: "1.png", alt: "画像1", text: "ブックマーク" },
  { to: "message.html", img: "2.png", alt: "画像2", text: "メッセージ" },
];

function task_1() {
  ulTag.appendChild(createLi);
}

//右辺でnewを使いpromiseのインスタンスを作成しその返り値としてpromiseオブジェクトを取得
//ここでは、左辺のresultにオブジェクトobjを非同期処理の結果として格納する
const result = new Promise((resolve) => {
  resolve(obj);
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
