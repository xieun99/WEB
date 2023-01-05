// JS 쿠키 사용자 정의 함수 및 전체 삭제 만들기

// 로컬에 저장된 쿠키 뿌려주기
const allCookies = document.cookie; // 하나의 문자열로 return. cookie1=value; cookie2=value;
// console.log(typeof allCookies); //string

// 쿠키 읽기
const getCookie = function() {
    //로컬에 저장된 모두 쿠기 읽어오기
    const allCookies = document.cookie; // 하나의 문자열
    // console.log(allCookies);

    if(allCookies!='')
        alert('내가 만든 쿠키🎵: ' + allCookies);
    else
        alert('만든 쿠키가 없습니다');
}

/*
function getCookie() {
    // if조건
    if(allCookies != '')
        alert('내가 만든 쿠키: '+ allCookies + '\n(다시 방문해주셔서 감사합니다.)');
    else
        alert('저장된 쿠기가 없습니다.\n첫 방문을 환영합니다 :)')
}
*/

// 쿠키 생성하기 --> 함수 표현식
const setCookie = function(cname, cvalue, cexpire) {

    event.preventDefault(); // submit, href 발생 시 --> 이동 방지 및 새로 실행되는 것 방지

    // 넘어온 값 체크
    if(document.getElementById('cname').value != "") {
        cname = document.getElementById('cname').value;
        cvalue = document.getElementById('cvalue').value;
        cexpire = document.getElementById('cexpire').value;
    }
    
    // console.log('cname = '+ cname);
    // console.log('cvalue = '+cvalue);
    // console.log('cexpire = '+cexpire);
    // console.log(typeof cexpire); // string

    //만료일 생성 -> setDate() 사용
    let expiration = new Date();
    // console.log(expiration);
    expiration.setDate(expiration.getDate() + parseInt(cexpire)); // Number()로도 처리 가능
    // console.log(expiration);

    //날짜를 쿠키로 저장하기 위해 UTC 방식으로 표기 --> toUTCString() 메서드 사용
    // console.log(expiration.toUTCString());

    //쿠키 생성하기
    let cookies = '';
    cookies += `${cname} = ${cvalue};`;
    cookies += `expires=${expiration.toUTCString()}`;

    // console.log(cookies);

    // 쿠키 저장하기
    document.cookie = cookies;
    // document.getElementById('cname').value = ""; // 하나씩 초기호ㅏ !
    // document.getElementById('cvalue').value = "";
    // document.getElementById('cexpire').value = "";
    
    document.getElementById('form').reset(); // 한방에 초기화 !
    document.getElementById('cname').focus();
    
    alert("쿠키를 생성했습니땨");


}

// 쿠키 삭제하기
const delCookie = function(cname) {
    // document.cookie = "userid=''; expire=Sat, 01 Jan 1972 00:00:00 GM";
    // console.log(cname);
    setCookie(cname,"",0);
    alert('쿠키를 삭제하였습니다.');
}

/*
function delCookie() {

    if(allCookies != '') {
        document.cookie = 'userid=;expires=Sat, 01 Jan 1972 00:00:00 GMT'; //쿠기 만료일 수정 (쿠키 삭제)
        alert('쿠키를 삭제하였습니다.'); }
    else
        alert('저장된 쿠기가 없습니다.\n첫 방문을 환영합니다 :)')
}
*/

// 쿠키 전체 삭제
const allDelCookies = function(domain, path) {
    // const doc = document;
    domain = domain || document.domain, // 특정 도메인 사용 가능
    path = path || '/';

    if(document.cookie != '') {
       const cookies = document.cookie.split('; ');
       // console.log(cookies); // 배열

       const expiration = 'Sat, 01 Jan 1972 00:00:00 GMT';
       
       // 반복문 순회하며 쿠키 전체 삭제
       for(let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].split('=');
        // console.log(cookie);
        // setCookie(cookie[0],"", 0);
        // document.cookie = cookies[i].split('=')[0] + '=; expires=' + expiration + ';domain=' + domain + '; path=' + path;
        document.cookie = cookies[i].split('=')[0] + '=; expires=' + expiration;
        }

        alert('전체 쿠키를 삭제하였습니다');
         
    } else
        alert('삭제할 쿠키가 없습니다');

}


//addEventListener
const form = document.getElementById('form');
form.addEventListener('submit', setCookie);