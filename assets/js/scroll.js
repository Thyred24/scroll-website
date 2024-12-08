for(var i =1; i < 9; i++) {
    ScrollReveal().reveal(`.portfolyo .portfolyo-item:nth-child(${i})`, {
        delay: 200 * i
    });
}

/*
todo
1- loading
1.1- arka plan siyah
1.2- sağdan soldan yukarıdan aşağıdan center olacak şekilde ortaca logo
1.3- animasyon tamamlanınca ortada ki logo sol üst tarafa animasyonlu bir şekilde gidecek
2- hero bölümüne sallanan 1-2 tane abstract obje eklenecek loading bittikten sonra bu objeler;
2.1- scale:0, opacity:0 'dan scale: 1, opacity: 1 olarak gelecek (küçük ve görünmezden büyük (var olan hali) ve görünür animasyonu)



//

animasyonları bi durdur şu şeyleri hatta neyse bekle
*/

window.sr = ScrollReveal();

sr.reveal('.anime-left', {
    origin: 'left',
    duration: 1000,
    distance: '25rem',
    delay: 300
})


sr.reveal('.anime-right', {
    origin: 'right',
    duration: 1000,
    distance: '25rem',
    delay: 450
})


sr.reveal('.anime-top', {
    origin: 'top',
    duration: 1000,
    distance: '25rem',
    delay: 300
})


sr.reveal('.anime-bottom', {
    origin: 'bottom',
    duration: 1000,
    distance: '25rem',
    delay: 300
})
