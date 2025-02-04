// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
// You must write an algorithm with O(log n) runtime complexity.


var searchInsert = function(nums, target) {
    
    
    let left = 0, right = nums.length - 1;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if (nums[mid] === target) {
            return mid; // Target found
        } else if (nums[mid] < target) {
            left = mid + 1; // Search in the right half
        } else {
            right = mid - 1; // Search in the left half
        }
    }
    
    return left; // Position where target should be inserted
};

console.log(searchInsert([1,3,5,6],5))