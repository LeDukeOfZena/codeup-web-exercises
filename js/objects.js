(function() {
    "use strict";
console.log("OBJECTS EXERCISE YO");
    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    const person = {
        firstName: "Spencer",
        lastName: "Pogue",
    };
    console.log(person.firstName);
    console.log(person.lastName);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    // const ca = {};
    // car.make = "Toyota";
    // car.model = "Camry";

// create a honk method on the car object
    person.sayHello = function () {
        console.log(`Hello from ${person.firstName} ${person.lastName}`);
    };

// honk the horn
    person.sayHello();


    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    const shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    shoppers.forEach(function(shopper) {
        let name = shopper.name;
        let amount = shopper.amount;
        let discount = 0;
        let amountAfterDiscount = amount;

        if (amount > 200) {
            discount = amount * 0.12;
            amountAfterDiscount = amount - discount;
        }

        console.log(name + " bought $" + amount.toFixed(2) + ", received a $" + discount.toFixed(2) + " discount, and needs to pay $" + amountAfterDiscount.toFixed(2));
    });


    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
//      */
const books = [];

const book1 = {
    title: "The Loneliest Lion",
    author: {
        aFirstName: "Frank",
        aLastName: "Poop",
    }
}

const book2 = {
    title: "Who Ate My Mangoes?",
    author: {
        aFirstName: "Gillian",
        aLastName: "Gillianson",
    }
}

const book3 = {
    title: "It Takes Eight-Thousand to Tango",
    author: {
        aFirstName: "Mosby",
        aLastName: "Whosaidat",
    }
}

const book4 = {
    title: "The Optometrist's Ugly Little Adventure",
    author: {
        aFirstName: "Snazzy",
        aLastName: "Fartz",
    }
}

const book5 = {
    title: "The Bible 2",
    author: {
        aFirstName: "Jesus",
        aLastName: "Christ",
    }
}

books.push(book1,book2,book3,book4,book5);

console.log(books);
console.log(book1.author.aFirstName);
console.log(book2.title);



    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    books.forEach(function(book, index) {
        let authorFullName = book.author.aFirstName + " " + book.author.aLastName;

        console.log("Book # " + (index + 1));
        console.log("Title: " + book.title);
        console.log("Author: " + authorFullName);
        console.log("---");
    });

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
// Function to create a book object
    function createBook(title, authorFirstName, authorLastName) {
        return {
            title: title,
            author: {
                firstName: authorFirstName,
                lastName: authorLastName
            }
        };
    }

// Function to display book information
    function showBookInfo(book, index) {
        var authorFullName = book.author.firstName + " " + book.author.lastName;

        console.log("Book # " + (index + 1));
        console.log("Title: " + book.title);
        console.log("Author: " + authorFullName);
        console.log("---");
    }

// Create an array of books using the createBook function
    var Cbooks = [
        createBook("The Salmon of Doubt", "Douglas", "Adams"),
        createBook("Walkaway", "Cory", "Doctorow"),
        createBook("A Brief History of Time", "Stephen", "Hawking"),
        // Add more books using the createBook function
    ];

// Loop through the books array and use showBookInfo function
    Cbooks.forEach(function(Cbook, index) {
        showBookInfo(Cbook, index);
    });


})();

