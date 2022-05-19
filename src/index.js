/* const, let等の変数宣言 */
let val1 = "let変数";
console.log(val1);

// let変数は上書き可能
val1 = "val1を上書き";
console.log(val1);

// let変数は再宣言不可
// let val1 = "let変数再宣言"
//  error: 'val1' has already been declared

const val2 = "const変数";
console.log(val2);

// const変数は上書き可能
// val2 = "val2を上書き";
// error: "val2" is read-only

// const変数は再宣言不可
// const val1 = "const変数再宣言"
//  error: 'val2' has already been declared

/* テンプレート文字列 */
const name = "Tomo";
const hometown = "沖縄県";
// 私の名前はTomoです。出身地は沖縄県です。

const message = `私の名前は${name}です。出身地は${hometown}です。`;
console.log(message);

/* アロー関数 */
// 従来の関数の記法1
function func1(str) {
  return str;
}
console.log(func1("従来の書き方func1です"));

// 従来の関数の記法2
const func2 = function (str) {
  return str;
};
console.log(func2("従来の書き方func2です"));

// アロー関数
const funcArrow = (str) => {
  return str;
};
console.log(funcArrow("アロー関数funcArrowです"));

// アロー関数 [注意点: return内の処理が1行で終わるときは、returnを省略可]
const funcArrow2 = (str) => str;
console.log(funcArrow2("アロー関数funcArrow2です"));

// アロー関数 （引数を2つ持つバージョン）
const funcArrow3 = (num1, num2) => {
  return num1 + num2;
};
console.log(funcArrow3(10, 5));

/* 分割代入 */
const myHobby = {
  first: "programming",
  second: "読書"
};

// 分割代入を使用しない記法
const myhobby = `私の趣味は${myHobby.first}と${myHobby.second}です。`;
console.log(myhobby);

// 分割代入を使用した記法
const { one, two } = myHobby;
// 上で定義したmyHobbyオブジェクトから、firstとsecondのプロパティを抜き出して、それぞれを変数(one, two)に格納
const hobby = `私の趣味は${one}と${two}です。`;
console.log(hobby);

// 分割代入は配列にも適用可
const progLanguage = ["Django", "React"];
const [django, react] = progLanguage;
const declaration = `私は${django}と${react}を習得します。`;
console.log(declaration);

/* デフォルト値 */
const sayHello = (name) => console.log(`こんにちは！${name}さん！`);
sayHello("Tomo"); // こんにちは！Tomoさん！
sayHello(); //  こんにちは！unfefinedさん！  <-- バグになりかねない！！

// デフォルト値を設定
const collectSayHello = (name = "ゲスト") =>
  console.log(`こんにちは！${name}さん！`);
collectSayHello(); // こんにちは！ゲストさん！

/* スプレッド構文 「...(ドット3つ)」*/
// 1. 配列の展開
const arr1 = [1, 2];
console.log(arr1); // [1, 2]
console.log(...arr1); // 1 2 (配列から各要素が取り出されたもの)

const sumFunc = (num1, num2) => console.log(num1 + num2);
sumFunc(arr1[0], arr1[1]); // 3
sumFunc(...arr1);

// 2. 配列を一つにまとめる
const today = [2022, 5, 19, "sunny"];
const [year, ...date] = today;
console.log(year); // 2022
console.log(date); //  [5, 19, "sunny"] (「2022」以外の残りの配列)
console.log(`今日は${year}年${date[0]}月${date[1]}日、天気は${date[2]}です。`);
// 今日は2022年5月19日、天気はsunnyです。

// 3. 配列のコピー、結合
const wantTodo1 = ["Django", "React"];
const wantTodo2 = ["読書", "投資"];

// 配列wantTodo1をコピー
const copyTodo1 = [...wantTodo1];
console.log(copyTodo1); //  ["Django", "React"]
// 配列wantTodo1とwantTodo2を結合
const joinWantoTodo = [...wantTodo1, ...wantTodo2];
console.log(joinWantoTodo); //  ["Django", "React", "読書", "投資"]

// 配列のコピー [注意点: 通常の代入と違う点をおさえる！！]
const fruits = ["apple", "orrange", "banana"];
const fruits2 = fruits; // 通常の代入
fruits2[0] = "grape";
console.log(fruits2); // ["grape", "orrange", "banana"]
console.log(fruits); // ["grape", "orrange", "banana"]  <= コピー元の配列fruitにも影響を与えてしまう..

const vegi = ["carrot", "onion", "tomato"];
const vegi2 = [...vegi];
vegi2[0] = "potato";
console.log(vegi2); // ["potato", "onion", "tomato"]
console.log(vegi); // ["carrot", "onion", "tomato"]  <= コピー元の配列vegiには影響を与えない！

/* mapを使ったオブジェクト配列の処理 */
const studyTheme = ["統計学", "アルゴリズム", "投資"];
// 従来の記法: オブジェクトの要素を一つずつ取り出す(for文処理)
for (let i = 0; i < studyTheme.length; i++) {
  console.log(studyTheme[i]);
}
// 統計学
// アルゴリズム
// 投資

// mapを使った記法1
const studyItem = studyTheme.map((item) => {
  return item;
});
console.log(studyItem); // ["統計学", "アルゴリズム", "投資"]

// mapを使った記法2
studyTheme.map((item) => console.log(item));
// 統計学
// アルゴリズム
// 投資

// mapを使った記法 (indexを扱いたい場合: 第2引数にはindexが入ってくるのでそれを利用する)
studyTheme.map((item, index) => console.log(`${index + 1}番目は${item}です。`));

/* filterを使った配列の処理 */
const numArr = [1, 2, 3, 4, 5, 6];
// 基本構文： 配列データ.filter(引数) ・・・引数で条件式を定義し、条件に合った要素を抽出
const newNumArr = numArr.filter((num) => {
  return num % 2 === 1;
});
console.log(newNumArr); // [1, 3, 5]

// if文と組み合わせたmap関数
const nameArr = ["早川", "牧野", "石川", "今枝"];
const newNameArr = nameArr.map((name) => {
  if (name === "石川") {
    return name;
  } else {
    return `${name}さん`;
  }
});
console.log(newNameArr); // ["早川さん", "牧野さん", "石川", "今枝さん"]

/* 三項演算子 */
// 基本構文　: 「 ある条件 ? 条件がtrueの場合の処理 : 条件がfalseの場合の処理 」
const num = 1 < 0 ? "trueです" : "falseです";
console.log(num); // falseです

const int = 1300; // 数字の場合
console.log(int.toLocaleString()); // 1,300 (3桁区切りの表記が可能)

const str = "1300"; // 文字列の場合
console.log(str.toLocaleString()); // 1300 (文字列に対しては機能しない)

// 与えられたプロパティの型が数字かどうかをチェックする関数
const prop = 8500;
const checkNum =
  typeof prop === "number" ? prop.toLocaleString() : "数字を入力してください";
console.log(checkNum); // 8,500

// 引数を受け取って、その合計が許容範囲以内かをチェックする関数
const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "100を超えてます" : "許容範囲内です";
};
console.log(checkSum(10, 95)); // 100を超えてます

/* 論理演算子(&&, ||)の本当の意味を知ろう */
const flag1 = true;
const flag2 = false;

if (flag1 && flag2) {
  console.log("1かつ2はtrueです"); // (出力なし)
}

if (flag1 || flag2) {
  console.log("1又は2はtrueです"); // 1又は2はtrueです
}

// || は、左側がfalseなら右側を返し、左がtrueならそのまま左側を返す
const number = null; // 注) nullはfalseを返す
const fee = number || "金額未設定です";
console.log(fee); // 金額未設定です

// && は、左側がtrueなら右側を返し、左側がfalseなら左側を返す
const number2 = 100;
const fee2 = number2 && "金額が設定されました";
console.log(fee2); // "金額が設定されました"

const number3 = null; // 注) nullはfalseを返す
const fee3 = number3 && "金額が設定されました";
console.log(fee3); // "金額が設定されました"
