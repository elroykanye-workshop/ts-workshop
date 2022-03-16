/*
Activity 1.01: Creating a Library for Working with Strings

Your task is to create a series of simple functions that will help you do some
common operations on strings. Some of the operations are already supported in the
standard JavaScript library, but you will use them as a convenient learning exercise,
both of JavaScript internals and TypeScript as a language.
*/
function toTitleCase(str) {
    var words = str.split(/\s{1,}/)
        .map(function (word) {
        var refWord = word[0].toUpperCase();
        for (var i = 1; i < word.length; i++) {
            refWord += word[i].toLowerCase();
        }
        return refWord;
    });
    console.log(words);
    return words.join(" ");
}
function countWords(str) {
    return toWords(str).length;
}
function toWords(str) {
    return str.split(/\s{1,}|-|_/);
}
function repeat(str, count) {
    var rep = "";
    for (var i = 1; i <= count; i++) {
        rep += str;
    }
    ;
    return rep;
}
function isAlpha(str) {
    if (str.length < 1)
        return false;
    var matches = str.match(/[A-Za-z\s{0,}]/g);
    if (!matches)
        return false;
    return matches.length == str.length;
}
function isBlank(str) {
    if (str.length < 1)
        return true;
    return /^\s+$/.test(str);
}
var sampleStr = "Elroy Kanye 21 Old Boy";
console.log(isAlpha("Elroy Kanye"));
