// var mToggle = document.getElementById("menu-toggle")
// var menu = document.getElementById("navigation")
// const dropdown = () => {
//     menu.classList.toggle("dropdown")
//     console.log("You Are")
// }
// mToggle.addEventListener("click", dropdown) 

var mToggle = document.getElementById("menu-toggle")
    var menu = document.getElementById("navigation")
    
    const active = () => {
        menu.classList.toggle("navigation")
        console.log("You are welcome")

    }

       mToggle.addEventListener("click", active) 

    //    slide logic
    // let slideindex = 0
    // const slides = document.getElementsByClassName("slide")

    //  function keep (){
    //     for(var i = 0; i < slides.length; i++){
    //         slides[i].style.display= "none"
    //     }

    // }
    // function slideShow(){
    //     keep ()
    //     slideindex++
    //     if (slideindex < keep.length){
    //         slideindex = 1
    //     }
    //     slides[slideindex - 1].style.display ="block"
    // }
    // keep()
  let slideindex = 0

    const slides = document.getElementsByClassName("slide")

    
    const hide = () =>{
        for(var i = 0; i < slides.length; i++){
            slides[i].style.display ="none"
        }

    }
    const showSlides = () => {
        hide ()
        slideindex ++
        if (slideindex > slides.length){
            slideindex = 1
        }
        slides[slideindex - 1].style.display = "block"
        setTimeout(showSlides, 1000)

    }
    const changeSlides= (n) => {
        slideindex+=n
        if( slideindex > slides.length){
            slideindex = 1
        }else if (slides.length < 1){
            slideindex = slides.length
            hide()
            slides[slideindex - 1].style.display = "block"

        }
   }
   showSlides ()


    // 07012799641


   