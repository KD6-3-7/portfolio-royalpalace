// faq 아코디언
const faqAcc = document.getElementsByClassName("title");

for (let i = 0; i < faqAcc.length; i++) {
    faqAcc[i].onclick = function() {
        // 클릭이 일어났을 때 기존에 열려 있던 아코디언을 접는다. (1개의 아코디언만 열리도록)
        for (let j = 0 ; j < faqAcc.length; j++) {
            // 버튼 상태에 입혀진 active 라는 클래스를 지운다.
            faqAcc[j].classList.remove("open");
            // 버튼 다음에 있는 div 콘텐츠 높이를 0으로 만든다. == 아코디언을 접는다.
            if (this !== faqAcc[j]) {
                faqAcc[j].nextElementSibling.style.maxHeight = null;
                faqAcc[j].nextElementSibling.style.paddingTop = null;
            }
        }

        this.classList.toggle("open");
        const panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            this.classList.remove("open");
            panel.style.paddingTop = null;
            panel.style.maxHeight = null;
        } else {
            panel.style.paddingTop = "20px";
            panel.style.maxHeight = panel.scrollHeight + 20 + "px";
        }
    }
}