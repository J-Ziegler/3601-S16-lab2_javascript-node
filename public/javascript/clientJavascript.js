// Our javascript for the CLIENT side.
// This will run on the browser.

/**
 * Takes no arguments, and creates a javascript alert in the client's browser.
 */
var sendAlert = function(){
    alert("THIS IS AN ALERT!");
};

/**
 * Used for getting the length of a string. For example only, you won't likely need to use something like this...
 * DIFFERENT FROM THE stringLength function in the server side javascript!!!
 *
 * @param str  - the string to have its length returned
 * @returns {*}  - an integer, the length of the string
 */
var testStringLength = function(str){
    return str.length;
};


/**
 * Takes no arguments, returns the string "kittens"
 *
 * @returns {string}  - returns "kittens"
 */
var returnKittens = function(){
    return "kittens";
};


// Lots of cases? Sure. Necessary? No. Worth it? Really also no.
var leetify = function(s){ // s is a String.
    var str = s.split('');

    for (var i = 0; i < str.length; i++){
        if(str[i] == 'a' || str[i] == 'A'){
            str[i] = '@';
        } else if (str[i] == 'b' || str[i] == 'B'){
            str[i] = '8';
        } else if (str[i] == 'c' || str[i] == 'C'){
            str[i] = '(';
        } else if (str[i] == 'e' || str[i] == 'E'){
            str[i] = '3';
        } else if (str[i] == 'g' || str[i] == 'G'){
            str[i] = '6';
        } else if (str[i] == 'h' || str[i] == 'H'){
            str[i] = '#';
        } else if (str[i] == 'i' || str[i] == 'I'){
            str[i] = '!';
        } else if (str[i] == 'l' || str[i] == 'L'){
            str[i] = '1';
        } else if (str[i] == 'o' || str[i] == 'O'){
            str[i] = '0';
        } else if (str[i] == 's' || str[i] == 'S'){
            str[i] = '$';
        } else if (str[i] == 't' || str[i] == 'T'){
            str[i] = '7';
        } else if (str[i] == 'z' || str[i] == 'Z'){
            str[i] = '2';
        }
    }

    return str.join('');
};


// GPA Calculator below this point


var letToNum = function(letGrade){ // Yes,it's redundant. But... Reasons. I'll probably fix it later, add it to the tech debt, whatever.
    //if (!letGrade.isString) {
    //    throw InvalidParamsError();
    //}
    var letterGrade = letGrade.toUpperCase();

    if (letterGrade == "A") {
        return 4.00;
    } else if (letterGrade == "A-"){
        return 3.66;
    } else if (letterGrade == "B+"){
        return 3.33;
    } else if (letterGrade == "B"){
        return 3.00;
    } else if (letterGrade == "B-"){
        return 2.66;
    } else if (letterGrade == "C+"){
        return 2.33;
    } else if (letterGrade == "C"){
        return 2.00;
    } else if (letterGrade == "C-"){
        return 1.66;
    } else if (letterGrade == "D+"){
        return 1.33;
    } else if (letterGrade == "D"){
        return 1.00;
    } else if (letterGrade == "D-"){
        return 0.66;
    } else if (letterGrade == "F") {
        return 0;
    } else {
        return -1;
    }
};

var calculateGPA = function(gradeOne, firstCredits, gradeTwo, secondCredits, gradeThree, thirdCredits){
    var firstGrade = letToNum(gradeOne);
    var secondGrade = letToNum(gradeTwo);
    var thirdGrade = letToNum(gradeThree);


    if (firstGrade === -1 || secondGrade === -1 || thirdGrade === -1) {
        return "Error, you gave us an invalid grade!";
    }

    return ((firstGrade * firstCredits) +
        (secondGrade * secondCredits) +
        (thirdGrade * thirdCredits)) / (parseInt(firstCredits) + parseInt(secondCredits) + parseInt(thirdCredits));
};
