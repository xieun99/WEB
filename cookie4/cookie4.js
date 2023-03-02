// 라이브러리를 이용한 JS 쿠키 - js-cookie https://github.com/js-cookie/js-cookie

// [1] js-cookie 기본적인 생성법 --> Cookies.set('쿠키명', '쿠키값');
Cookies.set('userid', 'superman');

// [2] js-cookie 기본적 생성법 + 만료일 지정 --> Cookies.set('쿠키명', '쿠키값', {expires:7});
Cookies.set('username', 'batman', {expires:7});

// [3] js-cookie 생성 + 만료일 + 패스 --> Cookies.set('쿠키명', '쿠키값', {expires:7, path: '/'});
Cookies.set('cname', 'antman', {expires:7, path:'/'});

// [4] js-cookie 읽기
const cookie_userid = Cookies.get('userid');
console.log(cookie_userid); // superman
console.log(Cookies.get('asdf')) // undefined

// [5] js-cookie 모두 읽기
const allCookies = Cookies.get();
console.log(allCookies); // {쿠키명: '쿠키값', 쿠키명2: '쿠키값2', ... } => 객체 형태로 모두 return
console.log(typeof allCookies); // object

// [6] js-cookie 삭제
// Cookies.remove('userid');
// const allCookies2 = Cookies.get();
// console.log(allCookies2);

// 쿠키 삭제 함수
const delCookie = function (cname) {
    event.preventDefault();

    cname = document.getElementById('cname');
    let cval = cname.value;

    console.log(cval); //userid

    Cookies.remove(cval);

    cname.value = '';
    cname.focus();
    alert(`${cval} 쿠키를 삭제하였습니다`);

}

const form = document.getElementById('form');
form.addEventListener('submit', delCookie);

// [6-1] 쿠키 생성 시 옵션 지정 함께 삭제시에도 --> 똑같이 필요?
console.clear();
Cookies.set('dw', 'sh', {expires:7, path:'/'});
// $.removeCookie('dw', {path:'/'});
Cookies.remove('dw'); // default로 path:'/' 가 적용 됨. --> 옵션 지정한 것과 같음. 

Cookies.set('dwww', '724', {expires:7, path:'/cookie4/'});
// Cookies.remove('dwww');
Cookies.remove('dwww', {path:'/cookie4/'});

// [7] js-cookie 전체 삭제 --> Not possible
// 보여지는 쿠키들에 대한 전체 삭제를 한다면?
console.clear();
console.log(Object.keys(Cookies.get())); // Array 형태로 쿠키 이름만 가져옴.

function allDelCookies() {
    Object.keys(Cookies.get()).forEach(function(cName) {
    
        // 할 일 처리
        let neededOptions = {
            // domain:"test.com"
            domain: "127.0.0.1"
        };
    
        Cookies.remove(cName, neededOptions);
    
    });
    alert('쿠키가 전체 삭제되었습니다');
}

// [8] UserGetCookie 함수 만들기 - 일반적인 For 반복문으로 순회하며 처리
console.clear();
console.log(document.cookie); // userid=superman; username=batman; cname=antman

// 쿠키 읽기
const userGetCookie = function(cname) {
    
    let name = cname+"=";
    // console.log(name); // userid=

    let allCookie = decodeURIComponent(document.cookie).split('; '); // '; ' 한 칸 띄어쓰기 주의
    // console.log(allCookie);
    
    // encodeURIComponent 는 자바스크립트에서 string을 UTF-8로 인코딩해주는 함수.
    // decodeURIComponent 는 encodeURIComponent로 escape된 string을 다시 원래의 string으로 return 해주는 함수.
    // 비슷한 메서드 --> encodeURI, decodeURI, escape, unescape

    let cval = [];
    for( let i = 0; i < allCookie.length; i++) {
        // console.log(allCookie[i].trim().indexOf(name));

        // indexOf 메서드의 return 값 --> 배열일 경우 --> 검색된 항목의 index 값
        // string일 경우 --> 검색된 문자열의 첫 글자의 index 값
        // 검색 결과가 없을 경우 --> -1 return

        if(allCookie[i].trim().indexOf(name) == 0) {
            cval = allCookie[i].trim().split('=');
            console.log(cval); // ['userid', 'superman']
            console.log(cval[1]); // superman
            console.log(cval.length); // 2 --> 의미? --> 배열의 0과 1 --> 0: 쿠키명, 1: 쿠키값 이라는 뜻.
        }
    }

    return (cval.leng > 0)? cval[1] : "nothing";

}

// console.log('userGetCookie 함수로 리턴된 값은 = ' + userGetCookie('user'));

// [8-1] userGetCookie 함수 만들기 연습 --> oneGetCookie
const oneGetCookie = function(cname) {
    let name = cname + "=";
    let all = document.cookie.split('; ');
    let val = [];

    for(let i = 0; i < all.length; i++) {
        if (all[i].trim().indexOf(name) == 0) {
            val = all[i].trim().split('=');
        }
    }

    return (val.length > 0)? val[1] : "nothing";
}

console.log(oneGetCookie('userid'));

// [9] forEach 메서드 이용한 userGetCookie2 함수 만들기
console.clear();
console.log(document.cookie);

const userGetCookie2 = function(cname) {
    
    // 1. 객체 변수 선언
    let cookie = {} ; // {username:'batman', cname:'antman', userid:'superman'} <-- 이렇게 저장시키기

    // 2. 반복 처리 - forEach()
    document.cookie.split(';').forEach(function(el){
        
        // 할 일 처리
        
        // let [k, v] = el.split('=');
        let [k, v] = el.trim().split('='); // 공백 처리

        cookie[k] = v;   // k.trim() 으로 공백처리 하여 넣을 수도 있음
        // console.log(cookie);

    });

    // return cookie[cname]; // superman
    return (cookie[cname] != undefined)? cookie[cname] : "no result";
}

console.log(userGetCookie2('aaa'));

// [10] ES6 버전으로 userGetCookie3 함수 만들기

console.clear();

const userGetCookie3 = function(cname) {

    // 1. cname 수정
    cname = cname + "="; // userid=

    // 2. 문자열(쿠키명) 찾기
    const str = document.cookie;
    //console.log(str);

    const isCookieidx = str.indexOf(cname);
    // boolean isCookie = str.contains(cname); // Java 에서는 contains() 사용 --> 대신 --> indexOf() 메서드 사용.
    //console.log(isCookieidx); // cname 검색 시 --> 34 반환. 없으면 -1

    // 3.쿠키 가져와서 분리 --> 처리
    let result = 'no result';

    if(isCookieidx >= 0) {
        // 할 일 처리

        result = document.cookie
            .split('; ')
            .find(item => item.startsWith(cname))
            .split('=');

        // console.log(result);

    }

    return (result.length > 0)? result[1]:"nothing";
}

console.log(userGetCookie3('cname'));


function showCval(cname) {
    const div = document.getElementById('cval');
    // div.textContent = userGetCookie3(cname);
    div.value = userGetCookie3(cname);
}

function clearCval() {
    const div = document.getElementById('cval');
    // div.textContent = '';
    div.value = '';
}

// [10-1] startWith() 사용 방법
// 문자열 검색 시 특정 문자열로 시작하는 지 체크 --> true / false 로 반환
// 즉, 검색할 문자열로 시작하면 true, 아니면 false
// str.startWith(검색문자열[, position])
// position 옵션은 '검색문자열'을 탐색할 위치 지정. 기본값 --> 0
// 대소문자 구분.

// 문자열인 경우
console.clear();
const str = "상혁이는 귀엽다. 상혁이는 사랑스럽다.";

console.log(str.startsWith('상혁이는'));     // true
console.log(str.startsWith('영균이는'));     // false
console.log(str.startsWith('상혁이는', 6));  // false
console.log(str.startsWith('상혁이는', 10)); // true

// 배열인 경우
console.clear();

const ar = "dog=5; cat=7; hippo=9; lion=4";
console.log(typeof(ar)); // str

const ar2 = ar.split('; ');
console.log(ar2);

const ar3 = ar2.find(item => item.startsWith('hippo=')); // 주어진 조건의 함수를 만족하는 첫번째 요소의 값 반환. 그런게 없다면 undefined 반환
console.log(ar3);

const ar4 = ar3.split('=');
console.log(ar4); // ['hippo', '9']

console.log(ar4[1]);            // 9 
console.log(ar3.split('=')[1]); // 9 --> ar3에서 바로 출력

const ar5 = ar2.findIndex(item => item.startsWith('hippo=')); // 주어진 조건의 함수를 만족하는 첫번째 요소의 index 반환. 그런게 없다면 -1 반환
console.log(ar5); // 2

// 배열 요소의 위치 찾기 --> .indexOf()
// 배열 요소가 해당 배열에 존재하는지 체크 --> .indexOf() 또는 .includes()



