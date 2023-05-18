const translations = {
    en: {
      header: 'Personal Portfolio',
    },
    es: {
      header: 'Portafolio Personal',
    }
};

// Function to set the language
function translateElements(lang) {
    document.getElementById('header').textContent = translations[lang].header;
}

// Function to get the user's language preference from a cookie or session variable
function getUserLanguage() {
    preferedLanguage = localStorage.getItem('lang');
    if (preferedLanguage) {
        return preferedLanguage;
    }
    return 'en';
}

function setPreferedLanguage() {
    console.log("Language set to Spanish");
    localStorage.setItem('lang', 'es');
    translate();
}

function translate(){
    // Set the language on page load
    const userLanguage = getUserLanguage();
    translateElements(userLanguage);
}

translate();
document.getElementById('switch-language').addEventListener('click', setPreferedLanguage);