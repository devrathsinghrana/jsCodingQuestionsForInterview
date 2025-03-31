/*
CODING QUESTION 

In an array find unique triplets who sum down to 0.
*/

function threeSum(nums) {
  nums.sort((a, b) => a - b); // Step 1: Sort the array
  let result = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue; // Avoid duplicates

    let left = i + 1,
      right = nums.length - 1;
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);

        // Skip duplicates for left and right pointers
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;

        left++;
        right--;
      } else if (sum < 0) {
        left++; // Move left pointer to increase sum
      } else {
        right--; // Move right pointer to decrease sum
      }
    }
  }

  return result;
}

// Example usage:
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
// Output: [[-1, -1, 2], [-1, 0, 1]]
