
// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {
  console.log("都市名:"+data.name);
console.log("天気:"+data.weather[0].description);
console.log("経度:"+data.coord.lon);
console.log("緯度:"+data.coord.lat);
console.log("最高気温:"+data.main.temp_max);
console.log("最低気温:"+data.main.temp_min);
console.log("湿度:"+data.main.humidity);
console.log("風速:"+data.wind.speed);
console.log("風向:"+data.wind.deg);
}

//課題４
// 都市名と都市IDのマッピング（辞書）
const cityMap = {
  "カイロ": "360630",
  "モスクワ": "524901",
  "ヨハネスブルク": "993800",
  "北京": "1816670",
  "東京": "1850147",
  "シンガポール": "1880252",
  "シドニー": "2147714",
  "ロンドン": "2643743",
  "パリ": "2968815",
  "リオデジャネイロ": "3451189",
  "ニューヨーク": "5128581",
  "ロサンゼルス": "5368361"
};

document.getElementById("searchBtn").addEventListener("click", function (){
  const inputName = document.getElementById("cityId").value.trim();
  const cityId = cityMap[inputName];
  const output = document.getElementById("output");

  if (cityId) {
    console.log("都市のID:"+cityId+"です");
  } else {
    console.log("入力された都市名に対応する都市IDはありません");
  }
})



/*
360630 ... Cairo カイロ （エジプト）
524901 ... Moscow モスクワ （ロシア）
993800 ... Johannesburg ヨハネスブルク （南アフリカ）
1816670 ... Beijing 北京 （中華人民共和国）
1850147 ... Tokyo 東京 （日本）
1880252 ... Singapore シンガポール
2147714 ... Sydney シドニー （オーストラリア）
2643743 ... London ロンドン （イギリス）
2968815 ... Paris パリ （フランス）
3451189 ... Rio de Janeiro リオデジャネイロ （ブラジル）
5128581 ... New York ニューヨーク （アメリカ合衆国）
5368361 ... Los Angeles ロサンゼルス （アメリカ合衆国）
*/
// 課題5-1 の関数 printDom() はここに記述すること
function printDom(data) {
let da=[
        {a:'都市名:  '+data.name},
        {a:'経度:   '+(data.coord.lon)+'°' },
        {a:'緯度:  '+data.coord.lat+'°' },
        {a:'天気:  '+data.weather[0].description},
         {a:'最高気温:  '+data.main.temp_max+' ℃'},
        {a:'最低気温:  '+data.main.temp_min+' ℃'},
        {a:'湿度:  '+data.main.humidity+' %'},
        {a:'風速:  '+data.wind.speed+' m/s'},
        {a:'風向:  '+data.wind.deg+'°'},
      ];

    let di=document.querySelector('div#result'); 
    let une=document.createElement('ul');
    une.id='box';
    une.setAttribute('id','box');
    di.insertAdjacentElement('beforeend',une); 
     

    for(let aun of da){
      let l=document.createElement('li');
      l.textContent = aun.a;                 
      une.insertAdjacentElement('beforeend', l); 
    }

}

// 課題6-1 のイベントハンドラ登録処理は以下に記述
let b = document.querySelector('#searchBtn');
b.addEventListener('click', sendRequest);

let To={360630:'Cairo カイロ （エジプト)',
524901:' Moscow モスクワ （ロシア）',
993800 :'Johannesburg ヨハネスブルク （南アフリカ）',
1816670:  'Beijing 北京 （中華人民共和国）',
1850147 : 'Tokyo 東京 （日本）',
1880252 : 'Singapore シンガポール',
2147714 : 'Sydney シドニー （オーストラリア）',
2643743 : 'London ロンドン （イギリス）',
2968815 : 'Paris パリ （フランス）',
3451189 : 'Rio de Janeiro リオデジャネイロ （ブラジル）',
5128581 : 'New York ニューヨーク （アメリカ合衆国）',
5368361 : 'Los Angeles ロサンゼルス （アメリカ合衆国）'}




// 課題6-1 のイベントハンドラs sendRequest() の定義
function sendRequest() {
  let url = "https://www.nishita-lab.org/web-contents/jsons/openweather/"
  let x=document.querySelector("#cityId");
  let ku = x.value;
  let id = cityMap[ku];
  console.log(ku);  
  console.log('入力された都市名:', ku);
  console.log('対応する都市ID:', id);

  if (!id) {
    console.log('入力された都市名に対応する都市IDが見つかりません。正しい名前を入力してください。');
    return;  
  }

  let url11 = url + id + '.json';

    // 通信開始
    axios.get(url11)
        .then(showResult)   // 通信成功
        .catch(showError)   // 通信失敗
        .then(finish);      // 通信の最後の処理

}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {
let data = resp.data;
u = document.querySelector('ul#box'); 
if (u !== null) {
  u.remove();
}

    // data が文字列型なら，オブジェクトに変換する
    if (typeof data === 'string') {
        data = JSON.parse(data);
    }

    // data をコンソールに出力
  
    console.log(data); 
    // data.x を出力
	console.log(data.x);

  printDom(data);

  console.log("都市名: " + data.name);  
  console.log ('経度'+(data.coord.lon)+'°');
       console.log ('緯度'+data.coord.lat+'°');
    console.log("天気: " + data.weather[0].description);   
     console.log ('最高気温'+data.main.temp_max+' ℃');
        console.log('最低気温'+data.main.temp_min+' ℃');
    console.log("湿度: " + data.main.humidity + " %");  
    console.log("風速: " + data.wind.speed + " m/s"); 
        console.log('風向'+data.wind.deg+'°');

   
}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}

////////////////////////////////////////
// 以下はグルメのデータサンプル
// 注意: 第5回までは以下を変更しないこと！
// 注意2: 課題6-1 で以下をすべて削除すること