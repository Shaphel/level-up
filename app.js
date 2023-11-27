
const fullName = document.getElementById('fullName').textContent;
const fullNameDropdown= document.getElementById('fullName-dropdown').textContent;
const initials = fullName.split(' ').map(name => name[0]).join('').toUpperCase();
const initialsDropdown = fullNameDropdown.split(' ').map(name => name[0]).join('').toUpperCase();
document.getElementById('profileImage').innerHTML = initials;
document.getElementById('profileImage-dropdown').innerHTML= initialsDropdown


const arrowDown= document.querySelector(".down-arrow");
const arrowUp= document.querySelector(".up-arrow")
const accordion= document.querySelector(".accordion");
const setUp= document.querySelector(".setup");

const profile= document.querySelector(".nav-profile");
const moreProfile= document.querySelector('.nav-moreprofile');




arrowDown.addEventListener("click", () =>{
    arrowDown.classList.toggle("active");
    accordion.classList.toggle("active");
    arrowUp.classList.toggle("active");
})


// navbar dropdown notification and profile

const bell= document.querySelector(".notify-a");
const alerts= document.querySelector(".alerts");

bell.addEventListener("click", () =>{
    bell.classList.toggle("active");
    alerts.classList.toggle("active")
});
// navbar dropdown and profile



profile.addEventListener("click", () =>{
    profile.classList.toggle("active");
    moreProfile.classList.toggle("active");
})

// 

document.getElementById('close-X').onclick= function (){
    var trial= document.getElementById("extend-trial");
    if (trial.style.display === 'none'){
        trial.style.display = "block";
    }else{
        trial.style.display= 'none';
    }
}






let allButtons = document.querySelectorAll('button.btn-check');

if(allButtons && allButtons.length){
    allButtons.forEach(btn =>{
        btn.addEventListener('click', event => {
            if(btn.classList.contains('selected')){
                btn.classList.remove('selected');
                btn.setAttribute('aria-checked','false');
            }else{
                btn.classList.add('loader');
            }
            handleProgress();
        });

        btn.addEventListener('animationend', event => {
            if(btn.classList.contains('loader')){
                btn.classList.remove('loader');
                btn.classList.add('selected');
            }

            if(btn.classList.contains('selected')){
                btn.setAttribute('aria-checked','true');
            }

            handleProgress()
        })
    })
}

function handleProgress(){
    let progressText = document.getElementById('progress-p')
    let selectedBtns = document.querySelectorAll('button.btn-check.selected');
    let percentage = (selectedBtns.length / allButtons.length) * 100;
    document.querySelector('.progress-bar .progress').style.width = percentage + "%";

    progressText.innerHTML= selectedBtns.length + "/5 Completed";
}

