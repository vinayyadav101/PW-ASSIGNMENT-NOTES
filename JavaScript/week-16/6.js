let linkedinProfileURLPattern = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]\/$/

let linkedinProfileURLCheck = (value) => {
    if (value.match(linkedinProfileURLPattern)) {
        console.log(`"${value}" is valid URL.`);
    } else {
        console.log(`"${value}" is not valid URL.`);
    }
}

linkedinProfileURLCheck("https://www.linkedin.com/in/wondwosen-0a0427260/")

// output: "https://www.linkedin.com/in/wondwosen-0a0427260/" is valid URL.
