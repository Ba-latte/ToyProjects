


let rq_status, rq_header, rq_body;



// [ 🔥날짜 객체🔥 ]
let date = new Date();
console.log("오늘 날짜 : ", date);

// 날짜 가져오기
let year = String(date.getFullYear());
let month = date.getMonth() >= 10 ? String(date.getMonth() + 1) : "0" + (date.getMonth() + 1);
let day = date.getDate() >= 10 ? String(date.getDate()) : "0" + date.getDate();
let today = year + month + day;

console.log("형식 바꾼 후 오늘 날짜 : ", today);

// 시간 가져오기
let hours = date.getHours();
// let hours;
let minutes = date.getMinutes();

console.log("시간 : ", hours);
console.log("분 : ", minutes);

// 40분 업데이트라서 그때까지는 이전 시간을 가져와야 함
if(minutes < 40){
    hours = date.getHours() >= 10 ? (date.getHours() - 1) + "00" : "0" + String(date.getHours() - 1) + "00";
    console.log("40분 전의 시간 : ", hours);
}
else{
    hours = date.getHours() >= 10 ? date.getHours() + "00" : "0" + date.getHours() + "00";
    console.log("40분 후의 시간 : ", hours);
}




const loadFn = ()=>{
    console.log("로드!");
    
    document.querySelector(".click-button").addEventListener("click", ()=>buttonClick());
};

const buttonClick = ()=>{
    console.log("클릭 버튼 클릭!");

    document.querySelector("#success-box").style.display = "block";
    document.querySelector(".click-button").style.display = "none";
};

// DOM 로드된 후 로드 함수 호출하기
window.addEventListener("DOMContentLoaded", loadFn);



// [ 🔥지오로케이션🔥 ]
function getGps(){
    // gps로 현재 위치 받아오는 함수. Promise를 리턴하는 방식
    return new Promise((resolve, rejected)=>{
        navigator.geolocation.getCurrentPosition(resolve, rejected);
    });
}

// Promise를 리턴하는 함수 getGps()를 호출하는 함수 설정하기
async function gps(){
    try{
        let position = await getGps();

        // 알아온 위도, 경도를 x, y값으로 변환하기
        let myLocation = dfs_xy_conv("toXY", position.coords.latitude, position.coords.longitude);

        // 기상청 api에 필요한 인자 정의
        const request = new XMLHttpRequest();
        const request_url = "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst";
        let api_key = "6HIkKh7KKnlw7jYdT234sQ90InBtgolchCFyx3BncydLonZcp1R1D9naw%2FCJ3XqGdKzEfTrxV6A84cTWSagNEg%3D%3D";
        let page_Num = "1";
        let num_of_rows = "40";
        let data_type = "XML";
        let request_date = today;
        let request_time = hours;

        let request_x = myLocation.x;
        let request_y = myLocation.y;

        
        console.log("🔥x, y값 받아와🔥 : ", request_x, request_y);
        
        // 날씨 정보 받아오는 함수
        const getWeatherInfo = new Promise((success)=>{
            
            let queryParams = '?' + encodeURIComponent('serviceKey') + '='+'6HIkKh7KKnlw7jYdT234sQ90InBtgolchCFyx3BncydLonZcp1R1D9naw%2FCJ3XqGdKzEfTrxV6A84cTWSagNEg%3D%3D'; /* Service Key */
            queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent(page_Num); /* 페이지 넘버 (1:초단기실황조회 / 2:초단기예보조회 / 3:단기예보조회 / 4:예보버전조회) */
            queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent(num_of_rows); /* 한 페이지 결과 수 */
            queryParams += '&' + encodeURIComponent('dataType') + '=' + encodeURIComponent(data_type); /* 요청 자료 형식 */
            queryParams += '&' + encodeURIComponent('base_date') + '=' + encodeURIComponent(request_date); /* 발표일 */
            queryParams += '&' + encodeURIComponent('base_time') + '=' + encodeURIComponent(request_time); /* 발표시간 */
            queryParams += '&' + encodeURIComponent('nx') + '=' + encodeURIComponent(request_x); /* 예보지점의 X 좌표값 */
            queryParams += '&' + encodeURIComponent('ny') + '=' + encodeURIComponent(request_y); /* 예보지점의 Y 좌표값 */
            
            
            request.open("GET", request_url + queryParams);
            
            
            request.onreadystatechange = function(){
                if(this.readyState == 4 && this.status == 200){
                    // console.log('Status: '+this.status+'nHeaders: '+JSON.stringify(this.getAllResponseHeaders())+'nBody: '+this.responseText);
                    
                    success(this.response);
                    
                    rq_status = this.status;
                    rq_header = JSON.stringify(this.getAllResponseHeaders());
                    rq_body = this.responseText;
                }
                else{
                    // console.log(this.statusText);
                }
            };
            
            request.send();
            
        });
        
        // 날씨 정보
        getWeatherInfo.then(success => {    
            
            let xmlParser = new DOMParser();
            let xmlDoc = xmlParser.parseFromString(success, "text/xml");
            console.log("xml 문서 : ", xmlDoc);

            let category = xmlDoc.querySelectorAll("category");
            let value = xmlDoc.querySelectorAll("obsrValue");
            // console.log("카테고리 : ",category);

            let category_arr = [];
            let value_arr = [];
            let obj = [];
            
            category.forEach(val => {
                // console.log("카테고리 : ", val);
                val.childNodes.forEach(v => {
                    // console.log("카테고리의 노드 값 : ", v, v.nodeType);
                    if(v.nodeType === 3) category_arr.push(v.textContent);
                })
            });

            value.forEach(val => {
                // console.log("값 : ", val);
                val.childNodes.forEach(v => {
                    // console.log("벨류의 노드 값 : ", v, v.nodeType);
                    if(v.nodeType === 3) value_arr.push(v.textContent);
                });
            });

            // console.log("뽑아낸 카테고리 이름 : ", category_arr);
            // console.log("뽑아낸 벨류 값 : ", value_arr);
            
            document.querySelector(".printBx").innerText = `
            👉강수 형태 : ${ptyCodeFn(value_arr[0])}
            👉습도 : ${rehCodeFn(value_arr[1])} %
            👉기온 : ${t1hCodeFn(value_arr[3])} ℃
            👉풍속 : ${wsdCodeFn(value_arr[7])} m/s
            `;
            // console.log("🔥🔥지금 위치🔥🔥 : ", request_x, request_y);
        });
        
        
        
    }
    catch(err){
        console.log("오류...");
    }
}

gps();

/*
    그러니까 지금 중요한게.... 순서가.....
    1. 지오로케이션으로 위치 가져오기
    2. 가져온 위치값 x,y로 변환하기
    3. 기상청 api 요청할 때 넣어서 보내기
    4. 기다렸다가 값 받아오기
    참고 문헌 : https://yam-cha.tistory.com/198
    
*/

// 습도 나타내기
const rehCodeFn = (v)=>{
    console.log("습도 값 : ", v);
    let humidity;

    if(v == undefined){
        humidity = "아직 알 수 없어요 😉";
    }
    else{
        humidity = v;
    }

    return humidity;
}

// 강수 형태 나타내기
const ptyCodeFn = (v)=>{
    // 강수형태(PTY) 코드 : 없음(0), 비(1), 비/눈(2), 눈(3), 빗방울(5), 빗방울눈날림(6), 눈날림(7)
    console.log("강수 형태 값 : ", v);
    val = v;
    let temp = "";

    switch (val) {
        case "0": 
            temp = "안 와요 😊";
            break;
        case 1: 
            temp = "비가 내려요 ☂";
            break;
        case 2: 
            temp = "비/눈이 내려요 ☔";
            break;
        case 3: 
            temp = "눈이 내려요 ⛄";
            break;
        case 5: 
            temp = "빗방울이 떨어져요 💧";
            break;
        case 6: 
            temp = "빗방울/눈송이가 떨어져요 ❄";
            break;
        case 7: 
            temp = "눈이 날려요 ☃";
            break;
        case undefined: 
            temp = "아직 알 수 없어요 😉";
            break;
        default : 
            break;
    }

    return temp;
}

// 기온 나타내기
const t1hCodeFn = (v)=>{
    console.log("기온 값 : ", v);
    let temperature;

    if(v == undefined){
        temperature = "아직 알 수 없어요 😉";

    }
    else{
        temperature = v;
    }

    return temperature;
}

// 풍속 나타내기
const wsdCodeFn = (v)=>{
    console.log("풍속 : ", v);
    let wind_speed;
    if(v == undefined){
        wind_speed = "아직 알 수 없어요 😉";
    }
    else{
        wind_speed = v;
    }

    return wind_speed;
}





///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////

// 소스출처 : http://www.kma.go.kr/weather/forecast/digital_forecast.jsp  내부에 있음
// 기상청에서 이걸 왜 공식적으로 공개하지 않을까?
//
// (사용 예)
// var rs = dfs_xy_conv("toLL","60","127");
// console.log(rs.lat, rs.lng);
//


// [ 🔥LCC DFS 좌표변환을 위한 기초 자료🔥 ]
//
var RE = 6371.00877; // 지구 반경(km)
var GRID = 5.0; // 격자 간격(km)
var SLAT1 = 30.0; // 투영 위도1(degree)
var SLAT2 = 60.0; // 투영 위도2(degree)
var OLON = 126.0; // 기준점 경도(degree)
var OLAT = 38.0; // 기준점 위도(degree)
var XO = 43; // 기준점 X좌표(GRID)
var YO = 136; // 기1준점 Y좌표(GRID)
//
// LCC DFS 좌표변환 ( code : "toXY"(위경도->좌표, v1:위도, v2:경도), "toLL"(좌표->위경도,v1:x, v2:y) )
//


function dfs_xy_conv(code, v1, v2) {
    var DEGRAD = Math.PI / 180.0;
    var RADDEG = 180.0 / Math.PI;

    var re = RE / GRID;
    var slat1 = SLAT1 * DEGRAD;
    var slat2 = SLAT2 * DEGRAD;
    var olon = OLON * DEGRAD;
    var olat = OLAT * DEGRAD;

    var sn = Math.tan(Math.PI * 0.25 + slat2 * 0.5) / Math.tan(Math.PI * 0.25 + slat1 * 0.5);
    sn = Math.log(Math.cos(slat1) / Math.cos(slat2)) / Math.log(sn);
    var sf = Math.tan(Math.PI * 0.25 + slat1 * 0.5);
    sf = Math.pow(sf, sn) * Math.cos(slat1) / sn;
    var ro = Math.tan(Math.PI * 0.25 + olat * 0.5);
    ro = re * sf / Math.pow(ro, sn);
    var rs = {};
    if (code == "toXY") {
        rs['lat'] = v1;
        rs['lng'] = v2;
        var ra = Math.tan(Math.PI * 0.25 + (v1) * DEGRAD * 0.5);
        ra = re * sf / Math.pow(ra, sn);
        var theta = v2 * DEGRAD - olon;
        if (theta > Math.PI) theta -= 2.0 * Math.PI;
        if (theta < -Math.PI) theta += 2.0 * Math.PI;
        theta *= sn;
        rs['x'] = Math.floor(ra * Math.sin(theta) + XO + 0.5);
        rs['y'] = Math.floor(ro - ra * Math.cos(theta) + YO + 0.5);
    }
    else {
        rs['x'] = v1;
        rs['y'] = v2;
        var xn = v1 - XO;
        var yn = ro - v2 + YO;
        ra = Math.sqrt(xn * xn + yn * yn);
        if (sn < 0.0) - ra;
        var alat = Math.pow((re * sf / ra), (1.0 / sn));
        alat = 2.0 * Math.atan(alat) - Math.PI * 0.5;

        if (Math.abs(xn) <= 0.0) {
            theta = 0.0;
        }
        else {
            if (Math.abs(yn) <= 0.0) {
                theta = Math.PI * 0.5;
                if (xn < 0.0) - theta;
            }
            else theta = Math.atan2(xn, yn);
        }
        var alon = theta / sn + olon;
        rs['lat'] = alat * RADDEG;
        rs['lng'] = alon * RADDEG;
    }
    return rs;
}


// LCC DFS 좌표변환 ( code : "toXY"(위경도->좌표, v1:위도, v2:경도), "toLL"(좌표->위경도,v1:x, v2:y) )
// let rs = dfs_xy_conv("toXY","37.4964224","127.0349824"); // 학원에서 얻은 위경도값!
