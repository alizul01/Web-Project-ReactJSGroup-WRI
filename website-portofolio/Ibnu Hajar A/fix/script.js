// TOGGLE
const toggle = document.querySelector('.header .toggle');
const sidebar = document.querySelector('.sidebar');
toggle.addEventListener('click' , function() {
     sidebar.classList.toggle('active');
     toggle.classList.toggle('active');
})

// responsive
const main_width = window;
const main = document.querySelector('.main');

main_width.addEventListener('resize' , function () {
     if (window.innerWidth < 725) {
          main.classList.add('responsive');
     }
     else {
          main.classList.remove('responsive');
     }
})

// parallax


// LOAD
window.addEventListener('load' , function () {

     const header = document.querySelector('.header');
     const skew = document.querySelector('.skew');
     header.classList.add('active');

     if (window.innerWidth < 725) {
          main.classList.add('responsive');
     }
     else {
          main.classList.remove('responsive');
     }

     this.setTimeout(function () {
          skew.classList.add('active');
     },550)
     
     const about_me = document.querySelector('.about-me');
     this.setInterval(function () {
          about_me.style.opacity = 1;
     }, 1300);


     });
     
     
     
     // SCROLL
     window.addEventListener('scroll' , function () {
          const croll = window.pageYOffset;
          
     // main
     const width = window.innerWidth;

     if(width >500 ) {
          const main_contain = document.querySelector('.main-1 .contain');
          main_contain.style.transform = "translate(0px, " + croll/2 + "%)";
          
          const main_main_2 = document.querySelector('.main-2');
          main_main_2.style.transform = "translate(0px, " + croll/4 + "%";
     }
     

     // EDUCATIONS
     // const cEducations = document.querySelector('.pre-about .container');
     // const rCeducations = cEducations.offsetTop;
     // // console.log(rCeducations);
     // if (croll >rCeducations - 300 ) {
     //      const oT = document.querySelector('.one-two');
     //      const tF = document.querySelector('.three-four');
     //      oT.classList.add('atas');
     //      tF.classList.add('bawah');
     // }

     // PORTOFOLIO
     const porto_isi = document.querySelectorAll('.img .isi');
     const porto = document.querySelector('.portofolio');
     const hPre_porto = porto.offsetTop;
     if (croll >hPre_porto - 200 ) {
          porto_isi.forEach(function (item,index) {
               setTimeout(function () {
                    porto_isi[index].classList.add('active');
               }, 200 * (index))
          });
     }
});

