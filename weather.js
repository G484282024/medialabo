
// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {
  console.log("都市名:"+data.name);
console.log("天気:"+data.description);
console.log("経度:"+data.coord.lon);
console.log("緯度:"+data.coord.lat);
console.log("最高気温:"+data.main.temp_max);
console.log("最低気温:"+data.main.temp_min);
console.log("温度:"+data.main.humidity);
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
        {a:'都市名'+data.name},
        {a:'経度'+(data.coord.lon)},
        {a:'緯度'+data.coord.lat},
        {a:'天気'+data.weather[0].description},
         {a:'最高気温'+data.main.temp_max},
        {a:'最低気温'+data.main.temp_min},
        {a:'湿度'+data.main.humidity},
        {a:'風速'+data.wind.speed},
        {a:'風向'+data.wind.deg},
      ];

    let di=document.querySelector('div#result'); 
    let une=document.createElement('ul');
    une.id='box';
    une.setAttribute('id','box');
    di.insertAdjacentElement('afterend',u); 
     

    for(let aun of da){
      let l=document.createElement('li');
      l.textContent = aun.a;                 
      une.insertAdjacentElement('beforeend', l); 
    }

}

// 課題6-1 のイベントハンドラ登録処理は以下に記述
let b = document.querySelector('#sendRequest');
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




// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {
  let url = "https://www.nishita-lab.org/web-contents/jsons/openweather/"
  
    // 通信開始
    axios.get(url)
        .then(showResult)   // 通信成功
        .catch(showError)   // 通信失敗
        .then(finish);      // 通信の最後の処理

}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {
let data = resp.data;

    // data が文字列型なら，オブジェクトに変換する
    if (typeof data === 'string') {
        data = JSON.parse(data);
    }

    // data をコンソールに出力
  
    console.log(data); 

  console.log("都市名: " + data.name);  
  console.log ('経度'+(data.coord.lon));
       console.log ('緯度'+data.coord.lat);
    console.log("天気: " + data.weather[0].description);   
     console.log ('最高気温'+data.main.temp_max);
        console.log('最低気温'+data.main.temp_min);
    console.log("湿度: " + data.main.humidity + " %");  
    console.log("風速: " + data.wind.speed + " m/s"); 
        console.log('風向'+data.wind.deg);

   
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
/*let data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};
*/
