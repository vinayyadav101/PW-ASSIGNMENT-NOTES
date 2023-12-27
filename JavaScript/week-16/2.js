let randomNumber = () => Math.floor(Math.random() * (10000 - 1000) + 1000)


let remainingTime = (timeDealy) => {
    console.log(`Random number is genrated after ${timeDealy}`);
        let interval = setInterval(
            () => {
                console.log(`Remaining time is ${timeDealy} Seconds.`);
                timeDealy--
                if (timeDealy === 0) {
                    clearInterval(interval)
                    console.log(`Random number is ${randomNumber()}`);
                }
            }
        ,1000)
}
remainingTime(5)

// output: 
// Random number is genrated after 5
// Remaining time is 5 Seconds.
// Remaining time is 4 Seconds.
// Remaining time is 3 Seconds.
// Remaining time is 2 Seconds.
// Remaining time is 1 Seconds.
// Random number is 2053

