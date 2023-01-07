
window.onload = () => {

    const main = document.querySelectorAll('.main');
    const lyrics = document.querySelectorAll('.lyrics');

    for(let i = 0; i < lyrics.length; i++) {
        main[i].addEventListener('click', () => {
            
            for(let j = 0; j < main.length; j++) {
                if(i != j)
                    lyrics[j].classList.remove('active');
            }
            
            if(lyrics[i].classList.length > 1)
                lyrics[i].classList.remove('active');
            else
                lyrics[i].classList.add('active');

            
        });
    }

    const btnClose = document.getElementById('btn-close');

    btnClose.addEventListener('click', function() {
        for(let i = 0; i < main.length; i++) {
            lyrics[i].classList.remove('active');
        }
    });
}