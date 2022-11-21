function runningSum(nums: number[]): number[] {
  let res: number[] = new Array(nums.length);
  res[0] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    res[i] = nums[i] + res[i - 1];
  }

  return res;
}

// function main(): void {
//   let result: number[] = runningSum([1, 2, 3, 4]);
//   console.log(result);
// }

// main();
