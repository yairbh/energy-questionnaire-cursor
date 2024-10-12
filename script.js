const questionnaireData = {
    1: {
        title: "איזה סוג תחנת כוח אתם מציעים לבנות בישראל?",
        options: [
            { text: "גז טבעי", icon: "גז.png", goto: 2 },
            { text: "טורבינת רוח", icon: "רוח.png", goto: 3 },
            { text: "הידרו-אלקטרי", icon: "הידרו.png", goto: 4 },
            { text: "פוטו-וולטאי", icon: "פוטו-וולטאית.png", goto: 5 },
            { text: "תרמו-סולארי", icon: "תרמו-סולארי.png", goto: 6 },
            { text: "גרעיני", icon: "גרעיני.png", goto: 7 }
        ]
    },
    2: {
        title: "גז טבעי",
        options: [
            { text: "להמשיך עם גז טבעי", goto: 9 },
            { text: "לבחור תחנת כוח אחרת", goto: 8 }
        ]
    },
    3: {
        title: "טורבינת רוח",
        options: [
            { text: "להמשיך עם טורבינות רוח", goto: 10 },
            { text: "לבחור תחנת כוח אחרת", goto: 8 }
        ]
    },
    4: {
        title: "הידרו-אלקטרי",
        options: [
            { text: "להמשיך עם הידרו-אלקטרי", goto: 11 },
            { text: "לבחור תחנת כוח אחרת", goto: 8 }
        ]
    },
    5: {
        title: "פוטו-וולטאי",
        options: [
            { text: "להמשיך עם פוטו-וולטאי", goto: 12 },
            { text: "לבחור תחנת כוח אחרת", goto: 8 }
        ]
    },
    6: {
        title: "תרמו-סולארי",
        options: [
            { text: "להמשיך עם תרמו-סולארי", goto: 13 },
            { text: "לבחור תחנת כוח אחרת", goto: 8 }
        ]
    },
    7: {
        title: "גרעיני",
        options: [
            { text: "להמשיך עם גרעיני", goto: 14 },
            { text: "לבחור תחנת כוח אחרת", goto: 8 }
        ]
    },
    8: {
        title: "באיזו תחנת כוח בחרת?",
        options: [
            { text: "גז טבעי", icon: "גז.png", goto: 9 },
            { text: "טורבינת רוח", icon: "רוח.png", goto: 10 },
            { text: "הידרו-אלקטרי", icon: "הידרו.png", goto: 11 },
            { text: "פוטו-וולטאי", icon: "פוטו-וולטאית.png", goto: 12 },
            { text: "תרמו-סולארי", icon: "תרמו-סולארי.png", goto: 13 },
            { text: "גרעיני", icon: "גרעיני.png", goto: 14 }
        ]
    },
    9: {
        title: "גז טבעי",
        options: [
            { text: "לאשר את הבחירה בגז טבעי", goto: 15 },
            { text: "לעבור לאפשרות אחרת", goto: 8 }
        ]
    },
    10: {
        title: "טורבינות רוח",
        options: [
            { text: "לאשר את הבחירה בטורבינות רוח", goto: 15 },
            { text: "לעבור לאפשרות אחרת", goto: 8 }
        ]
    },
    11: {
        title: "הידרו-אלקטרי",
        options: [
            { text: "לאשר את הבחירה בהידרו-אלקטרי", goto: 15 },
            { text: "לעבור לאפשרות אחרת", goto: 8 }
        ]
    },
    12: {
        title: "פוטו-וולטאי",
        options: [
            { text: "לאשר את הבחירה בפוטו-וולטאי", goto: 15 },
            { text: "לעבור לאפשרות אחרת", goto: 8 }
        ]
    },
    13: {
        title: "תרמו-סולארי",
        options: [
            { text: "לאשר את הבחירה באנרגיה תרמו-סולארית", goto: 15 },
            { text: "לעבור לאפשרות אחרת", goto: 8 }
        ]
    },
    14: {
        title: "גרעיני",
        options: [
            { text: "לאשר את הבחירה באנרגיה גרעינית", goto: 15 },
            { text: "לעבור לאפשרות אחרת", goto: 8 }
        ]
    },
    15: {
        title: "החלטה סופית",
        text: "תודה על תשובותיכם! כפי שראיתם, לכל סוג של תחנת כוח יש יתרונות וחסרונות משלו. מורכבות זו מדגישה את החשיבות של הבנת תהליכי ייצור האנרגיה בצורה מקיפה. אתם מוזמנים להביא את תכנית הלימודים \"בשביל האנרגיה\" לתלמידיכם, על מנת שיוכלו לחקור בעצמם את סוגי תחנות הכוח בטכנולוגיות השונות ולקבל החלטה מושכלת!"
    }
};

let currentSection = 1;

function createCircleOptions(options) {
    return options.map(option => `
        <div class="circle-option" onclick="navigateTo(${option.goto})">
            <img src="${option.icon}" alt="${option.text}">
            <span>${option.text}</span>
        </div>
    `).join('');
}

function createButtons(options) {
    return options.map(option => `
        <button class="button" onclick="navigateTo(${option.goto})">${option.text}</button>
    `).join('');
}

function navigateTo(sectionId) {
    currentSection = sectionId;
    renderSection();
}

function renderSection() {
    const section = questionnaireData[currentSection];
    let content = `<h2>${section.title}</h2>`;
    
    if (currentSection === 1 || currentSection === 8) {
        content += `<div class="circle-container">${createCircleOptions(section.options)}</div>`;
    } else if (currentSection === 15) {
        content += `<p>${section.text}</p>`;
    } else {
        content += createButtons(section.options);
    }
    
    document.getElementById('questionnaire-container').innerHTML = content;
}

// Initialize the questionnaire
renderSection();

