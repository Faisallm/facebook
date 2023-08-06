

// we are going to change the height of this
// element whenever we click on the user's avatar.
var settingsmenu = document.querySelector('.settings-menu');
var  darkBtn = document.getElementById('dark-btn');

function settingsMenuToggle() {
    settingsmenu.classList.toggle('settings-menu-height');
}

// this method of adding onClick()...
// is much cleaner.
darkBtn.onclick = function () {
    darkBtn.classList.toggle('dark-btn-on');
    document.body.classList.toggle("dark-theme");
    if(localStorage.getItem('theme') ==  "light") {
        // at first click this will  be set to dark.
        localStorage.setItem('theme',  'dark');
    } else {
        localStorage.setItem('theme',  'light');
    }
}

// local storage in javascript\
// when users load the website
if (localStorage.getItem("theme") ==  "light") {
    // remove css decoration for dark theme.
    darkBtn.classList.remove('dark-btn-on');
    document.body.classList.remove("dark-theme");
}
else if (localStorage.getItem("theme") ==  "dark") {
    darkBtn.classList.add('dark-btn-on');
    document.body.classList.add("dark-theme");
}
else {
    // default mode is light
    localStorage.setItem("theme", "light");
}

