let burger = document.getElementById("burger-to-x")
let x = document.getElementById("x-to-burger")
let burgernum1 = document.querySelector(".burger-icon-to-x .num1")
let burgernum2 = document.querySelector(".burger-icon-to-x .num2")
let burgernum3 = document.querySelector(".burger-icon-to-x .num3")
let xnum1 = document.querySelector(".x-icon-to-burger .num1")
let xnum2 = document.querySelector(".x-icon-to-burger .num2")
let xnum3 = document.querySelector(".x-icon-to-burger .num3")
let nav = document.getElementById("navforMopile")
burger.addEventListener("click", function() {
    nav.style.right = "0"
    burgernum2.style.opacity = "0"
    burgernum1.style.top = "7px"
    burgernum1.style.backgroundcolor = "red"
    burgernum1.style.rotate = "45deg"
    burgernum3.style.top = "7px"
    burgernum3.style.backgroundcolor = "red"
    burgernum3.style.rotate = "-45deg"
    setTimeout(function() {
        x.style.display = "block"
        burger.style.display = "none"
        burgernum2.style.opacity = "1"
        burgernum1.style.top = "0px"
        burgernum1.style.backgroundcolor = "white"
        burgernum1.style.rotate = "none"
        burgernum1.style.transform = "none"

        burgernum3.style.top = "14px"
        burgernum3.style.backgroundcolor = "white"
        burgernum3.style.rotate = "none"
        burgernum3.style.transform = "none"
    }, 200)
});

x.addEventListener("click", function() {
    nav.style.right = "-100%"

    xnum2.style.backgroundcolor = "white"
    xnum2.style.opacity = "1"
    xnum2.style.top = "7"
    xnum1.style.rotate = "none"
    xnum3.style.rotate = "none"
    xnum1.style.transform = "none"
    xnum3.style.transform = "none"

    xnum1.style.backgroundcolor = "white"
    xnum1.style.top = "0"
    xnum3.style.backgroundcolor = "white"
    xnum3.style.top = "14px"
    setTimeout(function() {
        burger.style.display = "block"
        x.style.display = "none"
        xnum2.style.opacity = "0"
        xnum1.style.top = "7px"
        xnum1.style.backgroundcolor = "red"
        xnum1.style.rotate = "45deg"
        xnum3.style.top = "7px"
        xnum3.style.backgroundcolor = "red"
        xnum3.style.rotate = "-45deg"
    }, 200)

});

// team up and down 
let teamUp = document.getElementById("teamUp");
let teamDown = document.getElementById("teamDown");
let followTeam = document.getElementById("followTeam")
let aAfterfollowTeam = document.querySelector("#followTeam a")

teamDown.addEventListener("click", function() {

    teamDown.style.display = "none"
    teamUp.style.display = "block"
    followTeam.style.display = "block"

    setTimeout(function() {
        aAfterfollowTeam.style.top = "50%"
    }, 200)
})
teamUp.addEventListener("click", function() {
    teamUp.style.display = "none"
    teamDown.style.display = "block"

    setTimeout(function() {
        followTeam.style.display = "none"
    }, 200)
    aAfterfollowTeam.style.top = "-10px"
})
let followAbout1 = document.getElementById("about1")
let followAbout2 = document.getElementById("about2")
let followAbout4 = document.getElementById("about4")
let followAbout5 = document.getElementById("about5")
let followAbout6 = document.getElementById("about6")

let afollowAbout1 = document.querySelector("#about1 a")
let afollowAbout2 = document.querySelector("#about2 a")
let afollowAbout4 = document.querySelector("#about4 a")
let afollowAbout5 = document.querySelector("#about5 a")
let afollowAbout6 = document.querySelector("#about6 a")




// about up and down 
let aboutUp = document.getElementById("aboutUp");
let aboutDown = document.getElementById("aboutDown");
aboutDown.addEventListener("click", function() {
    aboutDown.style.display = "none"
    aboutUp.style.display = "block"
    followAbout1.style.display = "block"
    followAbout2.style.display = "block"
    followAbout4.style.display = "block"
    followAbout5.style.display = "block"
    followAbout6.style.display = "block"
    setTimeout(function() {
        afollowAbout1.style.top = "50%"
        afollowAbout2.style.top = "50%"
        afollowAbout4.style.top = "50%"
        afollowAbout5.style.top = "50%"
        afollowAbout6.style.top = "50%"
    }, 220)
})
aboutUp.addEventListener("click", function() {
    aboutDown.style.display = "block"
    aboutUp.style.display = "none"
    afollowAbout1.style.top = "-10px"
    afollowAbout2.style.top = "-10px"
    afollowAbout4.style.top = "-10px"
    afollowAbout5.style.top = "-10px"
    afollowAbout6.style.top = "-10px"
    setTimeout(function() {
        followAbout1.style.display = "none"
        followAbout2.style.display = "none"
        followAbout4.style.display = "none"
        followAbout5.style.display = "none"
        followAbout6.style.display = "none"
    }, 220)
})






let imagesLanding = document.getElementById("imagesLanding")


window.onresize = WindowSize;
window.onload = WindowSize;

function WindowSize() {
    let myWidth = window.innerWidth;
    imagesLanding.style.width = `${myWidth.toString()}px - 20px`
        // الرقم اللي تحت ده هو ال النسبه بين الطول والعرض للصوره علشان اخلي الاب يتغير علي اساس الصوره 
    imagesLanding.style.height = `calc(${myWidth.toString() / 1.9604743083003952569169960474308}px + 86px)`
};


// landing dots
let landDot1 = document.querySelector(".landing .dots #dot1")
let landDot2 = document.querySelector(".landing .dots #dot2")
let landDot3 = document.querySelector(".landing .dots #dot3")
let landimg1 = document.querySelector(".landing .images .image1")
let landimg2 = document.querySelector(".landing .images .image2")
let landimg3 = document.querySelector(".landing .images .image3")

function imagenum1() {
    landDot1.classList.add("active")
    landDot2.classList.remove("active")
    landDot3.classList.remove("active")
    landimg1.style.left = "0"
    landimg2.style.left = "100%"
    landimg3.style.left = "200%"
}

function imagenum2() {
    landDot1.classList.remove("active")
    landDot2.classList.add("active")
    landDot3.classList.remove("active")
    landimg2.style.left = "0"
    landimg1.style.left = "-100%"
    landimg3.style.left = "100%"
}

function imagenum3() {
    landDot1.classList.remove("active")
    landDot2.classList.remove("active")
    landDot3.classList.add("active")
    landimg2.style.left = "-100%"
    landimg1.style.left = "-200%"
    landimg3.style.left = "0%"
}
landDot1.addEventListener("click", function imagenum1() {
    landDot1.classList.add("active")
    landDot2.classList.remove("active")
    landDot3.classList.remove("active")
    landimg1.style.left = "0"
    landimg2.style.left = "100%"
    landimg3.style.left = "200%"
})


landDot2.addEventListener("click", function imagenum2() {
    landDot1.classList.remove("active")
    landDot2.classList.add("active")
    landDot3.classList.remove("active")
    landimg2.style.left = "0"
    landimg1.style.left = "-100%"
    landimg3.style.left = "100%"
})

landDot3.addEventListener("click", function imagenum3() {
    landDot1.classList.remove("active")
    landDot2.classList.remove("active")
    landDot3.classList.add("active")
    landimg2.style.left = "-100%"
    landimg1.style.left = "-200%"
    landimg3.style.left = "0%"
})

function all() {
    setTimeout(imagenum1, 14000)
    setTimeout(imagenum2, 4000)
    setTimeout(imagenum3, 9000)
}
all();
setInterval(all, 15000)

let about_Down = document.getElementById("about_Down")
let about_Up = document.getElementById("about_Up")
let hoverOnAbout = document.getElementById("hoverOnAbout")
about_Down.addEventListener("click", function() {
    hoverOnAbout.style.display = "block"
    about_Down.style.display = "none"
    about_Up.style.display = "block"
    setTimeout(function() {
        hoverOnAbout.style.opacity = "1"
    }, 50)

})
about_Up.addEventListener("click", function() {
    hoverOnAbout.style.opacity = "0"

    about_Down.style.display = "block"
    about_Up.style.display = "none"
    setTimeout(function() {
        hoverOnAbout.style.display = "none"
    }, 200)
})

// abouthover.addEventListener("mouseover", function() {
//     hoverOnAbout.style.display = "block"
// })
// hoverOnAbout.addEventListener("mouseover", function() {
//     hoverOnAbout.style.display = "block"
// })
// hoverOnAbout.addEventListener("mouseleave", function() {
//     hoverOnAbout.style.display = "none"
// })