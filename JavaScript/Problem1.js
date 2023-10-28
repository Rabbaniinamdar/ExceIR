console.log("Num1 is greater")
function whileLoop() {
    let num = 1;
    while (num <= 5) {
        console.log("While loop iteration " + num)
        num++;
    }
}
function forLoop() {
    for (let i = 1; i <= 5; i++) {
        console.log("for loop iteration " + i)
    }
}

function doWhileLoop() {
    let num = 1;
    do {
        console.log("Do-While loop iteration " + num)
        num++;
    } while (num <= 5);
}
console.log("Its Mondey")