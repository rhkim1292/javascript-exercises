const findTheOldest = function(people) {
    return people.reduce((lastPerson, nextPerson) => {
        let lastPersonAge;
        let nextPersonAge;

        if ("yearOfDeath" in lastPerson) {
            lastPersonAge = lastPerson.yearOfDeath - lastPerson.yearOfBirth;
        } else {
            lastPersonAge = new Date().getFullYear() - lastPerson.yearOfBirth;
        }

        if ("yearOfDeath" in nextPerson) {
            nextPersonAge = nextPerson.yearOfDeath - nextPerson.yearOfBirth;
        } else {
            nextPersonAge = new Date().getFullYear() - nextPerson.yearOfBirth;
        }

        return lastPersonAge > nextPersonAge ? lastPerson : nextPerson;
    }, {})
};

// Do not edit below this line
module.exports = findTheOldest;
