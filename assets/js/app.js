let menuItems = document.getElementById("menuItems");
menuItems.style.maxHeight = "0px";

function menuToggle(){
    if(menuItems.style.maxHeight == "0px"){
        menuItems.style.maxHeight = "200px";
    }else{
        menuItems.style.maxHeight = "0px";
    }
}

// TweenMax.to(".header-logo", , {
//     x: "100",
//     y: "120" ,
//     scale: "1.2" ,
//     ease: Expo.easeInOut
// })

const tl_header = gsap.timeline({ ease: "Power1.easeInOut" });

// tl_header.to(".header", {
//     duration: 1,
//     backgroundColor: "#000",
//     y: "10%",
//     delay: 2 // Animasyonun başlatılması için gecikme süresi (2 saniye)
// });

// GSAP animasyonları
/* gsap.to(".header", {
    duration: 5,
    opacity: 0,
    backgroundColor: "#000",
    onComplete: showContent
}); */

gsap.to(".header-logo", {
    duration: 2,
    delay: 3,
    opacity: 1 ,
    left: "19%" ,
    ease: "power1.inOut"
});

gsap.to("section", {
    duration: 1, // Animasyon süresi
    delay: 2,
    opacity: 1,
    ease: "power1.inOut" // Animasyon eğrisi
});

gsap.to("footer", {
    duration: 1, // Animasyon süresi
    delay: 2,
    opacity: 1,
    ease: "power1.inOut" // Animasyon eğrisi
});

gsap.to("body", {
    duration: 1, // Animasyon süresi
    delay: 2,
    backgroundColor: "#fff",
    ease: "power1.inOut" // Animasyon eğrisi
});

gsap.to(".header-text h1", {
    duration: 2,
    transform: "scale(1)",
    ease: "power1.inOut"
});

gsap.to(".header-text h3", {
    duration: 2,
    delay: 1,
    opacity: 1 ,
    ease: "power1.inOut"
});

gsap.to(".btn-dress", {
    duration: 2,
    delay: 3,
    opacity: 1 ,
    ease: "power1.inOut"
});

gsap.to(".hero-logo img", {
    duration: 2,
    delay: 2,
    opacity: 1 ,
    ease: "power1.inOut"
});

gsap.to(".hero-logo", {
    duration: 2,
    delay: 2,
    backgroundColor: "#fff",
    ease: "power1.inOut"
}); 

gsap.to(".header-menu", {
    duration: 2,
    delay: 2,
    opacity: 1 ,
    left: "64.5%" ,
    ease: "power1.inOut"
});

gsap.to(".header-menu", {
    duration: 2,
    delay: 2,
    opacity: 1 ,
    left: "64.5%" ,
    ease: "power1.inOut"
});


const portfolyoItems = document.querySelectorAll('.portfolyo');

portfolyoItems.forEach(item => {
    item.addEventListener('click', function() {
        gsap.to(this.querySelector('.portfolyo-item'), {
            scale: 5, 
            left: "35%" ,
            zIndex: 111 ,
            duration: 2 
        });

        gsap.to(this.querySelector('.portfolyo-item'), {
            backgroundColor: "white",
            duration: 1 
        });

        gsap.to(this.querySelector('.portfolyo-item img'), {
            opacity: 0, 
            duration: 2, 
        });

        setTimeout(() => {
            window.location.href = this.dataset.href;
        }, 2000); 
    });
});

function overlay() {
    let overlay = document.querySelector(".overley");

    overlay.style.display = "none";
}

