// 로컬 스토리지(Local Storage) 데이터 값들 출력하기

window.onload = () => {

    localStorage.setItem('user-id', 'dawon');
    localStorage.setItem('color', '#626063');
    localStorage.setItem('font-weight', 724);
    localStorage.setItem('user-name', '상혁');
    localStorage.setItem('background-color', '#F5949F');

    //버튼 가져오기
    const btnAllView = document.querySelector('.btnAllView');
    //console.log(btnAllView);

    let btnRemove;

    //버튼 클릭 시
    btnAllView.addEventListener('click', () => {
        // 로컬 스토리지 데이터 값들 가져와 출력하기
        // const getData = localStorage.getItem('background-color');
        // console.log(getData);

        // 키(key)만 출력하기
        // console.log(localStorage.key(0)); //user-id
        // console.log(localStorage.key(1)); //color

        // 키(key)가 몇개 인지? -> legnth
        // console.log(localStorage.length);

        // 배열 정보를 동적으로 테이블 생성하여 삽입하기 -> tbody

        /*
        let ar = new Array();
        let result = "";

        ar.push({name: '홍길동', email:'hong@hong.com', age:25, pastime: '음악감상'});
        ar.push({name: '이상혁', email:'dawon@hong.com', age:29, pastime: '헬스'});
        ar.push({name: '김인성', email:'inseong@hong.com', age:31, pastime: '북극곰관람'});
        ar.push({name: '이재윤', email:'jaeng@hong.com', age:30, pastime: '앙앙웅웅'});
        ar.push({name: '김영균', email:'0@hong.com', age:25, pastime: '작곡'});

        // console.log(ar[1].name); // 이상혁
        // console.log(ar[1].email); // dawon@hong.com
        // console.log(ar[1].age); // 29
        // console.log(ar[1].pastime); // 헬스

        // 반복문을 순회하며 배열의 정보를 result 변수에 누적
        for(const i in ar) {
            //console.log(i);
            result += "<tr>"
            result += "<td>" + ar[i].name + "</td>";
            result += "<td>" + ar[i].email + "</td>";
            result += "<td>" + ar[i].age + "</td>";
            result += "<td>" + ar[i].pastime + "</td>";
            result += "</tr>"
        }

        let hTbody = document.getElementById('htmlTbody');
        console.log(hTbody);

        // Append
        // $('#htmlTbody').empty(); // 비우기
        // $('#htmlTbody').append(result);

        // Append - JS
        // hTbody.append(result); // 텍스트 문자열 형태로 append
        // hTbody.appendChild(result); // node error
        // hTbody.innerText(result); // 괄호가 x
        // hTbody.innerText = result; // 텍스트 문자열 형태로 append
        hTbody.innerHTML = result;
        */

        // 결과 변수 > 우선 반복문 쓰지 않고 하나만 출력.

        // let result = "";
        // result += "<tr>"
        // result += "<td class='align-middle' width='300px'>" + localStorage.key(0) + "</td>"
        // result += "<td class='align-middle'>" + localStorage.getItem(localStorage.key(0))+ "</td>"
        // result += "<td><button class='btn'> remove </button></td>"
        // result += "</tr>"

        // let hTbody = document.getElementById('htmlTbody');
        // hTbody.innerHTML = result;

        // 반복문 사용해 출력
        let ar = new Array();
        let result = "";

        for(let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            const value = localStorage.getItem(key);

            result += "<tr>";
            result += "<td class='align-middle' width='300px'>" + key + "</td>";
            result += "<td class='align-middle'>" + value + "</td>";
            result += "<td><button class='btn'> remove </button></td>";
            result += "</tr>";

            ar.push(result);
        }

        $('#htmlTbody').empty();
        $('#htmlTbody').append(result)

        let hTbody = document.getElementById('htmlTbody');
        btnRemove = hTbody.querySelectorAll('.btn');
        //console.log(btnRemove);
        
        for(let i = 0; i < btnRemove.length; i++) {
            btnRemove[i].addEventListener('click', function() {
                localStorage.removeItem(localStorage.key(i));
            })
        }
        // hTbody.innerHTML = result;
    });

    

}