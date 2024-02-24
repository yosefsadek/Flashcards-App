
// Example usage
// addQuestion("What is Accounting?", 'assets/img/404.png' ,"Accounting, also known as accountancy, is the processing of information about economic entities, such as businesses and corporations.");

console.log(getAllQuestions()); // Output: [{ question: "What is your favorite color?", answer: "Blue" }, { question: "What is the capital of France?", answer: "Paris" }]

console.log(getAllQuestions()); // Output: [{ question: "What is the capital of France?", answer: "Paris" }]

// Add a Question
function addQuestion(question, image, answer) {
    // Retrieve existing questions from localStorage
    let questions = JSON.parse(localStorage.getItem('questions')) || [];

    // Add the new question, image, and answer
    questions.push({ question, image, answer });

    // Save the updated questions to localStorage
    localStorage.setItem('questions', JSON.stringify(questions));
}

// Get Questions
function getAllQuestions() {
    return JSON.parse(localStorage.getItem('questions')) || [];
}

// Display Questions
function displayQuestions(){
    let questionsContainer = document.querySelector('.admin_page .group');
    let questions = getAllQuestions();

    questions.forEach((question, index) => {
        let divItem = document.createElement('div');
        divItem.classList.add('item')

        let viewBtn = document.createElement('button');
        viewBtn.classList.add('fa-solid', 'fa-eye');
        
        // Delete Event
        // Here ...

        let QueSpan = document.createElement('span');
        QueSpan.classList.add('zQuestion');
        QueSpan.textContent = question.question;

        // Appending Children
        divItem.appendChild(viewBtn);
        divItem.appendChild(QueSpan);
        
        questionsContainer.appendChild(divItem);
    })
}

// Get random Question
function getRandom() {
    let questions = JSON.parse(localStorage.getItem('questions')) || [];

    if (questions.length === 0) {
        return null
    }

    // Generate random number
    const randomIndex = Math.floor(Math.random() * questions.length);

    // Get a random question
    let randomQuestion = questions[randomIndex];
    
    if (randomQuestion) {
        console.log(`Random Question:`, randomQuestion.question);
        console.log(`Answer:`, randomQuestion.answer);
    }else{
        console.log(`No questions available.`);
    }
    // Display Question In Random Page
    document.querySelector('.random h2').textContent = randomQuestion.question;
    document.querySelector('.random img').src = randomQuestion.image;

    // Display Question In Question Page
    document.querySelector('.question h2').textContent = randomQuestion.question;
    document.querySelector('.question img').src = randomQuestion.image;

    // Display Answer
    document.querySelector('.answer h2').textContent = randomQuestion.question;
    document.querySelector('.answer img').src = randomQuestion.image;
    document.querySelector('.answer p').textContent = randomQuestion.answer;
}
getRandom()
displayQuestions()


// //////////////

// Declaring Variables

// Pages
let home_page  = document.querySelector('.home');
let add_page   = document.querySelector('.add_page')
let admin_page = document.querySelector('.admin_page')
let random     = document.querySelector('.random');
let question   = document.querySelector('.question');
let answer     = document.querySelector('.answer');
let about      = document.querySelector('.about');

// Btns
let btns = document.querySelectorAll('button');
let destination;


// Getting Clicked Btn
btns.forEach(btn => {
    btn.addEventListener('click', () => {
        destination = btn.id;
        console.log(destination);

        if (destination == 'random') {
            getRandom()
        }

        routing(destination)
    })
})

// Routing Func
function routing(distination) {

    home_page.style.display = 'none';
    add_page.style.display = 'none';
    admin_page.style.display = 'none';
    question.style.display = 'none';
    answer.style.display = 'none';
    random.style.display = 'none';
    about.style.display = 'none';

    let show_me = document.querySelector(`.${destination}`);
    show_me.classList.remove('hidden');
    show_me.style.display = 'block';
}

// function btns_manager(whereAmI) {
//     if (home_page.style !== 'none') {
//         console.log('I see home PAge');
//     }
//     if (question.style.display !== 'none') {
//         console.log('I see question PAge');
//     }
//     if (answer.style.display !== 'none') {
//         console.log('I see answer PAge');
//     }
//     if (add_page.style.display !== 'none') {
//         console.log('I see add PAge');
//     }
//     if (admin_page.style.display != 'none') {
//         console.log('I see admin PAge');
//     }
// }


// btns_manager()