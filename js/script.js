// local storage
let favcolor = localStorage.getItem('color-option');
let activecolor = localStorage.getItem('active-class');
if (favcolor !== null){
    document.documentElement.style.setProperty('--main--color--', favcolor); 
    document.querySelectorAll('.colors-list li').forEach(ele =>{
        ele.classList.remove('active');
        if(ele.dataset.color == favcolor ){ele.classList.add('active')};
    });

}

// console.log(localStorage.getItem('color-option'))

// settings
let icon = document.querySelector('.toggle .fa-gear');
let toggle = document.querySelector('.toggle');
let box = document.querySelector('.settings-box');
icon.onclick = function() {
    this.classList.toggle('fa-spin');
    box.classList.toggle('open')
};
 //change colors :
 const colorslist = document.querySelectorAll('.colors-list li');
colorslist.forEach(li => {
    li.addEventListener('click', (e)=>{
        document.documentElement.style.setProperty('--main--color--', e.target.dataset.color);
        localStorage.setItem('color-option', e.target.dataset.color);
        //remove active class 
        e.target.parentElement.querySelectorAll('.active').forEach(ele =>{
            ele.classList.remove('active');
        });
         //add active class 
        e.target.classList.add('active');

    });
} );
/////
// random background
let backgroundoption = true;
let backgroundInterval;
////////

let backgroundstorage = localStorage.getItem('random-background');
if(backgroundstorage !== null){
    if(backgroundstorage === 'true'){
         backgroundoption = true;
    }
    else {
         backgroundoption = false;

    }
    document.querySelectorAll('.random-backgrounds span').forEach(span => {
        span.classList.remove('active');
    })
  if (backgroundstorage === 'true'){
    document.querySelector('.random-backgrounds .yes').classList.add('active');
  } else {
    document.querySelector('.random-backgrounds .no').classList.add('active');
  }
};

// change backgrounds
const backspan = document.querySelectorAll('.random-backgrounds span');
backspan.forEach(span => {
    span.addEventListener('click', (e)=>{
        //remove active class 
        e.target.parentElement.querySelectorAll('.active').forEach(span =>{
            span.classList.remove('active');
        });
         //add active class 
        e.target.classList.add('active');
        if (e.target.dataset.background === 'yes'){
            backgroundoption = true;
            backgroundrandomizer ();
            localStorage.setItem('random-background', 'true');
        }
        else{
            backgroundoption = false;
            clearInterval(backgroundInterval);
            localStorage.setItem('random-background', 'false');
        }

    });
} );

// select page element 
let page = document.querySelector('.landing-page');
//  get imgs array 
let imgsarray=['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg',];
// change img url
page.style.backgroundImage = 'url("imgs/4.jpg")';
//////
function backgroundrandomizer () {
    if(backgroundoption === true){
        backgroundInterval = setInterval(() => {
            let randomnum= Math.floor(Math.random() * imgsarray.length);
            page.style.backgroundImage = `url("imgs/${imgsarray[randomnum]}")`;
        },2000);
    };
}
backgroundrandomizer ();
// skillz progress 

 let ourskills = document.querySelector('.skills');
/* window.onload = function () {
    let allskills = document.querySelectorAll('.skill-box .skill-progress span');
    allskills.forEach(skill =>{
        skill.style.width = skill.dataset.progress;
  });

} **/

window.onscroll = function () {
    let offsetskill = ourskills.offsetTop;
    console.log(offsetskill);

    let skillsheight = ourskills.offsetHeight;
    console.log(skillsheight);

    let windowheight = this.innerHeight;
    console.log(windowheight);

    let windowscroll = this.pageYOffset;
    console.log(windowscroll);

    if(windowscroll > (offsetskill + skillsheight - windowheight)){
        console.log('you there');
        let allskills = document.querySelectorAll('.skill-box .skill-progress span');
        allskills.forEach(skill => {
              skill.style.width = skill.dataset.progress;
        });
    }

};

// gallery popup
let gallery = document.querySelectorAll('.gallery img');
gallery.forEach(img =>{
    img.addEventListener('click' ,(e) =>{
        // create the overlay
        let overlay = document.createElement('div');
        overlay.className = 'over-lay';
        document.body.appendChild(overlay);
        // create the img box
        let popupbox = document.createElement('div');
        popupbox.className = 'popupbox';
            //   create the heading 
    if (img.alt !== null){
        let heading = document.createElement('h3');
        let  htext =  document.createTextNode(img.alt);
        heading.appendChild(htext);
        popupbox.appendChild(heading);

        let popupimg= document.createElement('img');
        popupimg.src = img.src;
        popupbox.appendChild(popupimg);
        document.body.appendChild(popupbox);

        // create the close span
        let closebutton = document.createElement('span');
        let closetext = document.createTextNode('X');
        closebutton.appendChild(closetext);
        closebutton.className = 'close-button';
        popupbox.appendChild(closebutton);

    }



    });
});

// close button
document.addEventListener('click' , function (e) {
    if(e.target.className == 'close-button' ){
         document.querySelector('.over-lay').remove();
         e.target.parentNode.remove();
          
    }
})

// select bullets
const bullets = document.querySelectorAll('.nav-bullets .bullets');
bullets.forEach(bullet => {
  bullet.addEventListener('click', (e) =>{
     document.querySelector(e.target.dataset.section).scrollIntoView({
         behavior: "smooth"
     });
  });
});

// select Links
const links = document.querySelectorAll('.links a');
links.forEach(link => {
  link.addEventListener('click', (e) =>{
      e.preventDefault();
     document.querySelector(e.target.dataset.section).scrollIntoView({
         behavior: "smooth"
     });
  });
});
// select bullets

let bulletsoptions = document.querySelectorAll('.bullets-options span');
let  bulletscontainer = document.querySelector('.nav-bullets');
let bulletsLocalS= localStorage.getItem('bullets-option');
if(bulletsLocalS !== null){
    bulletsoptions.forEach(span  => {
     span.classList.remove('active');
    });
if(bulletsLocalS === 'block'){
    bulletscontainer.style.display = 'block';
    document.querySelector('.bullets-options .yes').classList.add('active');
}else {
    bulletscontainer.style.display = 'none';
    document.querySelector('.bullets-options .no').classList.add('active');
}
}
bulletsoptions.forEach(bull => {
    bull.addEventListener('click', (e)=>{
       if(bull.dataset.shown === "show"){
           bulletscontainer.style.display = 'block';
           localStorage.setItem('bullets-option', 'block')
       }else {
        bulletscontainer.style.display = 'none';
        localStorage.setItem('bullets-option', 'none')
       }
       //remove active class 
       e.target.parentElement.querySelectorAll('.active').forEach(bull =>{
        bull.classList.remove('active');
    });
     //add active class 
    e.target.classList.add('active');
    });
});

// reset all function 
document.querySelector('.settings-box .resetall').onclick = function () {
    localStorage.clear();
    window.location.reload();
}
// toggle menu 
let togglebtn = document.querySelector('.links-toggle');
let  tlinks = document.querySelector('.links');
togglebtn.onclick = function (e) {
    e.stopPropagation();
    this.classList.toggle('menu-active');
    tlinks.classList.toggle('open');
    tlinks.onclick = function(e) {
        e.stopPropagation();
    }
}
document.addEventListener('click' , (e)=>{
    if(e.target !== togglebtn && e.target !== tlinks ) {
        if(tlinks.classList.contains('open')){
        tlinks.classList.remove('open');
        togglebtn.classList.remove('menu-active')
    }
    }
});