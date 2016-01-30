
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
        var calculateGPA = function(gradeOne, creditsOne, gradeTwo, creditsTwo, gradeThree, creditsThree){

        };


    });

    it('Testing letter to number conversions', function(){
        var letToNum = function(letGrade){

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
        expect(letToNum("sdf")).toThrowError(InvalidParamsError)
    });
});
