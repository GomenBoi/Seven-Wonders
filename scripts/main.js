const monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const specialMonthArray = ["September", "April", "June", "November"]

function outputMessage() {
    let object = document.getElementById("inputMessage");
    let value = object.value;

    setTimeout(() => {
        object.value = null;
    }, 1000);

    if (value) {
        alert(value);
    }
    
}

function multiplyFunction() {
    let value = prompt("Enter a value: ")

    if (!isNaN(value)) {
        alert(`The number ${value} multiplied by 10 is ${value * 10}`);
    }

}

function calculateDays() {

    do {
        var promptVal = prompt("Enter a month");
    } while (!monthArray.includes(promptVal));

    if (specialMonthArray.includes(promptVal)) {
        alert(`${promptVal} has 30 days.`);
    }
    
    switch (promptVal) {
        case "February" :
            alert("Februrary has 28 days but 29 in a leap year.");
            break;
        default:
            alert(`${promptVal} has 31 days.`);
            break;
    }

}

function displayName10Times() {
    let name = prompt("Enter your name: ");

    for (let i = 0; i < 10; i++) {
        document.write(name);
        document.write("<br>")
    }
}

function display10Table() {
    for (let i = 1; i < 10; i++) {
        document.write(`${i * 10}`);
        document.write("<br>");
    }
}
