//IIFE
(() => {

    const daysOfTheWeek = ["Monday", "Tuesday", "Wednesday", "Thursday"];

    //most of the methods we've dealt with so far, don't transform the original value
    let myName = "jason"
    let myNameUpper = myName.toUpperCase();
    //console.log(myNameUpper);

    //many array methods do

    /* THE PUSH METHOD add to the end*/
    //console.log(daysOfTheWeek);
    daysOfTheWeek.push("Friday");
    //console.log(daysOfTheWeek);

    /* UNSHIFT METHOD add to beginning*/
    daysOfTheWeek.unshift("Sunday");
    console.log(daysOfTheWeek);

    /* POP METHOD */
    const toDoList = ["Take out the trash", "Clean the car", "Pay the bills"];
    const choreRemoved = toDoList.pop();
    console.log(toDoList);
    console.log(choreRemoved);

    /* the SHIFT METHOD */
    const choreRemove2 = toDoList.shift()
    console.log(toDoList);
    console.log(choreRemove2);

    /* LOCATING ARRAY ELEMENTS */
    const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet", "red"];
    const greenIndex = colors.indexOf("green");
    console.log("Green index => ", greenIndex);

    // if it doesn't find it


    //starting at the beginning
    const redIndex = colors.indexOf("red");
    console.log("Red index => ", redIndex);

    //starting at the end
    const redIndexLast = colors.lastIndexOf("red");
    console.log("Red index => ", redIndexLast);

    //juping a bit ahead, but higher level function to filter arrays
    const allRedValues = colors.filter((color)=>{
        return color === "red"
    })
    console.log(allRedValues);

    /* SLICE METHOD very similar to substring*/
    const lastTwoColors = colors.slice(colors.length - 2);
    console.log(lastTwoColors);

    /* REVERSE */
    console.log(colors);
    colors.reverse();
    console.log(colors);

    /* SORT METHOD */
    console.log(colors);
    colors.sort();
    console.log(colors);
    colors.sort().reverse();

    /*  SPLITTING */
    let nameString = "Joe,Bob,Sally";
    const namesArray = nameString.split(",");
    console.log(namesArray);

    let backToString = namesArray.join("|")
    //comma "," is the default when using .join()
    console.log(backToString);

    //asdf

    let planetsHTML = "<ul><li>Mercury</li>..."



})()