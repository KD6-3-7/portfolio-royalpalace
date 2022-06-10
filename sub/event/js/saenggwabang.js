window.onload = function() {
    const modalOne = document.querySelector(".modal-one")
    const modalTwo = document.querySelector(".modal-two")
    const modalThree = document.querySelector(".modal-three")
    const modalFour = document.querySelector(".modal-four")
    const modalFive = document.querySelector(".modal-five")
    const modalSix = document.querySelector(".modal-six")
    const modalSeven = document.querySelector(".modal-seven")
    const modalEight = document.querySelector(".modal-eight")
    const modalNine = document.querySelector(".modal-nine")
    const modalTen = document.querySelector(".modal-ten")
    const modalElev = document.querySelector(".modal-elev")
    const modalTwel = document.querySelector(".modal-twel")
    const modalWindow = document.querySelector("#modalWindow")

    const openBox1 = document.querySelector("#snack1")
    const openBox2 = document.querySelector("#snack2")
    const openBox3 = document.querySelector("#snack3")
    const openBox4 = document.querySelector("#snack4")
    const openBox5 = document.querySelector("#snack5")
    const openBox6 = document.querySelector("#snack6")
    const openBox7 = document.querySelector("#tea1")
    const openBox8 = document.querySelector("#tea2")
    const openBox9 = document.querySelector("#tea3")
    const openBox10 = document.querySelector("#tea4")
    const openBox11 = document.querySelector("#tea5")
    const openBox12 = document.querySelector("#tea6")

    const closeModal1 = document.querySelector(".closeBtn1")
    const closeModal2 = document.querySelector(".closeBtn2")
    const closeModal3 = document.querySelector(".closeBtn3")
    const closeModal4 = document.querySelector(".closeBtn4")
    const closeModal5 = document.querySelector(".closeBtn5")
    const closeModal6 = document.querySelector(".closeBtn6")
    const closeModal7 = document.querySelector(".closeBtn7")
    const closeModal8 = document.querySelector(".closeBtn8")
    const closeModal9 = document.querySelector(".closeBtn9")
    const closeModal10 = document.querySelector(".closeBtn10")
    const closeModal11 = document.querySelector(".closeBtn11")
    const closeModal12 = document.querySelector(".closeBtn12")
 
    openBox1.addEventListener("click", function() {
        modalOne.style.display = "block"
    })
    closeModal1.addEventListener("click", function() {
        modalOne.style.display = "none"
    })

    openBox2.addEventListener("click", function() {
        modalTwo.style.display = "block"
    })
    closeModal2.addEventListener("click", function() {
        modalTwo.style.display = "none"
    })

    openBox3.addEventListener("click", function() {
        modalThree.style.display = "block"
    })
    closeModal3.addEventListener("click", function() {
        modalThree.style.display = "none"
    })

    openBox4.addEventListener("click", function() {
        modalFour.style.display = "block"
    })
    closeModal4.addEventListener("click", function() {
        modalFour.style.display = "none"
    })

    openBox5.addEventListener("click", function() {
        modalFive.style.display = "block"
    })
    closeModal5.addEventListener("click", function() {
        modalFive.style.display = "none"
    })

    openBox6.addEventListener("click", function() {
        modalSix.style.display = "block"
    })
    closeModal6.addEventListener("click", function() {
        modalSix.style.display = "none"
    })

    openBox7.addEventListener("click", function() {
        modalSeven.style.display = "block"
    })
    closeModal7.addEventListener("click", function() {
        modalSeven.style.display = "none"
    })

    openBox8.addEventListener("click", function() {
        modalEight.style.display = "block"
    })
    closeModal8.addEventListener("click", function() {
        modalEight.style.display = "none"
    })

    openBox9.addEventListener("click", function() {
        modalNine.style.display = "block"
    })
    closeModal9.addEventListener("click", function() {
        modalNine.style.display = "none"
    })

    openBox10.addEventListener("click", function() {
        modalTen.style.display = "block"
    })
    closeModal10.addEventListener("click", function() {
        modalTen.style.display = "none"
    })

    openBox11.addEventListener("click", function() {
        modalElev.style.display = "block"
    })
    closeModal11.addEventListener("click", function() {
        modalElev.style.display = "none"
    })

    openBox12.addEventListener("click", function() {
        modalTwel.style.display = "block"
    })
    closeModal12.addEventListener("click", function() {
        modalTwel.style.display = "none"
    })
}