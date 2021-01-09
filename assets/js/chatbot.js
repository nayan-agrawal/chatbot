/*
CHATBOT DATA
*/
const data = {
    // Level 0
    1: {
        question: "How can I help you?",
        options: {
            a: "Information Technology Services",
            b: "SDS Management Services",
            c: "BPO Services",
            d: "Digital Marketing"
        },
        optionSelected: {
            a: 2,
            b: 3,
            c: 4,
            d: 5,
        }
    },

    // level 1
    2: {
        question: "That's a good decision, Could you please asist me with below options.",
        options: {
            a: "Web Design and Development",
            b: "UI/UX Design"
        },
        optionSelected: {
            a: 6,
            b: 8
        }
    },
    3: {
        question: "That's a good decision, Could you please asist me with below options.",
        options: {
            a: "SDS Sourcing",
            b: "SDS Indexing"
        },
        optionSelected: {
            a: 9,
            b: 11
        }
    },
    4: {
        question: "That's a good decision, Could you please asist me with below options.",
        options: {
            a: "Web Research",
            b: "Data Entry",
            c: "Data Processing",
            d: "Data Analytics Services"
        },
        optionSelected: {
            a: 12,
            b: 13,
            c: 14,
            d: 15,
        }
    },
    5: {
        question: "That's a good decision, Could you please asist me with below options.'",
        options: {
            a: "Social Media Marketing",
            b: "Google Advertisements",
            c: "Search Engine Marketing"
        },
        optionSelected: {
            a: -1,
            b: -1,
            c: -1
        }
    },

    // Level 2 - IT Services
    6: {
        question: "Which type of website would you like to design and develop?",
        options: {
            a: "Website for business",
            b: "e-Commerce Website",
            c: "Landing page, blog or portfolio website",
            d: "CMS Panel",
            e: "Social Media Website"
        },
        optionSelected: {
            a: 7,
            b: 7,
            c: 7,
            d: 7,
            e: 7
        }
    },
    7: {
        question: "In how much time do you need the web application",
        options: {
            a: "less than 1 month",
            b: "1-2 months",
            c: "more than 2 months"
        },
        optionSelected: {
            a: -1,
            b: -1,
            c: -1
        }
    },
    8: {
        question: "What is the device you need the design for?",
        options: {
            a: "Mobile Application",
            b: "Website Design"
        },
        optionSelected: {
            a: -1,
            b: -1
        }
    },

    // Level 2 - SDS management
    9: {
        question: "Which type of SDS Services do you have?",
        options: {
            a: "Update SDS",
            b: "Renewal of SDS",
            c: "Updating library database time to time"
        },
        optionSelected: {
            a: 10,
            b: 10,
            c: 10
        }
    },
    10: {
        question: "What type of SDS do you like to search",
        options: {
            a: "GHS",
            b: "WHMIS",
            c: "OSHA"
        },
        optionSelected: {
            a: -1,
            b: -1,
            c: -1
        }
    },
    11: {
        question: "Please asist with the following options for the requirement of your service",
        options: {
            a: "Product Number",
            b: "Product Use",
            c: "CAS ID",
            d: "Ingredients",
            e: "Physical and chemical properties",
            f: "Transport",
            g: "Handling & Storage",
            h: "First Aid"
        },
        optionSelected: {
            a: -1,
            b: -1,
            c: -1,
            d: -1,
            e: -1,
            f: -1,
            g: -1,
            h: -1
        }
    },

    // Level 2 - BPO Services
    12: {
        question: "Which type of data would you like to search for?",
        options: {
            a: "Online Market Research",
            b: "Business Analytics services",
            c: "Media Research",
            d: "Market Research"
        }, 
        optionSelected: {
            a: -1,
            b: -1,
            c: -1,
            d: -1
        }
    },
    13: {
        question: "What data do you wish to enter?",
        options: {
            a: "Online Data",
            b: "Image data",
            c: "Copy paste"
        },
        optionSelected: {
            a: -1,
            b: -1,
            c: -1
        }
    },
    14: {
        question: "Which type of data or file would you like to process?",
        options: {
            a: "Excel Data processing",
            b: "Word Data Processing",
            c: "Forms Data Processing",
            d: "Image processing"
        },
        optionSelected: {
            a: -1,
            b: -1,
            c: -1,
            d: -1
        }
    },
    15: {
        question: "Which service do you want us to help you out with?",
        options: {
            a: "Data Collection",
            b: "Data Cleaning",
            c: "Data Modeling"
        },
        optionSelected: {
            a: -1,
            b: -1,
            c: -1
        }
    }
}


const talk = (question_id) => {
    // Removing onfocus to prevent function call repeatedly!
    document.querySelector('#text-message').removeAttribute('onfocus');
    start(question_id);
}

const start = (question_id) => {
    if (question_id === -1) {
        messageBot(-1);
    } else {
        messageBot(question_id); 
        for (const opt in data[question_id].options) {
            showAnswer(question_id, data[question_id].options[opt], opt);
        }
    }
}

// Function to compute final score
const score = () => {
    let count = 0;
    for (let i=0; i < Object.keys(answers).length; i++) {
        if (answers[i] == 1) {count += 1;}
    }
    return count;
}

const returnFinalMessage = (score) => {
    let message = "";
    if (score >= 1 && score <= 5) {
        message += "Your relationship has a low risk of becoming abusive. However, risks are still risks that must be prevented and minimized. The following are some articles in the laws and regulations in Indonesia as your guide in preventing these risks: If your partner is forcing and threatening you to do something: Article 335 Paragraph (1) of the Criminal Code. If your partner perform physical and / or psychological abuse against you: Article 352 Paragraph (2) Criminal Code; clause 22 Article 351 of the Criminal Code; Article 1365 of the Civil Code Threatens and / or has spread your personal content(s): Article 369 of the Criminal Code; Article 27 Paragraph (1) Article 45 Paragraph (1) Law Number 16 Year 2016 In addition, violent relationships can increase your risk of experiencing anxiety, depression, and various other psychological disorders. If you find that any of the following has happened to you, don't hesitate to seek help. You can contact the BullyId App team for further psychological counseling and / or legal assistance. ";
        return message;
    } else if (score >= 6 && score <= 10) {
        message += "Your relationship has a moderate risk of becoming abusive which must be prevented and minimized. The following are some articles in the laws and regulations in Indonesia as your guide in preventing these risks: If your partner is forcing and threatening you to do something: Article 335 Paragraph (1) of the Criminal Code. If your partner perform physical and / or psychological abuse against you: Article 352 Paragraph (2) Criminal Code; clause 22 Article 351 of the Criminal Code; Article 1365 of the Civil Code Threatens and / or has spread your personal content(s): Article 369 of the Criminal Code; Article 27 Paragraph (1) Article 45 Paragraph (1) Law Number 16 Year 2016 In addition, violent relationships can increase your risk of experiencing anxiety, depression, and various other psychological disorders. If you find that any of the following has happened to you, don't hesitate to seek help. You can contact the BullyId App team for further psychological counseling and / or legal assistance.";
        return message;
    } else {
        message += "Your relationship has a high risk of becoming abusive which must be prevented and followed up immediately because it has the potential to harm you physically and psychologically. Here are some articles in the laws and regulations in Indonesia as your guide in overcoming these risks: If your partner is forcing and threatening you to do something: Article 335 Paragraph (1) of the Criminal Code. If your partner perform physical and / or psychological abuse against you: Article 352 Paragraph (2) Criminal Code; clause 22 Article 351 of the Criminal Code; Article 1365 of the Civil Code Threatens and / or has spread your personal content(s): Article 369 of the Criminal Code; Article 27 Paragraph (1) Article 45 Paragraph (1) Law Number 16 Year 2016. In addition, violent relationships can increase your risk of experiencing anxiety, depression, and various other psychological disorders. For further action, you can contact the BullyId App team for psychological counseling and / or legal assistance.";
        return message;
    }
}

// Display message of chatbot
const messageBot = (question_id) => {
    // Creating all the elements
    let message_bot_div = document.createElement('div');
    let icon_div = document.createElement('div');
    let icon_img = document.createElement('img');
    
    // Selecting parent element
    let message = document.querySelector('.message');

    message_bot_div.classList.add('message-bot');
    message_bot_div.classList.add('animate__animated');
    message_bot_div.classList.add('animate__fadeInUp');

    message_bot_div.style.display = 'flex';
    icon_div.classList.add('icon');
    icon_img.src = "assets/images/bot.png";
    icon_img.alt = "chatbot-icon";

    // message.appendChild(message_bot_div);
    message_bot_div.appendChild(icon_div);
    icon_div.appendChild(icon_img);

    if (question_id === 1) {
        message_bot_div.appendChild(messageBotElement('Hello!'));
        message_bot_div.appendChild(messageBotElement('I am chatbot, here to help you!'));
        message_bot_div.appendChild(messageBotElement(data[question_id].question));
    } else if (question_id === -1) {
        message_bot_div.appendChild(messageBotElement('Thanks for your answers!'));
        // message_bot_div.appendChild(messageBotElement(returnFinalMessage(score())));
    } else {
        message_bot_div.appendChild(messageBotElement(data[question_id].question));
    }
    
    message.appendChild(message_bot_div);
} 

// Creates the single text message element for chatbot
const messageBotElement = (message) => {
    let message_area = document.createElement('p');
    let message_content = document.createTextNode(message);

    message_area.classList.add('message-area');
    message_area.classList.add('animate__animated');
    message_area.classList.add('animate__fadeInUp');

    message_area.appendChild(message_content);
    return message_area;
}

const showAnswer = (question_id, message, key) => {
    let options = document.querySelector('#options');
    
    let optionArea = document.createElement('span');
    let message_content = document.createTextNode(message);

    optionArea.classList.add('options');
    optionArea.classList.add('col-md-2');
    optionArea.setAttribute('id', key)

    optionArea.appendChild(message_content);
    
    optionArea.addEventListener('click', (e) => {
        userAnswer(e.target.innerText);
        while (options.firstChild) {
            options.removeChild(options.firstChild);
        }
        
        start(returnNextQuestion(question_id, e.target.id));
        // options.style.display = 'none';
    })
    
    options.appendChild(optionArea);
    options.style.display = 'flex'

    

    

    // let answer = document.querySelector('.answer');
    // answer.style.display = 'flex';

    // document.querySelector('.yes').onclick = () => {
    //     answers[question_id] = 1;
    //     userAnswer('Yes!');
    //     document.querySelector('.answer').style.display = 'none';
    //     start(returnNextQuestion_id(question_id, 1)); // return 2 as question id
    // };
}


// Display user answer
const userAnswer = (result) => {
    // Creating all required elements
    let message_user_div = document.createElement('div');
    let user_icon_div = document.createElement('div');
    let icon_img = document.createElement('img');
    let message_area = document.createElement('p');
    let message_content = document.createTextNode(result);
    
    // Selecting the parent element
    let message = document.querySelector('.message');

    message_user_div.classList.add('message-user');
    message_user_div.classList.add('animate__animated');
    message_user_div.classList.add('animate__fadeInUp');

    user_icon_div.classList.add('chatbot-icon');
    user_icon_div.classList.add('animate__animated');
    user_icon_div.classList.add('animate__fadeInUp');

    icon_img.src = "assets/images/user.png";
    icon_img.alt = "user-icon";
    
    message_user_div.appendChild(user_icon_div);
    user_icon_div.appendChild(icon_img);
    message_user_div.style.display = 'flex';
    message_area.classList.add('message-area');
    message_area.classList.add('animate__animated');
    message_area.classList.add('animate__fadeInUp');

    message_area.appendChild(message_content);
    message_user_div.appendChild(message_area);
    message.appendChild(message_user_div);
}

// Function to return question id
const returnNextQuestion = (question__id, optionKey) => {
    console.log(data[question__id].optionSelected[optionKey]);
    return data[question__id].optionSelected[optionKey];
}
