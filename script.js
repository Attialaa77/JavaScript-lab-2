let number = -5; // Change this value to test

if (number > 0) {
    console.log("The number is positive.");
} else if (number < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}


let day = 3; 

switch (day) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid day");
}

console.log("Using for loop:");
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

console.log("Using while loop:");
let j = 1;
while (j <= 5) {
    console.log(j);
    j++;
}

console.log("Using do...while loop:");
let k = 1;
do {
    console.log(k);
    k++;
} while (k <= 5);


console.log("Using for loop with break:");
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        break; 
    }
    console.log(i);
}

console.log("Using for loop with continue:");
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue; 
    }
    console.log(i);
}


let globalVar = "I'm global!";

function scopeExample() {
    let localVar = "I'm local!";
    console.log(globalVar); 
    console.log(localVar);  
}

