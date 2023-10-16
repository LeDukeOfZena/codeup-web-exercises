(() => {
// IIFE
// main method

    //creating a dog object with a function
    //i.e. factory function

    //dogs as an example

    //JS classes

//CLASSES ALWAYS START WITH A CAPITOL LETTER
//DOG BREEDS ARE FUN && cool you know. cactus mango Robert Louis Stephenson

// class Car {
//     constructor(data) {
//         this.id = data.id;
//         this.name = data.name;
//         this.roast = data.roast;
//         this.element = this.render();
//     }
//     render() {
//         let card = document.createElement("div";
//         card.innerHTML = `
//         <div class="coffee-card">`)
//     }
// }

    class Car {
        constructor(brand, model, color, numOfDoors, mangoes) {
            this.brand = brand;
            this.model = model;
            this.color = color;
            this.numOfDoors = numOfDoors;
            this.mangoes = mangoes;
        }

        honk() {
            console.log(`${this.brand} ${this.model} just honked it's horn. How rude!`)
        }

        rev() {
            console.log(`${this.brand} ${this.model} just revved it's suuped-up engine! How exciting`)
        }

    }

    let car1 = new Car("Chevy", "Silverado", "Silver", 4, true);
    car1.honk();
    car1.rev();

    let car2 = new Car("Volkswagen", "Beetle", "Purple", 2, false);
    car2.honk();

    console.log(`the devil is ${car2.mangoes}`);

    


})();


