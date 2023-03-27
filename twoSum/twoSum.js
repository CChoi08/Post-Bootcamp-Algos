/*
    Leet Code #1
    Two Sum

    Given an array of numbers and a target
    Return the indices of the numbers that add
    up to the target

    ex.
        [3,4,8,2]
        nums

        6
        target

        [1,3]
        output
    
    edge case:
        # no nums add up to target
            (assume always exactly 1 solution)
        # numbers can only be used once
*/

let nums1 = [3,4,8,2];
let target1 = 6;

let nums2 = [23,1,18,46,12, 8];
let target2 = 13;

/*
    naive psuedo:
    for every number in nums
        # check every OTHER NUMBER
            if = target, return indeces

    Time: O(n^2)
    Space: O(1)
*/

var twoSum = function(nums,target) {
    for (let i = 0; i< nums.length; i++) {
        const num = nums[i];
        const want = target - num;
        for (j = i+1; j < nums.length; j++) {
            if (nums[j] === want) {
                console.log([i,j]);
                return [i,j];
            }
        }
    }
};

/*
    Hash Table method

    Pseudo:
    for every number in nums
        # calculate "counterpart"
        # in table? return indices

    Time: O(n)
    Space: O(n)
*/

var twoSum2 = function(nums,target) {
    const ht = {};
    for(let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const want = target - num;

        if(want in ht) {
            const leftIndex = ht[want];
            console.log([leftIndex, i]);
            return [leftIndex, i];
        } else {
            ht[num] = i;
        }
    }
};

// TEST:
twoSum(nums1,target1);
twoSum(nums2,target2);

twoSum2(nums1,target1);
twoSum2(nums2,target2);