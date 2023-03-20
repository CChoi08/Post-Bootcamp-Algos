/*
    Leet Code #125

    Determine if given string is a palindrome
    (Identify efficient solutions)

    Edge Cases:
        1. Special Characters (remove them)
        2. Treat upper and lower case letters the same
*/

// implicit O(n)
var isPalindrome1 = function(x) {
    // sanitize our imputs
    const san = x.replace(/[^\w]/gi,'').toLowerCase();
    // "A man." -> "Aman" -> "aman"

    if (san.split('').reverse().join('') === san) {
        // 'aba' -> ['a','b','a'] -> 'aba'
        console.log(true);
        return true;
    };
    console.log(false);
    return false;
};

// O(1) constant space
// POINTER METHOD:
var isPalindrome2 = function(x) {
    // sanitize our imputs
    x = x.replace(/[^\w]/gi,'').toLowerCase();
    // "A man." -> "Aman" -> "aman"

    let left = 0;
    let right = x.length-1;

    while(left < right) {
        if (x[left] !== x[right]) {
            console.log(false);
            return false;
        }
        left ++;
        right --;
    }
    console.log(true);
    return true;
}

// Test:
let x1 = 'Racecar';
let x2 = 'chris'; 

isPalindrome1(x1); 
isPalindrome1(x2);

isPalindrome2(x1);
isPalindrome2(x2);