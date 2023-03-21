/*
    Leet Code #48
    Rotate Image (Matrix)

    Given a n x n 2D matrix representing an image
    Rotate the image by 90 degrees (clockwise)
    You have to rotate the image IN PLACE, no second matrix

    EXAMPLE:
        INPUT:
            1 2 3
            4 5 6
            7 8 9
        EXPECTED:
            7 4 1
            8 5 2
            9 6 3

    Pseudo:
        Reverse outer arrays
        for each row
        >for each column
            >flip coordinates
*/


var rotate = function(matrix) {
    matrix.reverse(); //mutates the matrix in place
    for (let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < i; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
    console.log(matrix);
};

// Test:
let matrix1 = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

rotate(matrix1);