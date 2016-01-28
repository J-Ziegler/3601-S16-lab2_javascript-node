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
var leetify = function(s){
    var str = s.split('');
    for (var i = 0; i < str.length; i++){
        if(str[i] == 'a' || str[i] == 'A'){
            str[i] = '@';
        } else if (str[i] == 'c' || str[i] == 'C'){
            str[i] = '(';
        } else if (str[i] == 't' || str[i] == 'T'){
            str[i] = '7';
        }
    }

    return str.join('');
};
