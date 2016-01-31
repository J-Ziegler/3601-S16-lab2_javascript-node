// Javascript for the SERVER side.

exports.stringLength = function(str){
    return str.length;
};

exports.countVowels = function(s){
    var count = 0;
    var str = s.toLowerCase();
    for (var i = 0; i < str.length; i++) {
        count += (str[i]== 'a' || str[i]== 'e' || str[i]== 'i' || str[i]== 'o' || str[i]== 'u' || str[i]== 'y');
    }

    return count;
};


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

exports.calculateGPA = function(gradeOne, firstCredits, gradeTwo, secondCredits, gradeThree, thirdCredits){
    var firstGrade = letToNum(gradeOne);
    var secondGrade = letToNum(gradeTwo);
    var thirdGrade = letToNum(gradeThree);


    if (firstGrade === -1 || secondGrade === -1 || thirdGrade === -1) {
        return "Error, you gave us an invalid grade!";
    }

    return (((firstGrade * firstCredits) +
        (secondGrade * secondCredits) +
        (thirdGrade * thirdCredits)) / (parseInt(firstCredits) + parseInt(secondCredits) + parseInt(thirdCredits))).toFixed(2);
};
