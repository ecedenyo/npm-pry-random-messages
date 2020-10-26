const messages = [
    "Ginela",
    "Jessica",
    "Marie",
    "Lucía",
    "Carolina",
    "Mercedes",
    "Victoria"
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
}

module.exports = { randomMsg };