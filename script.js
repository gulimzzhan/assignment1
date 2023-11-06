const targetDate = new Date('2023-10-30T23:59:59').getTime();

const countdownMessage = "Registration for 2 classes with the price of 1 class! The sale ends in...";


const timer = setInterval(function () {
    const now = new Date().getTime();
    const timeRemaining = targetDate - now;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    const countdownTimer = document.getElementById('countdown-timer');
    countdownTimer.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;


    const countdownMessageElement = document.querySelector('.countdown-message');
    countdownMessageElement.innerHTML = countdownMessage;


    if (timeRemaining <= 0) {
        clearInterval(timer);
        countdownMessageElement.innerHTML = "The sale has ended!";
        countdownTimer.style.display = "none";
    }
}, 1000);

const todoList = document.getElementById('todo-list');
const newTaskInput = document.getElementById('new-task');
const addTaskButton = document.getElementById('add-task');

// Event listener to add a new task
addTaskButton.addEventListener('click', function () {
    const taskText = newTaskInput.value.trim();
    if (taskText !== '') {
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-button';

        listItem.appendChild(deleteButton);
        todoList.appendChild(listItem);

        // Clear the input field
        newTaskInput.value = '';

        // Event listener to delete a task
        deleteButton.addEventListener('click', function () {
            todoList.removeChild(listItem);
        });
    }
});

const validationForm = document.getElementById('validation-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const messageInput = document.getElementById('message');
const categorySelect = document.getElementById('category');
const submitButton = document.getElementById('submit-form');
const errorMessage = document.getElementById('error-message');
const successMessage = document.getElementById('success-message');

validationForm.addEventListener('submit', function (e) {
    e.preventDefault();

    if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || phoneInput.value.trim() === '' || messageInput.value.trim() === '' || categorySelect.value === '') {
        errorMessage.style.display = 'block';
        successMessage.style.display = 'none';


        // Scroll to the error message
        errorMessage.scrollIntoView({
            behavior: 'smooth'
        });

        // Hide the error message after 5 seconds
        setTimeout(() => {
            errorMessage.style.display = 'none';
        }, 5000);
    } else {
        errorMessage.style.display = 'none';
        successMessage.style.display = 'block';

        // Get the submitted data
        const submittedData = {
            name: nameInput.value,
            email: emailInput.value,
            phone: phoneInput.value,
            message: messageInput.value,
            category: categorySelect.value,
        };

        // Clear form fields
        nameInput.value = '';
        emailInput.value = '';
        phoneInput.value = '';
        messageInput.value = '';
        categorySelect.value = '';

        // Display an alert with the submitted data
        alert(`Submitted Data:\nName: ${submittedData.name}\nEmail: ${submittedData.email}\nPhone: ${submittedData.phone}\nMessage: ${submittedData.message}\nCategory: ${submittedData.category}`);
    }
});

const feedbackForm = document.getElementById('feedback-form');
const feedbackInput = document.getElementById('feedback');
const submitFeedbackButton = document.getElementById('submit-feedback');
const feedbackSuccessMessage = document.getElementById('feedback-success');

feedbackForm.addEventListener('submit', function (e) {
    e.preventDefault();

    if (feedbackInput.value.trim() === '') {
        // Display an error message if feedback field is empty
        alert('Please provide feedback before submitting.');
    } else {
        // Hide the error message (if it was shown previously)
        feedbackSuccessMessage.style.display = 'none';

        // Provide feedback messages to the user
        alert('Thank you for your feedback!');

        // Clear the feedback field
        feedbackInput.value = '';

        // Display a success message
        feedbackSuccessMessage.style.display = 'block';
    }
});

const faqAccordion = document.getElementById('faq-accordion');

const faqData = [{
        question: "What classes do you offer?",
        answer: "We offer a variety of fitness classes, including Yoga, HIIT, Spin, Pilates, Bootcamp, Zumba, and more. Check our Classes page for the full list."
    },
    {
        question: "When are the Yoga classes scheduled?",
        answer: "Our Yoga classes are scheduled on Mondays and Wednesdays at 6:00 PM."
    },
    {
        question: "Tell me about the HIIT classes.",
        answer: "HIIT classes are high-intensity interval training sessions designed for a full-body workout. You can join us on Tuesdays and Thursdays at 7:30 AM."
    },
    {
        question: "How often do you have Spin classes?",
        answer: "Our Spin classes are available every Friday at 5:00 PM. Join us for an exciting indoor cycling experience."
    },
    {
        question: "What's special about the Pilates classes?",
        answer: "Our Pilates classes focus on strengthening your core and improving posture. You can participate on Tuesdays and Thursdays at 5:30 PM."
    },
    {
        question: "Tell me more about the Bootcamp classes.",
        answer: "Bootcamp classes offer a challenging full-body workout. You can join us on Mondays and Wednesdays at 7:00 AM."
    },
    {
        question: "When are the Zumba classes?",
        answer: "Join our energetic Zumba classes on Fridays at 6:30 PM and dance your way to fitness."
    }
    // Add more questions and answers as needed
];


faqData.forEach((faq, index) => {
    const faqItem = document.createElement('div');
    faqItem.classList.add('faq-item');

    const question = document.createElement('div');
    question.classList.add('faq-question');
    question.textContent = `${index + 1}. ${faq.question}`;

    const answer = document.createElement('div');
    answer.classList.add('faq-answer');
    answer.textContent = faq.answer;

    faqItem.appendChild(question);
    faqItem.appendChild(answer);
    faqAccordion.appendChild(faqItem);
});


function play_audio() {
    const playSoundBtn = document.getElementById("playSoundBtn");
    const sound = document.getElementById("sound");

    playSoundBtn.addEventListener("click", function () {
        sound.play();
    });
}


const questions = [{
        question: "What is the most important meal of the day?",
        options: ["Breakfast", "Lunch", "Dinner", "Snack"],
        answer: "Breakfast"
    },
    {
        question: "Which sport uses a net and a shuttlecock?",
        options: ["Soccer", "Tennis", "Badminton", "Basketball"],
        answer: "Badminton"
    },
    {
        question: "How many players are there on a standard soccer team?",
        options: ["7", "11", "9", "6"],
        answer: "11"
    },
    {
        question: "Which nutrient is essential for muscle growth?",
        options: ["Carbohydrates", "Protein", "Fiber", "Vitamins"],
        answer: "Protein"
    },
    {
        question: "Which exercise is often called the 'king of exercises'?",
        options: ["Running", "Push-ups", "Yoga", "Squats"],
        answer: "Squats"
    }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options");
const scoreElement = document.getElementById("score");
const restartButton = document.getElementById("restart");

function showQuestion(questionIndex) {
    if (questionIndex < questions.length) {
        const question = questions[questionIndex];
        questionElement.textContent = question.question;
        optionsContainer.innerHTML = '';

        for (let i = 0; i < question.options.length; i++) {
            const optionButton = document.createElement("button");
            optionButton.textContent = question.options[i];
            optionButton.addEventListener("click", () => {
                checkAnswer(question.options[i], question.answer);
            });
            optionsContainer.appendChild(optionButton);
        }
    } else {
        showResult();
    }
}

function checkAnswer(selectedOption, correctAnswer) {
    if (selectedOption === correctAnswer) {
        score++;
    }
    currentQuestion++;
    scoreElement.textContent = "Score: " + score;
    showQuestion(currentQuestion);
}

function showResult() {
    questionElement.textContent = "Quiz completed! Your score is:";
    optionsContainer.innerHTML = '';
    restartButton.style.display = "block";
}

restartButton.addEventListener("click", () => {
    currentQuestion = 0;
    score = 0;
    scoreElement.textContent = "Score: 0";
    restartButton.style.display = "none";
    showQuestion(currentQuestion);
});

showQuestion(currentQuestion);