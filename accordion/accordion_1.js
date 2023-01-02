window.onload = () => {

    // panel-faq-container
    const panelFaqContainer = document.querySelectorAll('.panel-faq-container');
    //console.log(panelFaqContainer); //NodeList 객체
    
    // panel-faq-container
    let panelFaqAnswer = document.querySelectorAll('.panel-faq-answer');
    //console.log(panelFaqAnswer[i]);

    //btn-all-close
    let btnAllClose = document.getElementById('btn-all-close');
    console.log(btnAllClose);

    for(let i = 0; i < panelFaqContainer.length; i++) {
        panelFaqContainer[i].addEventListener('click', function() {
            //클릭시 처리 할 일
            console.log('click ' + i);

            //FAQ 제목 클릭 -> 본문 -> active class 추가.
            //this.classList.add('active');
            panelFaqAnswer[i].classList.add('active');
        })
    }

    btnAllClose.addEventListener('click', function() {
        console.log('all close');

        // 클릭시 처리할 일
        for(let i = 0; i < panelFaqAnswer.length; i++) {
            panelFaqAnswer[i].classList.remove('active');
        }
    });
}

