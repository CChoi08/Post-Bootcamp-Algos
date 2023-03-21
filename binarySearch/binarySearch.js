/*
    Leet Code #35
    Binary Search
        # Search insert position
        # Given sorted array and a target value,
            return the index if the target is found
        # If not, return the index where it WOULD BE
            if it were inserted in order
    Edge Cases:
        # Empty array
        # May assume not duplicates
    Psuedo:
        init lo & hi pointers
        while lo <= hi
            > calculate mid pointer
            > compare mid value to target
            > if target greater, lo = mid + 1
            > if target less, hi = mid -1
*/

var searchInsert = function(nums, target) {
    let lo = 0;
    let hi = nums.length-1;

    while (lo <= hi) {
        let mid = Math.floor((hi + lo)/2);
        let midVal = nums[mid];
        if (target === midVal) {
            console.log(mid);
            return mid;
        } else if (target > midVal) {
            lo = mid + 1;
        } else {
            hi = mid - 1;
        }
    }
    console.log(lo);
    return lo;
}

// Test:
let nums1 = [1,2,4,5];
let target1 = 3;

let nums2 = [2,5,9,13,22,48]
let target2 = 22;

searchInsert(nums1, target1);
searchInsert(nums2, target2);