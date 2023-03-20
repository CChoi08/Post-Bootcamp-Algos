/*
    Leet Code #20
        # The Stack
        # Last in, First out

    Determine if string is valid: (), [], {}
    True: (), ({[]})
    False: (], ([)]

    Pseudo Code:
    for char in str
        if opening, push into a stack
        if closing, pop & compare
            if test fails, return false
        if all passed, return true
*/


var isValid = function(x) {
    const stack =[];
    const pairs = {
        '(' : ')',
        '[' : ']',
        '{' : '}'
    };

    for (let char of s) {
        if (char in pairs) {
            stack.push(char);
        } else {
            if (stack.length === 0) {
                return false;
            }
            const last = stack.pop();
            if(pairs[last] !== char) {
                return false;
            }
            /*
            if (last === '(' && char !== ')') {
                return false;
            } else if (last === '[' && char !== ']') {
                return false;
            } else if (last === '{' && char !== '}') {
                return false;
            }
            */
        }
    }
    if (stack.length) {
        return false;
    } else {
        return  true;
    }
}

