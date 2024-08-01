// Array of motivational phrases
const motivationalPhrases = [
    "Believe in yourself",
    "Stay positive",
    "Keep pushing forward",
    "Embrace the journey",
    "Never give up"
];

// Array of famous quotes
const famousQuotes = [
    "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Do not watch the clock; do what it does. Keep going. - Sam Levenson",
    "The best way to predict the future is to create it. - Peter Drucker",
    "Act as if what you do makes a difference. It does. - William James"
];

// Array of action items
const actionItems = [
    "Take a small step today towards your goal.",
    "Write down three things you are grateful for.",
    "Spend 10 minutes meditating.",
    "Reach out to a friend you haven't spoken to in a while.",
    "Set a new goal for this week."
];

 // Function to generate a random index for an array
function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

// Function to generate a random inspirational message
function generateMessage() {
    const phrase = motivationalPhrases[getRandomIndex(motivationalPhrases)];
    const quote = famousQuotes[getRandomIndex(famousQuotes)];
    const action = actionItems[getRandomIndex(actionItems)];

    return `${phrase}. \n${quote} \n${action}`;
}

// Generate and display the message
console.log(generateMessage());