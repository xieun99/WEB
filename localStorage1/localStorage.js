// 브라우저 로컬 데이터에 저장, 불러오기, 삭제

// [!] 주요 메서드 3개
// 값 저장하기 --> localStorage.setItem('key', value);
// 값 가져오기 --> lcoalStorage.getItem('key');
// 값 삭제하기 --> localStorage.removeItem('key');
// 키(key)를 그대로 놓고 새로운 값을 저장하면 덮어쓰기가 되며 기존 로컬 데이터 정보가 수정 됨.


window.onload = () => {
    //Set Data 버튼
    const btnSLD = document.querySelector('.btnSetLocalData');
    //console.log(btnSLD);

    //GetData 버튼
    const btnGLD = document.querySelector('.btnGetLocalData');

    //Remove 버튼
    const btnRLD = document.querySelector('.btnRemoveLocalData');

    //Input text 값
    const input = document.querySelector('input');
    
    //Set Data 버튼 클릭 시
    btnSLD.addEventListener('click', () => {
        //입력한 텍스트 값 가져오기
        const inputValue = input.value;
        //console.log(inputValue);

        //localStorage에 저장하기
        localStorage.setItem('userid', inputValue);
        input.value = "";
    });

    //Get Data 버튼 클릭 시
    btnGLD.addEventListener('click', () => {
        //localStorage 값 가져오기
        const value = localStorage.getItem('userid');

        if(!value)
            alert('해당 키로 로컬에 저장된 데이터 없음.');
        else
            input.value = value; // input 텍스트 박스에 삽입;
    });

    //Remove Data 버튼 클릭 시
    btnRLD.addEventListener('click', () => {
        const value = localStorage.getItem('userid');

        if(!value)
            alert('해당 키로 로컬에 저장된 데이터 없음.');
        else
            localStorage.removeItem('userid');
    });

}