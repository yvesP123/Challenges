// Function to determine if there exists a contiguous subarray within the array that sums up to the target
function hasSubarrayWithSum(arr, target) {
    let start = 0; // Pointer for the start of the current subarray
    let currentSum = 0; // Variable to store the sum of elements in the current subarray

    // Loop through the array using the end pointer to expand the subarray
    for (let end = 0; end < arr.length; end++) {
        currentSum += arr[end]; // Add the current element to the sum

        // Shrink the subarray if the sum exceeds the target
        while (currentSum > target && start <= end) {
            currentSum -= arr[start]; // Subtract the element at the start pointer from the sum
            start++; // Move the start pointer forward to shrink the subarray
        }

        // If the sum equals the target, return true
        if (currentSum === target) {
            return true;
        }
    }

    // If no subarray with the target sum is found, return false
    return false;
}

// Example usage:
let arr = [4, 2, 7, 1, 9, 5];
let target = 17;
console.log(hasSubarrayWithSum(arr, target)); // Output: true
