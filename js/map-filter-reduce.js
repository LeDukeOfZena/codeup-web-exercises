
const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// 2: Create an array of user objects with at least 3 languages, using .filter
const userThreeLanguages = users.filter(user => user.languages.length >= 3);
console.log(userThreeLanguages);
// const usersWithThreeLanguages = users.filter(user => user.languages.length >= 3);
const

// 3: Create an array of user email addresses, using .map
// const userEmail = users.map(user => user.email);
// console.log(userEmail);
// const userEmails = users.map(user => user.email);
const userEmails = users.map((user) => {
    return user.email;
})

// 4: Calculate the total years of experience and the average

// const totalYearsOfExperience = users.reduce((total, user) => total + user.yearsOfExperience, 0);
// const averageYearsOfExperience = totalYearsOfExperience / users.length;
const totalYears = users.reduce((accumulator, user) => {
    return accumulator + user.yearsOfExperience
}, 0)

// 5: Find the longest email
// const longestEmail = users.reduce((longest, user) => (user.email.length > longest.length) ? user.email : longest, '');


// 6: Get a single string with the list of user names
// const userListString = users.reduce((listString, user, index, array) => {
//     listString += user.name;
//     if (index < array.length - 1) {
//         listString += ', ';
//     }
//     return listString;
// }, 'Your instructors are: ');

// Bonus: Get the unique list of languages
const uniqueLanguages = users.reduce((languages, user) => {
    user.languages.forEach(language => {
        if (!languages.includes(language)) {
            languages.push(language);
        }
    });
    return languages;
}, []);

// Log the results
// console.log('Users with at least 3 languages:', usersWithThreeLanguages);
// console.log('User email addresses:', userEmails);
// console.log('Total years of experience:', totalYearsOfExperience);
// console.log('Average years of experience:', averageYearsOfExperience);
// console.log('Longest email:', longestEmail);
// console.log(userListString);
// console.log('Unique languages:', uniqueLanguages);