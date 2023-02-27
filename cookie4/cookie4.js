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


