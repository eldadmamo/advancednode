var localStorage = require('./AdapterPattern/localstorage');

console.log('Number of items', localStorage.length);

const theme = localStorage.getItem("theme_mode");

console.log("theme_mode", theme);

if(!theme){
    console.log("Theme mode not selected");
    localStorage.setItem("theme_mode", "light");
    localStorage.setItem("setting_code", "5");
}
