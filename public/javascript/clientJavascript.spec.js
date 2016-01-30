
//Just some example testing.
describe('testing basic functions', function(){
    it('should return the correct string length', function(){
        expect(testStringLength("kittens")).toEqual(7);
    });

    it('returnKittens should return kittens', function(){
        expect(returnKittens()).toBe("kittens");
    });

    ////this test originally failed.
    it('this test should fail!', function(){
        expect(returnKittens()).not.toBe("Not Kittens!");
    });



    // Our tests for our custom function.
    it('Converts a string to 1337 $p3@k', function(){
        expect(leetify("cat")).toBe("(@7");
        expect(leetify("CAT")).toBe("(@7");
        expect(leetify("leet")).toBe("1337");
        expect(leetify("JoeThe")).toBe("J037#3");
        expect(leetify("abcdefghijklmnopqrstuvwxyz")).toBe("@8(d3f6#!jk1mn0pqr$7uvwxy2");
        expect(leetify("ABCDEFGHIJKLMNOPQRSTUVWXYZ")).toBe("@8(D3F6#!JK1MN0PQR$7UVWXY2");
    });


    // Testing for the GPA Calculator.
    it('Calculate the GPA', function(){
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
                    (thirdGrade * thirdCredits)) / (firstCredits + secondCredits + thirdCredits);
        };

        expect(calculateGPA("A", 1, "F", 0, "F", 0)).toBe(4.00);
        expect(calculateGPA("A", 1, "A", 1, "A", 1)).toBe(4.00);
        expect(calculateGPA("B", 4, "C", 3, "D", 2)).toBe(20.0/9);
        expect(calculateGPA("S", 1, "A", 1, "A", 1)).toBe("Error, you gave us an invalid grade!");

    });

    it('Testing letter to number conversions', function(){ // I'm ignoring the nesting potential of nested because reasons.
        var letToNum = function(letGrade){
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

        expect(letToNum("A")).toBe(4.00);
        expect(letToNum("A-")).toBe(3.66);
        expect(letToNum("B+")).toBe(3.33);
        expect(letToNum("B")).toBe(3.00);
        expect(letToNum("B-")).toBe(2.66);
        expect(letToNum("C+")).toBe(2.33);
        expect(letToNum("C")).toBe(2.00);
        expect(letToNum("C-")).toBe(1.66);
        expect(letToNum("D+")).toBe(1.33);
        expect(letToNum("D")).toBe(1.00);
        expect(letToNum("D-")).toBe(0.66);
        expect(letToNum("F")).toBe(0);
        expect(letToNum("sdf")).toBe(-1); // Can't be bothered to write a custom error, and this will work fine with the GPA Calculator function anywhow.
    });
});
