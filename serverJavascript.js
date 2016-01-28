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


