/* General Styles */
body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

#questionnaire {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    max-width: 800px;
    width: 100%;
    text-align: center;
}

/* Typography */
h1, h2, h3 {
    color: #333;
    line-height: 1.2;
}

h1 {
    font-size: 24px;
    margin-bottom: 20px;
}

h2 {
    font-size: 20px;
    margin-bottom: 15px;
}

h3 {
    font-size: 18px;
    margin-bottom: 10px;
}

p {
    line-height: 1.6;
    margin-bottom: 15px;
}

/* Circular Layout */
.circle-container {
    position: relative;
    width: 300px;
    height: 300px;
    margin: 50px auto;
}

.circle-option {
    position: absolute;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #eef4f9;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

.circle-option:hover {
    transform: scale(1.1);
}

.circle-option img {
    width: 40px;
    height: 40px;
    margin-bottom: 5px;
}

.circle-option span {
    font-size: 12px;
    text-align: center;
}

/* Inner Sections */
.question-header {
    background-color: #d0f0c0;
    padding: 10px;
    margin: -20px -20px 20px -20px;
    border-radius: 10px 10px 0 0;
}

.energy-type-title {
    background-color: #d0f0c0;
    color: #333;
    padding: 10px;
    margin-bottom: 15px;
    border-radius: 5px;
    font-weight: bold;
}

.description-section {
    background-color: #f9f9f9;
    padding: 15px;
    margin-bottom: 20px;
    border-radius: 5px;
}

/* Buttons */
button {
    background-color: #007BFF;
    color: white;
    border: none;
    padding: 10px 20px;
    margin: 10px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
}

button:hover {
    background-color: #0056b3;
}

button img {
    width: 24px;
    height: 24px;
    margin-right: 10px;
}

/* Responsive Design */
@media (max-width: 600px) {
    .circle-container {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .circle-option {
        position: static;
        margin-bottom: 20px;
        transform: none !important;
    }

    button {
        width: 100%;
    }
}

/* Accessibility */
.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
}
