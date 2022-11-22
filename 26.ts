const removeDuplicates = (nums: number[]) => {
  for (let i = 0; i < nums.length; i++) {
    //Next number is identical to current one
    if (nums[i] == nums[i + 1]) {
      nums.splice(i, 1);
      i--;
    }
  }
};

let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
console.log(removeDuplicates(nums));
