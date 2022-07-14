function changeMode(){
    changeClasses();
}

function changeClasses (){
    button.classList.toggle(darkModeCass);
    h1.classList.toggle(darkModeCass);
    body.classList.toggle(darkModeCass);
    footer.classList.toggle(darkModeCass);
}

function changeText(){
    const lightMode = "Light Mode"
    const darkMode = "Dark Mode"
     
    if(body.classList.contains(darkModeCass)){
        button.innerHTML = lightMode;
        h1.innerHTML = darkMode = "ON";
        return;
    }
    button.innerHTML = darkMode;
        h1.innerHTML = lightMode = "ON";
}


const darkModeCass = 'dark-mode';
const button = document.getElementById ('mode-selector');
const h1 = document.getElementById ('page-title');
const body = document.getElementsByTagName ('body')[0];
const footer = document.getElementsByTagName ('footer')[0];

button.addEventListener ('click', changeMode);