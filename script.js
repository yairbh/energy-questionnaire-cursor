const questionnaire = {
    sections: {
        1: {
            question: "איזה סוג תחנת כוח אתם מציעים לבנות בישראל?",
            options: [
                { text: "גז טבעי", nextSection: 2 },
                { text: "טורבינת רוח", nextSection: 3 },
                { text: "הידרו-אלקטרי", nextSection: 4 },
                { text: "פוטו-וולטי", nextSection: 5 },
                { text: "תרמו-סולארי", nextSection: 6 },
                { text: "גרעיני", nextSection: 7 }
            ],
            type: "circle"
        },
        2: {
            question: "גז טבעי",
            content: "בחירה מצוינת! גז טבעי הוא מקור אנרגיה אמין ונקי יחסית בהשוואה לפחם ונפט. יש לו טביעת אצבע פחמנית נמוכה יותר והוא יכול לספק חשמל באופן רציף.\n\nיחד עם זאת... הוא עדיין פולט גזי חממה ומתבסס על משאבים מוגבלים, מה שיכול לתרום להתחממות הגלובלית ולדלדול המשאבים. בנוסף, תשתית להפקת גז טבעי והפצתו יכולה לגרום להשפעות סביבתיות שליליות משמעותיות.",
            question2: "האם ברצונך לשקול אפשרות אחרת או להמשיך עם גז טבעי?",
            options: [
                { text: "להמשיך עם גז טבעי", nextSection: 9 },
                { text: "לבחור אפשרות אחרת", nextSection: 8 }
            ]
        },
        // ... (include all other sections here)
        15: {
            question: "החלטה סופית",
            content: "תודה על תשובותיכם! כפי שראיתם, לכל סוג של תחנת כוח יש יתרונות וחסרונות משלו. מורכבות זו מדגישה את החשיבות של הבנת תהליכי ייצור האנרגיה בצורה מקיפה.\n\nאתם מוזמנים להביא את תכנית הלימודים \"בשביל האנרגיה\" לתלמידיכם, על מנת שיוכלו לחקור בעצמם את סוגי תחנות הכוח בטכנולוגיות השונות ולקבל החלטה מושכלת!",
            type: "final"
        }
    },
    currentSection: 1
};

function displayQuestion() {
    const section = questionnaire.sections[questionnaire.currentSection];
    const questionContainer = document.getElementById('question-container');
    const optionsContainer = document.getElementById('options-container');

    questionContainer.innerHTML = `<h2>${section.question}</h2>`;
    if (section.content) {
        questionContainer.innerHTML += `<p>${section.content}</p>`;
    }
    if (section.question2) {
        questionContainer.innerHTML += `<h3>${section.question2}</h3>`;
    }
    optionsContainer.innerHTML = '';

    if (section.type === "circle") {
        optionsContainer.className = "circle-container";
        section.options.forEach((option, index) => {
            const button = document.createElement('div');
            button.className = "circle-option";
            button.style.backgroundColor = getColor(index);
            button.innerHTML = option.text;
            button.onclick = () => selectOption(option.nextSection);
            optionsContainer.appendChild(button);
        });
    } else if (section.type === "final") {
        optionsContainer.className = "";
        optionsContainer.innerHTML = `<p>${section.content}</p>`;
    } else {
        optionsContainer.className = "";
        section.options.forEach(option => {
            const button = document.createElement('button');
            button.innerHTML = option.text;
            button.onclick = () => selectOption(option.nextSection);
            optionsContainer.appendChild(button);
        });
    }
}

function selectOption(nextSection) {
    questionnaire.currentSection = nextSection;
    displayQuestion();
}

function getColor(index) {
    const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#F7DC6F'];
    return colors[index % colors.length];
}

window.onload = displayQuestion;
