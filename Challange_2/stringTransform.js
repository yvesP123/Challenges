// Function to transform the input string based on the given rules
function transformString(input) {
    const length = input.length;

    // If the length of the string is divisible by 15, perform both operations in order
    if (length % 15 === 0) {
        return reverseString(asciiEncode(input)); // Reverse the string and then encode characters to ASCII
    } 
    // If the length of the string is divisible by 3, reverse the string
    else if (length % 3 === 0) {
        return reverseString(input); // Reverse the string
    } 
    // If the length of the string is divisible by 5, encode characters to ASCII
    else if (length % 5 === 0) {
        return asciiEncode(input); // Encode characters to ASCII
    } 
    // If none of the above conditions match, return the original string
    else {
        return input; // Return the original string
    }
}

// Function to reverse a given string
function reverseString(str) {
    return str.split('').reverse().join(''); // Split the string into an array, reverse it, and join it back into a string
}

// Function to encode characters of a string to ASCII
function asciiEncode(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        result += str.charCodeAt(i) + ' '; // Append ASCII code of each character to the result string
    }
    return result.trim(); // Remove trailing space and return the result
}

// Examples
console.log(transformString("Hamburger")); // Output: "regrubmaH"
console.log(transformString("Pizza")); // Output: "80 105 122 122 97"
console.log(transformString("Chocolate Chip Cookie")); // Output: "eikooCpihCetalocohC"
