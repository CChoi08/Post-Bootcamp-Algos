/*
    Leet Code #15
    Three Sum

    Given an array nums of n integers
    are the elements a, b, c in nums such that a + b + c = 0?

    ex.
        [-1, 0, 1, 2, -1, -4]
        nums

        [-1, 0, 1]
        [-1, 2, -1]
        output

    Edge case:
        # none numbers sum to 0, return empty array
    Assumptions:
        # input CAN contain duplicates
        # output triplets MUST be unique
        # triplet order does not matter
*/

/*
    Naive Solution:
    Triple nested for loop

    Pseudo:
        for every number in nums
            # to every SECOND number
                and every THIRD number
                if == 0, save combination
    
    Time : n * n * n
    not optimal
*/

/*
    We can optimize by sorting our given array
    Like palindrom we can use three pointers

    Pseudo:
        for every number in nums
            # while left < right
                too low? move left
                too high? move right
                zero? add to output, move both

    Time: (n^2)
    Space: O(n) or O(1)
*/

var threeSum = function(nums){
    const output = [];
    nums.sort((a,b) => a-b);

    for (let i = 0; nums.length-2; i++) {
        let left = i+1;
        let right = nums.length-1;

        if (i > 0 && nums[i] === nums[i-1]) {
            continue;
        }

        while (left < right) {
            let total = nums[i] + nums[left] + nums[right];

            if (total === 0) {
                output.push([nums[i], nums[left], nums[right]]);
                while (left < right && nums[right - 1] === nums[right]) {
                    right--;
                }
                while (left < right && nums[left + 1] === nums[left]) {
                    left++;
                }
                right--;
                left++;
            } else if (total > 0) {
                right--;
            } else {
                left++;
            }
        }
    }
    console.log(output);
    return output;
};

// TEST:
let nums1 = [-1, 0, 1, 2, -1, -4];

threeSum(nums1);