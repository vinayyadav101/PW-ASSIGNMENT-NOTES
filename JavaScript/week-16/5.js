let UrlValidationPattern = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig;


let urlaValidationCheck = (value) => {
    if (value.match(UrlValidationPattern)) {
        console.log(`"${value}" is valid URL.`);
    } else {
        console.log(`"${value}" is not valid URL.`);
    }
}

urlaValidationCheck("https://google.com")

// output: "https://google.com" is valid URL.

urlaValidationCheck("google")

// output: "google" is not valid URL.