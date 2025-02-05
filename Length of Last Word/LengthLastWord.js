// Given a string s consisting of words and spaces, return the length of the last word in the string.
// A word is a maximal 
// substring
//  consisting of non-space characters only.


var lengthOfLastWord = function(s) {
   
    let end = s.length -1;
    
    while(end >= 0 && s[end] === ' '){
        end--;
    }

    let start = end;
    while(start >= 0 && s[start] !== ' '){
        start--;
    }

    return end - start ;

};

console.log(lengthOfLastWord("Hello World"))