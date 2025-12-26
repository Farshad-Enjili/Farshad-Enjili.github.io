function socialMedia(element,str){
switch(str){
  case 'facebook':
    window.open('https://www.facebook.com/sharer/sharer/','_blank');
    break;
  case 'twitter':
    window.open('https://www.twitter.com/sharer/sharer/','_blank');
    break;
  case 'instagram':
    window.open('https://www.instagram.com/sharer/sharer/','_blank');
    break;
  case 'whatsapp':
    window.open('https://www.whatsapp.com/sharer/sharer/','_blank');
    break;
  default:
    break;
}
}
function contactUs(element,str){
  let id=element.id;
  switch(id){
    case 'tel':
      navigator.clipboard.writeText(str);
      alert('Copied to clipboard : ' + str);
      break;
    case 'emailAddress':
      navigator.clipboard.writeText(str);
      window.open('https://mail.google.com/mail/u/0/#inbox?compose=new','_blank');
      alert('Copied to clipboard : ' + str);
      break;
    default:
      break;
  }
}
function navbarLink(element,str){
  switch(str){
    case 'home':
      window.open('http://localhost:63342/HTML/school%20(%20F%20)/index.html?_ijt=1rm11t5s4sqs3kr33e7fffpbec&_ij_reload=RELOAD_ON_SAVE','_self');
      break;
    case 'description':
      window.open('http://localhost:63342/HTML/school%20(%20F%20)/asset/pages/description/index.html?_ijt=qht21u4kug533kkvra21kpa767&_ij_reload=RELOAD_ON_SAVE','_blank');
      break;
    case 'registration':
      window.open('http://localhost:63342/HTML/school%20(%20F%20)/asset/pages/regitration/index.html?_ijt=64550d3asjd5q3pci47l88k0na&_ij_reload=RELOAD_ON_SAVE','_blank');
      break;
    case 'gallery':
      window.open('http://localhost:63342/HTML/school%20(%20F%20)/asset/pages/gallery/index.html?_ijt=64550d3asjd5q3pci47l88k0na&_ij_reload=RELOAD_ON_SAVE','_blank');
      break;
    case 'news':
      window.open('http://localhost:63342/HTML/school%20(%20F%20)/asset/pages/news/index.html?_ijt=64550d3asjd5q3pci47l88k0na&_ij_reload=RELOAD_ON_SAVE','_blank');
      break;
    default:
      break;
  }
}
document.getElementById('navbarSectionToggle').addEventListener('click', function(){
  let toggle=document.getElementById('navbarSectionDropdown');
  toggle.classList.toggle('d-none');
})
document.getElementById('navbarExtraToggle').addEventListener('click', function(){
  let toggle=document.getElementById('navbarExtraDropdown');
  toggle.classList.toggle('d-none');
})
document.getElementById('navbarSearchToggle').addEventListener('click', function(){
  let icon=document.getElementById('navbarSearchToggle');
  let toggle=document.getElementById('navbarSearchArea');
  toggle.classList.toggle('d-none');
  icon.classList.toggle('d-none');
})
document.getElementById('navbarSearchAreaToggle').addEventListener('click', function(){
  let icon=document.getElementById('navbarSearchToggle');
  let toggle=document.getElementById('navbarSearchArea');
  toggle.classList.toggle('d-none');
  icon.classList.toggle('d-none');
})
//                          -------------------- Sidebar ---------------------
document.getElementById('menuBar').addEventListener('click', function(){
  let toggle=document.getElementById('sidebarMenu');
  toggle.classList.toggle('d-none');
});
document.getElementById('sidebarSectionToggle').addEventListener('click', function(){
  let toggle=document.getElementById('sidebarSectionGroupLink');
  toggle.classList.toggle('sidebar-dropdown-active');
})
document.getElementById('sidebarExtraToggle').addEventListener('click', function(){
  let toggle=document.getElementById('sidebarExtraGroupLink');
  toggle.classList.toggle('sidebar-dropdown-active');
})
//                          -------------------- Form ------------------------
const formIds = Array();
const formValues = Array();
const formErrors =Array();
const form=document.getElementById('form');
for(let i=0; i<form.length-1;i++)
  formIds[i]=form.elements[i].id;
for(let i=0; i<form.length-1;i++)
  formErrors[i]=formIds[i]+'Error';
form.addEventListener('submit', (e)=>{
  let n=0;
  let errorNumbers = Array();
  for(let i=0; i<form.length-1;i++)
    document.getElementById(formErrors[i]).innerHTML ='';
  for(let i=0; i<form.length-1;i++)
    formValues[i]=form.elements[i].value;
  for(let i=0; i<form.length-1;i++)
    if(formValues[i]==='')
      n+=1;
    if(n!==0){
      e.preventDefault();
      for(let i=0; i<form.length-1;i++)
        if(formValues[i]=== '' || formValues[i]== null)
          errorNumbers.push(i);
      for(let num of errorNumbers)
        document.getElementById(formErrors[num]).innerHTML = 'لطفا جای خالی را پر کنید !';
    }
})
//                          -------------------- Down Menu ------------------------
document.getElementById('bottomMenu').addEventListener('click', function(){
  let toggle=document.getElementById('sidebarMenu');
  toggle.classList.toggle('d-none');
});
document.getElementById('bottomSearch').addEventListener('click', function(){
  let toggle=document.getElementById('bottomSearchArea');
  toggle.classList.toggle('d-none');
});
document.getElementById('bottomSearchClose').addEventListener('click', function(){
  let toggle=document.getElementById('bottomSearchArea');
  toggle.classList.toggle('d-none');
});
//                       ------------------------ Footer ----------------------------
function footerLink(element,str){
  switch(str){
    case 'a':
      window.open('http://localhost:63342/HTML/school%20(%20F%20)/index.html?_ijt=1rm11t5s4sqs3kr33e7fffpbec&_ij_reload=RELOAD_ON_SAVE','_self');
      break;
    case 'b':
      window.open('http://localhost:63342/HTML/school%20(%20F%20)/asset/pages/description/index.html?_ijt=qht21u4kug533kkvra21kpa767&_ij_reload=RELOAD_ON_SAVE','_blank');
      break;
    case 'c':
      window.open('http://localhost:63342/HTML/school%20(%20F%20)/asset/pages/regitration/index.html?_ijt=64550d3asjd5q3pci47l88k0na&_ij_reload=RELOAD_ON_SAVE','_blank');
      break;
    case 'd':
      window.open('http://localhost:63342/HTML/school%20(%20F%20)/asset/pages/gallery/index.html?_ijt=64550d3asjd5q3pci47l88k0na&_ij_reload=RELOAD_ON_SAVE','_blank');
      break;
    case 'e':
      window.open('http://localhost:63342/HTML/school%20(%20F%20)/asset/pages/news/index.html?_ijt=64550d3asjd5q3pci47l88k0na&_ij_reload=RELOAD_ON_SAVE','_blank');
      break;
    case 'f':
      window.open('http://localhost:63342/HTML/school%20(%20F%20)/index.html?_ijt=1rm11t5s4sqs3kr33e7fffpbec&_ij_reload=RELOAD_ON_SAVE','_self');
      break;
    case 'g':
      window.open('http://localhost:63342/HTML/school%20(%20F%20)/asset/pages/description/index.html?_ijt=qht21u4kug533kkvra21kpa767&_ij_reload=RELOAD_ON_SAVE','_blank');
      break;
    case 'h':
      window.open('http://localhost:63342/HTML/school%20(%20F%20)/asset/pages/regitration/index.html?_ijt=64550d3asjd5q3pci47l88k0na&_ij_reload=RELOAD_ON_SAVE','_blank');
      break;
    case 'i':
      window.open('http://localhost:63342/HTML/school%20(%20F%20)/asset/pages/gallery/index.html?_ijt=64550d3asjd5q3pci47l88k0na&_ij_reload=RELOAD_ON_SAVE','_blank');
      break;
    case 'j':
      window.open('http://localhost:63342/HTML/school%20(%20F%20)/asset/pages/news/index.html?_ijt=64550d3asjd5q3pci47l88k0na&_ij_reload=RELOAD_ON_SAVE','_blank');
      break;
    case 'k':
      window.open('http://localhost:63342/HTML/school%20(%20F%20)/asset/pages/gallery/index.html?_ijt=64550d3asjd5q3pci47l88k0na&_ij_reload=RELOAD_ON_SAVE','_blank');
      break;
    case 'l':
      window.open('http://localhost:63342/HTML/school%20(%20F%20)/asset/pages/news/index.html?_ijt=64550d3asjd5q3pci47l88k0na&_ij_reload=RELOAD_ON_SAVE','_blank');
      break;
    default:
      break;
  }
}
