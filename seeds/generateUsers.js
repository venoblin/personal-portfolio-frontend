const { adjectives, nouns } = require('./userSeeds');

function generateUsers() {
    const randAdj = Math.floor(Math.random() * adjectives.length);
    const randNou = Math.floor(Math.random() * nouns.length);

    const user = `${adjectives[randAdj]}${nouns[randNou]}`

    console.log(user);
}

module.exports = generateUsers;