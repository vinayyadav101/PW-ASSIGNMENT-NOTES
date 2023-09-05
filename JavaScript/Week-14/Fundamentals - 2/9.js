function uniqueCharactersCheck(inputString) {
    const charSet = new Set();

    for (const char of inputString) {
        if (charSet.has(char)) {
            console.log("The input string contains duplicates.");
            return false;
        }
        charSet.add(char);
    }
    console.log("The input string contains only unique characters.");
    return true;
}

uniqueCharactersCheck("mithun")
// OUTPUT: The input string contains unique characters.

uniqueCharactersCheck("anurag")
// OUTPUT: The input string contains duplicates.