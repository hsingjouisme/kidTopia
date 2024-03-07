// 設定取消全選功能
// var checkboxes = document.querySelectorAll('input[type="checkbox"]');
// var button = document.getElementById('toggle_check_btn');

// document.getElementById('toggle_check_btn').addEventListener('click', function () {
//     checkboxes.forEach(function (checkbox) {
//         checkbox.checked = !checkbox.checked;
//     });

//     button.textContent = button.textContent === '全選' ? '取消全選' : '全選';
// });

// 按下搜尋按鈕
// var enter_keyword = document.getElementById('enter_keyword');
// var search_box= document.getElementById('search_box');
// var parklist= document.getElementById('parklist');
// document.getElementById('search').addEventListener('click', function () {
//     var noCheckboxChecked = true;

//     checkboxes.forEach(function (checkbox) {
//         if (checkbox.checked) {
//             noCheckboxChecked = false;
//         }
//     });

//     if (enter_keyword.value === "" && noCheckboxChecked) {
//         alert("搜尋欄位不可空白且至少選擇一個選項");
//     }
//     else{
//         search_box.style.display='none';
//         parkList.style.display='block';
//     }

// });


// 在你的 JavaScript 檔案中直接定義 JSON 資料
var parksData = [
    {
      "編號": "1",
      "公園": "湳雅公園",
      "行政區": "北區",
      "AreaCode": "10018020",
      "設施內容": "組合遊具組1組、搖搖馬4座、雙人搖搖馬2組"
    },
    {
      "編號": "2",
      "公園": "金雅重劃區滯洪池1",
      "行政區": "北區",
      "AreaCode": "10018020",
      "設施內容": "組合遊具組溜滑梯1組、雙人翹翹板2組"
    },
  {
    "編號": "3",
    "公園": "金雅重劃區兒1",
    "行政區": "北區",
    "AreaCode": "10018020",
    "設施內容": "攀爬遊具組1組"
  },
  {
    "編號": "4",
    "公園": "金雅重劃區兒2",
    "行政區": "北區",
    "AreaCode": "10018020",
    "設施內容": "組合遊具組溜滑梯1組"
  },
  {
    "編號": "5",
    "公園": "樹林頭公園",
    "行政區": "北區",
    "AreaCode": "10018020",
    "設施內容": "風兒滾滾來滑草坡1組、沙坑1組、共融式鞦韆組1組、地景迷宮傳聲筒1組"
  },
  {
    "編號": "6",
    "公園": "長和公園",
    "行政區": "北區",
    "AreaCode": "10018020",
    "設施內容": "磨石子溜滑梯1組、吊橋2組、吊索1組"
  },
  {
    "編號": "7",
    "公園": "福林公園",
    "行政區": "北區",
    "AreaCode": "10018020",
    "設施內容": "組合遊具組溜滑梯1組、搖搖馬4組"
  },
  {
    "編號": "8",
    "公園": "福林重劃公園",
    "行政區": "北區",
    "AreaCode": "10018020",
    "設施內容": "飛機組合遊具組1組、共融式鞦韆組1組"
  },
  {
    "編號": "9",
    "公園": "南勢重劃公園",
    "行政區": "北區",
    "AreaCode": "10018020",
    "設施內容": "火車組合遊具組1組、雙人搖搖馬1組、單人搖搖馬4組"
  },
  {
    "編號": "10",
    "公園": "蟹仔埔公園",
    "行政區": "北區",
    "AreaCode": "10018020",
    "設施內容": "組合遊具組溜滑梯2組、單人搖搖馬6組、雙人搖搖馬1組"
  },
  {
    "編號": "11",
    "公園": "中光公園",
    "行政區": "北區",
    "AreaCode": "10018020",
    "設施內容": "組合遊具組溜滑梯1組、搖搖馬4組"
  },
  {
    "編號": "12",
    "公園": "康樂公園",
    "行政區": "北區",
    "AreaCode": "10018020",
    "設施內容": "組合遊具組溜滑梯1組、雙人搖搖馬1組"
  },
  {
    "編號": "13",
    "公園": "港北崇和公園",
    "行政區": "北區",
    "AreaCode": "10018020",
    "設施內容": "組合遊具組溜滑梯1組、雙人搖搖馬1組、地景雙人滑梯1組、平衡木1組"
  },
  {
    "編號": "14",
    "公園": "中清公園",
    "行政區": "北區",
    "AreaCode": "10018020",
    "設施內容": "組合遊具組溜滑梯1組、搖搖馬5組"
  },
  {
    "編號": "15",
    "公園": "吉羊公園",
    "行政區": "北區",
    "AreaCode": "10018020",
    "設施內容": "組合遊具組溜滑梯1組"
  },
  {
    "編號": "16",
    "公園": "西雅公園",
    "行政區": "北區",
    "AreaCode": "10018020",
    "設施內容": "組合遊具組1組、搖搖馬"
  },
  {
    "編號": "17",
    "公園": "天公壇公園",
    "行政區": "北區",
    "AreaCode": "10018020",
    "設施內容": "組合遊具1組、搖搖馬2組"
  },
  {
    "編號": "18",
    "公園": "台溪公園",
    "行政區": "北區",
    "AreaCode": "10018020",
    "設施內容": "組合遊具組1組"
  },
  {
    "編號": "19",
    "公園": "台溪親子公園",
    "行政區": "北區",
    "AreaCode": "10018020",
    "設施內容": "組合遊具組溜滑梯1組、搖搖馬4組、盪鞦韆組1組"
  },
  {
    "編號": "20",
    "公園": "北新公園",
    "行政區": "北區",
    "AreaCode": "10018020",
    "設施內容": "組合遊具組溜滑梯1組、搖搖馬2組、雙人搖搖馬1組"
  },
  {
    "編號": "21",
    "公園": "凌雲公園",
    "行政區": "北區",
    "AreaCode": "10018020",
    "設施內容": "組合遊具組溜滑梯1組、雙人搖搖馬1組、四人搖搖馬1組"
  },
  {
    "編號": "22",
    "公園": "興南公園",
    "行政區": "北區",
    "AreaCode": "10018020",
    "設施內容": "組合遊具組溜滑梯1組"
  },
  {
    "編號": "23",
    "公園": "湳雅河濱公園",
    "行政區": "北區",
    "AreaCode": "10018020",
    "設施內容": "組合遊具組溜滑梯1組"
  },
  {
    "編號": "24",
    "公園": "民富公園",
    "行政區": "北區",
    "AreaCode": "10018020",
    "設施內容": "攀爬組合遊具組1組"
  },
  {
    "編號": "25",
    "公園": "南寮運動公園",
    "行政區": "北區",
    "AreaCode": "10018020",
    "設施內容": "地景溜滑梯1組、共融式旋轉盤1組、共融式鞦韆組1組、吊床1組、雙人蹺蹺板2組"
  },
  {
    "編號": "26",
    "公園": "成功路小公園",
    "行政區": "北區",
    "AreaCode": "10018020",
    "設施內容": "組合遊具組溜滑梯1組、搖搖馬1組"
  },
  {
    "編號": "27",
    "公園": "客雅體健公園",
    "行政區": "北區",
    "AreaCode": "10018020",
    "設施內容": "組合遊具組溜滑梯1組"
  },
  {
    "編號": "28",
    "公園": "武陵櫻花公園",
    "行政區": "北區",
    "AreaCode": "10018020",
    "設施內容": "組合遊具組溜滑梯1組"
  },
  {
    "編號": "29",
    "公園": "古賢公園",
    "行政區": "北區",
    "AreaCode": "10018020",
    "設施內容": "組合遊具組溜滑梯1組、搖搖馬5組"
  },
  {
    "編號": "30",
    "公園": "南寮環保公園",
    "行政區": "北區",
    "AreaCode": "10018020",
    "設施內容": "無"
  },
  {
    "編號": "31",
    "公園": "漁港環保公園",
    "行政區": "北區",
    "AreaCode": "10018020",
    "設施內容": "搖搖馬3座、雙人搖搖馬2座、攀爬遊具1組"
  },
  {
    "編號": "32",
    "公園": "吉羊公園",
    "行政區": "北區",
    "AreaCode": "10018020",
    "設施內容": "組合遊具組1組、搖搖馬2組。"
  },
  {
    "編號": "33",
    "公園": "頂埔公園",
    "行政區": "香山區",
    "AreaCode": "10018030",
    "設施內容": "盪鞦韆1座、小型兒童遊具1座、搖搖馬2座"
  },
  {
    "編號": "34",
    "公園": "和平公園",
    "行政區": "香山區",
    "AreaCode": "10018030",
    "設施內容": "盪鞦韆1座、搖搖馬3座、組合滑梯遊具1組"
  },
  {
    "編號": "35",
    "公園": "頂福公園",
    "行政區": "香山區",
    "AreaCode": "10018030",
    "設施內容": "大型組合兒童遊具1組、搖搖馬4座、四人蹺蹺板1座"
  },
  {
    "編號": "36",
    "公園": "華北景觀公園",
    "行政區": "香山區",
    "AreaCode": "10018030",
    "設施內容": "無"
  },
  {
    "編號": "37",
    "公園": "祥園公園",
    "行政區": "香山區",
    "AreaCode": "10018030",
    "設施內容": "中型滑梯遊具1組、搖搖馬2座"
  },
  {
    "編號": "38",
    "公園": "中埔公園",
    "行政區": "香山區",
    "AreaCode": "10018030",
    "設施內容": "中型滑梯遊具1組、搖搖馬2座"
  },
  {
    "編號": "39",
    "公園": "牛埔公園",
    "行政區": "香山區",
    "AreaCode": "10018030",
    "設施內容": "中型滑梯遊具1組"
  },
  {
    "編號": "40",
    "公園": "香山公園",
    "行政區": "香山區",
    "AreaCode": "10018030",
    "設施內容": "中型組合式攀爬架1組、特色滑梯遊具1組"
  },
  {
    "編號": "41",
    "公園": "美森公園",
    "行政區": "香山區",
    "AreaCode": "10018030",
    "設施內容": "中型兒童滑梯遊具1組、搖搖馬3座"
  },
  {
    "編號": "42",
    "公園": "大庄公園",
    "行政區": "香山區",
    "AreaCode": "10018030",
    "設施內容": "地景磨石子溜滑梯1座、大型攀爬網1組、鳥巢盪鞦韆1組"
  },
  {
    "編號": "43",
    "公園": "長興公園",
    "行政區": "香山區",
    "AreaCode": "10018030",
    "設施內容": "搖搖馬3座、中型兒童遊具1組"
  },
  {
    "編號": "44",
    "公園": "鹽水小公園",
    "行政區": "香山區",
    "AreaCode": "10018030",
    "設施內容": "搖搖馬2座、盪鞦韆1座、中型兒童遊具1組"
  },
  {
    "編號": "45",
    "公園": "鹽水圖書館旁公園",
    "行政區": "香山區",
    "AreaCode": "10018030",
    "設施內容": "中型兒童特色滑梯遊具1組、無障礙兒童遊具1組"
  },
  {
    "編號": "46",
    "公園": "埔前公園",
    "行政區": "香山區",
    "AreaCode": "10018030",
    "設施內容": "白鐵滑梯組1組"
  },
  {
    "編號": "47",
    "公園": "南十八尖山",
    "行政區": "香山區",
    "AreaCode": "10018030",
    "設施內容": "無"
  },
  {
    "編號": "48",
    "公園": "中埔兒三綠地",
    "行政區": "香山區",
    "AreaCode": "10018030",
    "設施內容": "無"
  },
  {
    "編號": "49",
    "公園": "港南小公園",
    "行政區": "香山區",
    "AreaCode": "10018030",
    "設施內容": "盪鞦韆1座"
  },
  {
    "編號": "50",
    "公園": "港南五街公園",
    "行政區": "香山區",
    "AreaCode": "10018030",
    "設施內容": "搖搖馬3座、中型兒童遊具1組"
  },
  {
    "編號": "51",
    "公園": "羌仔埔綠地",
    "行政區": "香山區",
    "AreaCode": "10018030",
    "設施內容": "無"
  },
  {
    "編號": "52",
    "公園": "浸水富麗公園",
    "行政區": "香山區",
    "AreaCode": "10018030",
    "設施內容": "搖搖馬2座、中型兒童遊具1組、四人蹺蹺板1座"
  },
  {
    "編號": "53",
    "公園": "海山運動公園",
    "行政區": "香山區公所",
    "AreaCode": "10018030",
    "設施內容": "攀岩式滑梯遊具1座"
  },
  {
    "編號": "54",
    "公園": "二二八紀念公園",
    "行政區": "香山區",
    "AreaCode": "10018030",
    "設施內容": "無"
  },
  {
    "編號": "55",
    "公園": "親水公園",
    "行政區": "北區",
    "AreaCode": "10018020",
    "設施內容": "無"
  },
  {
    "編號": "56",
    "公園": "青青草原",
    "行政區": "香山區",
    "AreaCode": "10018030",
    "設施內容": "大型地景磨石子溜滑梯、盪鞦韆3座、攀爬架1座"
  },
  {
    "編號": "57",
    "公園": "水資源公園",
    "行政區": "香山區",
    "AreaCode": "10018030",
    "設施內容": "無"
  },
  {
    "編號": "58",
    "公園": "南港賞鳥公園",
    "行政區": "香山區",
    "AreaCode": "10018030",
    "設施內容": "大型盪鞦韆1座"
  },
  {
    "編號": "59",
    "公園": "看海公園",
    "行政區": "香山區",
    "AreaCode": "10018030",
    "設施內容": "無"
  },
  {
    "編號": "60",
    "公園": "紅樹林公園",
    "行政區": "香山區",
    "AreaCode": "10018030",
    "設施內容": "無"
  },
  {
    "編號": "61",
    "公園": "港南運河公園",
    "行政區": "香山區",
    "AreaCode": "10018030",
    "設施內容": "中型組合式攀爬遊具1組、彈跳床1組、攀爬架1座、旋轉飛碟1座、蛋型搖搖椅2座"
  },
  {
    "編號": "62",
    "公園": "十八尖山森林公園",
    "行政區": "東區",
    "AreaCode": "10018010",
    "設施內容": "無"
  },
  {
    "編號": "63",
    "公園": "新竹公園",
    "行政區": "東區",
    "AreaCode": "10018010",
    "設施內容": "無"
  },
  {
    "編號": "64",
    "公園": "新竹大砂坑公園",
    "行政區": "東區",
    "AreaCode": "10018010",
    "設施內容": "中型滑梯遊具2組、地景磨石子1座、多人旋轉椅2組、搖搖馬5座"
  },
  {
    "編號": "65",
    "公園": "三民公園",
    "行政區": "東區",
    "AreaCode": "10018010",
    "設施內容": "複合式溜滑梯1組、磨石子溜滑梯1座、小型盪鞦韆1座、輪胎式座椅盪鞦韆1座"
  },
  {
    "編號": "66",
    "公園": "中央公園",
    "行政區": "東區",
    "AreaCode": "10018010",
    "設施內容": "地景式溜滑梯1座、磨石子溜滑梯1座、鳥巢盪鞦韆1座、複合式溜滑梯遊具2組、遊戲沙坑2座、鐵管攀爬架組1座、多人旋轉座椅1座"
  },
  {
    "編號": "67",
    "公園": "建國公園",
    "行政區": "東區",
    "AreaCode": "10018010",
    "設施內容": "無"
  },
  {
    "編號": "68",
    "公園": "赤土崎公園",
    "行政區": "東區",
    "AreaCode": "10018010",
    "設施內容": "複合式溜滑梯1組、彈簧馬2座、"
  },
  {
    "編號": "69",
    "公園": "忠孝公園",
    "行政區": "東區",
    "AreaCode": "10018010",
    "設施內容": "複合式溜滑梯1組、彈簧馬5座、雙人蹺蹺板1座"
  },
  {
    "編號": "70",
    "公園": "民族公園",
    "行政區": "東區",
    "AreaCode": "10018010",
    "設施內容": "大型盪鞦韆1座共8組、木作梅花樁1組"
  },
  {
    "編號": "71",
    "公園": "南大公園",
    "行政區": "東區",
    "AreaCode": "10018010",
    "設施內容": "地景磨石子溜滑梯1座"
  },
  {
    "編號": "72",
    "公園": "頂竹圍公園",
    "行政區": "東區",
    "AreaCode": "10018010",
    "設施內容": "中型滑梯遊具1組、沙坑1座、雙人蹺蹺板1座、四人蹺蹺板一座、多人旋轉盤1座、鳥巢盪鞦韆1座"
  },
  {
    "編號": "73",
    "公園": "興學公園",
    "行政區": "東區",
    "AreaCode": "10018010",
    "設施內容": "中型兒童遊具1組、搖搖馬5座、雙人盪鞦韆1座"
  },
  {
    "編號": "74",
    "公園": "東光公園",
    "行政區": "東區",
    "AreaCode": "10018010",
    "設施內容": "中型滑梯遊具2組、搖搖馬2座"
  },
  {
    "編號": "75",
    "公園": "南門公園",
    "行政區": "東區",
    "AreaCode": "10018010",
    "設施內容": "中型滑梯遊具1組、搖搖馬4座"
  },
  {
    "編號": "76",
    "公園": "新莊公園",
    "行政區": "東區",
    "AreaCode": "10018010",
    "設施內容": "中型滑梯遊具1組、搖搖馬6座"
  },
  {
    "編號": "77",
    "公園": "關東公園",
    "行政區": "東區",
    "AreaCode": "10018010",
    "設施內容": "複合式溜滑梯1組、搖搖馬3座、蹺蹺板1座"
  },
  {
    "編號": "78",
    "公園": "明湖公園",
    "行政區": "東區",
    "AreaCode": "10018010",
    "設施內容": "地景式沙坑溜滑梯1座、共融式盪鞦韆1座"
  },
  {
    "編號": "79",
    "公園": "民享公園",
    "行政區": "東區",
    "AreaCode": "10018010",
    "設施內容": "溜滑梯1組、鐵式盪鞦韆1座"
  },
  {
    "編號": "80",
    "公園": "科園親子公園",
    "行政區": "東區",
    "AreaCode": "10018010",
    "設施內容": "複合式溜滑梯1組、搖搖馬2座"
  },
  {
    "編號": "81",
    "公園": "金山東街旁公園",
    "行政區": "東區",
    "AreaCode": "10018010",
    "設施內容": "搖搖馬2座"
  },
  {
    "編號": "82",
    "公園": "金山六街旁公園",
    "行政區": "東區",
    "AreaCode": "10018010",
    "設施內容": "中型滑梯遊具1組、搖搖馬2座"
  },
  {
    "編號": "83",
    "公園": "金山面公園",
    "行政區": "東區",
    "AreaCode": "10018010",
    "設施內容": "中型滑梯遊具1組、搖搖馬4座"
  },
  {
    "編號": "84",
    "公園": "金山公園",
    "行政區": "東區",
    "AreaCode": "10018010",
    "設施內容": "中型滑梯遊具1組、搖搖馬4座"
  },
  {
    "編號": "85",
    "公園": "金山櫻花公園",
    "行政區": "東區",
    "AreaCode": "10018010",
    "設施內容": "中型滑梯遊具1組、搖搖馬2座"
  },
  {
    "編號": "86",
    "公園": "文化公園",
    "行政區": "東區",
    "AreaCode": "10018010",
    "設施內容": "磨石子溜滑梯1座、搖搖馬2座、塑木四人蹺蹺板2座"
  },
  {
    "編號": "87",
    "公園": "關新公園",
    "行政區": "東區",
    "AreaCode": "10018010",
    "設施內容": "大型地景磨石子溜滑梯2座、鋼構盤爬架1座、中型盪鞦韆1座、中型特色滑梯遊具1組"
  },
  {
    "編號": "88",
    "公園": "關埔公園",
    "行政區": "東區",
    "AreaCode": "10018010",
    "設施內容": "複合式溜滑梯1組、彈簧馬3座"
  },
  {
    "編號": "89",
    "公園": "龍山公園",
    "行政區": "東區",
    "AreaCode": "10018010",
    "設施內容": "複合式溜滑梯1組、四人蹺蹺板2座、彈簧馬3座"
  },
  {
    "編號": "90",
    "公園": "光復文化公園",
    "行政區": "東區",
    "AreaCode": "10018010",
    "設施內容": "彈簧馬4座"
  },
  {
    "編號": "91",
    "公園": "馬偕公園",
    "行政區": "東區",
    "AreaCode": "10018010",
    "設施內容": "無"
  },
  {
    "編號": "92",
    "公園": "一品公園",
    "行政區": "東區",
    "AreaCode": "10018010",
    "設施內容": "中型滑梯遊具1組"
  },
  {
    "編號": "93",
    "公園": "關東里公兒四公園",
    "行政區": "東區",
    "AreaCode": "10018010",
    "設施內容": "小型滑梯遊具1組、搖搖馬4座"
  },
  {
    "編號": "94",
    "公園": "綠光公園",
    "行政區": "東區",
    "AreaCode": "10018010",
    "設施內容": "大型地景磨石子滑梯1座、溜索1座、鳥巢盪鞦韆1座、平衡木吊橋1座"
  },
  {
    "編號": "95",
    "公園": "長春公園",
    "行政區": "東區",
    "AreaCode": "10018010",
    "設施內容": "中型特色遊具1組、四人蹺蹺板1座、搖搖馬3座"
  },
  {
    "編號": "96",
    "公園": "綠水里市有公園",
    "行政區": "東區",
    "AreaCode": "10018010",
    "設施內容": "複合式溜滑梯1組"
  },
  {
    "編號": "97",
    "公園": "科園里愛民公園",
    "行政區": "東區",
    "AreaCode": "10018010",
    "設施內容": "複合式溜滑梯1座、彈簧馬3座"
  },
  {
    "編號": "98",
    "公園": "科園里兒童公園",
    "行政區": "東區",
    "AreaCode": "10018010",
    "設施內容": "複合式溜滑梯1組、彈簧馬3座"
  },
  {
    "編號": "99",
    "公園": "後站公園",
    "行政區": "東區",
    "AreaCode": "10018010",
    "設施內容": "地景溜滑梯1座、中型特色遊具1組、搖搖馬3座、木作梅花樁1組"
  },
  {
    "編號": "100",
    "公園": "長青公園",
    "行政區": "東區",
    "AreaCode": "10018010",
    "設施內容": "無"
  },
  {
    "編號": "101",
    "公園": "青草湖風景區",
    "行政區": "東區",
    "AreaCode": "10018010",
    "設施內容": "無"
  },
  {
    "編號": "102",
    "公園": "楓香大道",
    "行政區": "東區",
    "AreaCode": "10018010",
    "設施內容": "無"
  },
  {
    "編號": "103",
    "公園": "集福公園",
    "行政區": "東區",
    "AreaCode": "10018010",
    "設施內容": "中型滑梯遊具1組、搖搖馬5座"
  },
  {
    "編號": "104",
    "公園": "三民路園道",
    "行政區": "東區",
    "AreaCode": "10018010",
    "設施內容": "立體迷宮1座、溜滑梯1座"
  },
  {
    "編號": "105",
    "公園": "經國路園道",
    "行政區": "東區",
    "AreaCode": "10018010",
    "設施內容": "碗公型磨石子溜滑梯1座、小型特色遊具1組"
  },
  {
    "編號": "106",
    "公園": "火車站前廣場",
    "行政區": "東區",
    "AreaCode": "10018010",
    "設施內容": "無"
  },
  {
    "編號": "107",
    "公園": "高峰植物園",
    "行政區": "東區",
    "AreaCode": "10018010",
    "設施內容": "無"
  },
  {
    "編號": "108",
    "公園": "錦華公園",
    "行政區": "東區",
    "AreaCode": "10018010",
    "設施內容": "中型盪鞦韆1座"
  },
  {
    "編號": "109",
    "公園": "新興公園",
    "行政區": "東區",
    "AreaCode": "10018010",
    "設施內容": "無"
  },
  {
    "編號": "110",
    "公園": "天坡府媽祖廟旁公園",
    "行政區": "東區",
    "AreaCode": "10018010",
    "設施內容": "無"
  },
  {
    "編號": "111",
    "公園": "仙宮公園",
    "行政區": "東區",
    "AreaCode": "10018010",
    "設施內容": "無"
  },
  {
    "編號": "112",
    "公園": "東山濕地生態教學公園",
    "行政區": "東區",
    "AreaCode": "10018010",
    "設施內容": "無"
  },
  {
    "編號": "113",
    "公園": "高翠公園",
    "行政區": "東區",
    "AreaCode": "10018010",
    "設施內容": "複合式溜滑梯1座"
  },
  {
    "編號": "114",
    "公園": "高峰公25公園",
    "行政區": "東區",
    "AreaCode": "10018010",
    "設施內容": "複合式溜滑梯1組、彈簧馬3座"
  },
  {
    "編號": "115",
    "公園": "取水口公園",
    "行政區": "東區",
    "AreaCode": "10018010",
    "設施內容": "磨石子溜滑梯一座、攀岩短坡一座。"
  },
  {
    "編號": "116",
    "公園": "新竹左岸",
    "行政區": "北區",
    "AreaCode": "10018020",
    "設施內容": "小型遊具組1座"
  }
]  

for (var i in parksData) {
  if(parksData[i].行政區==="北區"){
      var information = `<div>
                        <h2 style="color: brown;">${parksData[i].公園}</h2>
                        <span>位置｜${parksData[i].行政區}</span>
                        <span>設施｜${parksData[i].設施內容}</span>
                  </div>`;

  // 使用 jQuery 將 information 插入到 HTML 中
  $('#parkList_1').append(information);
  };
}

for (var i in parksData) {
  if(parksData[i].行政區==="東區"){
      var information = `<div>
                        <h2 style="color: brown;">${parksData[i].公園}</h2>
                        <span>位置｜${parksData[i].行政區}</span>
                        <span>設施｜${parksData[i].設施內容}</span>
                  </div>`;

  // 使用 jQuery 將 information 插入到 HTML 中
  $('#parkList_2').append(information);
  };
}

for (var i in parksData) {
  if(parksData[i].行政區==="香山區"||parksData[i].行政區==="香山區公所"){
      var information = `<div>
                        <h2 style="color: brown;">${parksData[i].公園}</h2>
                        <span>位置｜${parksData[i].行政區}</span>
                        <span>設施｜${parksData[i].設施內容}</span>
                  </div>`;

  // 使用 jQuery 將 information 插入到 HTML 中
  $('#parkList_3').append(information);
  };
}


