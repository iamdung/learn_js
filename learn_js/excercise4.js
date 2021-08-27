//Given a string s, write a method (function) that will return true if its a valid single integer or floating number or false if its not.
function isDigit(s) {
    return !isNaN(parseFloat(s)) && !isNaN(s - 0)
}

//Given a string, write a function that returns the string with a question mark ("?") appends to the end, unless the original string ends with a question mark, in which case, returns the original string.
function ensureQuestion(s) {
    if (s[s.length - 1] === '?')
        return s;
    return s + "?";
}

//Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
function even_or_odd(number) {
    if (number % 2 == 0)
        return "Even";
    return "Odd";
}