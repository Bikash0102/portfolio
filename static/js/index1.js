/*==================== MENU SHOW Y HIDDEN ====================*/
const loader=document.getElementById('preloader')
window.addEventListener('load',()=>{
loader.style.display="none";
    
})
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
function updateCounter() {
  fetch('https://api.countapi.xyz/update/bikash/bikku/?amount=1')
      .then(res => res.json())
      .then(data => counterElement.innerHTML = data.value)
}

updateCounter()

document.oncontextmenu=()=>
{
  alert("Don't right click")
  return false
}
document.onkeydown = e =>{
  if(e.key=="F12")
  {
    alert("Don't try to inspect element")
    return false
  }
  if(e.ctrlKey && e.key=="u")
  {
    alert("Don't try to view source code")
    return false
  }
  if(e.ctrlKey && e.key=="c")
  {
    alert("Don't try to copy source code")
    return false
  }
  if(e.ctrlKey && e.key=="v")
  {
    alert("Don't try to paste")
    return false
  }


}


counterElement = document.getElementsByClassName('count')[0];
/* Validate if constant exists */
if (navToggle) {
   navToggle.addEventListener('click', () =>{
     navMenu.classList.add('show_menu')
   }) 
}
/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')

const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

//Previously selected topic(if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
  
}

themeButton.addEventListener('click', () => {
  var tom3=new Audio("static/images/bass.mp3");
            tom3.play();
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})

 const resumebtm = document.getElementById('buts');
resumebtm.addEventListener('click',() => {
  var tom2=new Audio("static/images/resume.mp3");
            tom2.play();
})
const sendbtm = document.getElementById('btn');
sendbtm.addEventListener('click',() => {
  var tom3=new Audio("static/images/send.mp3");
            tom3.play();
})

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', ()=> {
        navMenu.classList.remove('show_menu')
    })
}
const element= document.getElementById("text");

const prases=["Web Development","Machine Learning","Competitive Coding"];
let letterindex=0;
let phraseindex=0;
function printletter(prase)
{
    if(letterindex==prase.length)
    {
       
        clearletter();
       
        
     }
    else if(letterindex<prase.length)
    {
        element.textContent += prase.charAt(letterindex);
        letterindex +=1;
        
       
    setTimeout(function(){
        printletter(prase)
    },150)
  }
}
 function clearletter()

    {
       
        if(letterindex==-1)
        {
            
            phraseindex=(phraseindex+1)%prases.length;
            letterindex=0;
            printletter(prases[phraseindex]);
            if(phraseindex==0)
            {
                 element.style.color="blue";
            }
            if(phraseindex==1)
            {
                element.style.color="red";
            }
            if(phraseindex==2)
            {
                element.style.color="orange";
            }



        }

        else if(letterindex>-1)
        {
            
            let updatedprase=" ";
            
            
            for(let index=0;index<letterindex;index++)
            {
                updatedprase+=prases[phraseindex].charAt(index);
            }
           
          
            element.textContent=updatedprase;
            letterindex-=1;
            
            setTimeout(clearletter,100);
           
           
        }
    }
    printletter(prases[phraseindex]);
    element.style.color="green";


    
/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('.nav_menu')
    navMenu.classList.remove(show_menu)
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills_content'),
      skillsHeader = document.querySelectorAll('.skills_header')

function toggleSkills(){
  let itemClass = this.parentNode.className

  for(i = 0; i < skillsContent.length; i++){
    skillsContent[i].className = 'skills_content skills_close'
  }
  if (itemClass === 'skills_content skills_close') {
    this.parentNode.className = 'skills_content skills_open'
  }
}

  // initialization of aos
  AOS.init({
    duration: 850,
    once: true
  });

skillsHeader.forEach((el) => {
  el.addEventListener('click', toggleSkills)
})

let heed= document.querySelector(".section__subtitle");
const divs=document.querySelector(".pl");
let data= document.querySelector(".pg");
let img= document.querySelector(".about_img");
setInterval(inTimer, 7000);

function inTimer()
{
  data.classList.add('ptag')
  divs.classList.remove('ptag');
  img.src="static/images/ml.png";
  heed.textContent="Machine Learning"
  

  
 
}  



    
  
  
  
  
  

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
  tab.addEventListener('click', () =>{
    const target = document.querySelector(tab.dataset.target)

    tabContents.forEach(tabContent =>{
      tabContent.classList.remove('qualification_active')
    })
    target.classList.add('qualification_active')

    Object.values(tab).forEach(tab =>{
      tab.classList.remove('qualification_active')
    })
    tab.classList.add('qualification_active')
  })
})

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services_modal'),
      modalBtns = document.querySelectorAll('.services_button'),
      modalCloses = document.querySelectorAll('.services_modal-close')

let modal = function(modalClick){
  modalViews[modalClick].classList.add('active_modal')
}

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener('click', () => {
    modal(i)
  })
})

modalCloses.forEach((modalClose) => {
  modalClose.addEventListener('click', () =>{
    modalViews.forEach((modalView) => {
      modalView.classList.remove('active_modal')
    })
  })
})



/*==================== TESTIMONIAL ====================*/
let swiperTestimonial = new Swiper('.testimonial_container', {
  loop: true,
  grabCursor: true,
  spaceBetween: 48,

  pagination: {
    el: '.swiper-pagiantion',
    clickable: true,
    dynamicBullets: true
  },

  breakpoints:{
    568:{
      slidesPerView: 2,
    }
  }
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
  const scrollY = window.pageYOffset 

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 58,
          sectionId = current.getAttribute('id')

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active_link')
    } else {
      document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active_link')
    }
  })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    if (this.scrollY >= 80) {
      nav.classList.add('scroll_header');  
    } else {
      nav.classList.remove('scroll_header') 
    }
}
window.addEventListener('scroll',scrollHeader)



