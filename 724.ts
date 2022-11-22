function pivotIndex(nums: number[]): number {
  for (let i = 0; i < nums.length; i++) {
    let leftSum: number = 0;
    let rightSum: number = 0;
    for (let left = 0; left < i; left++) {
      leftSum += nums[left];
    }
    for (let right = i + 1; right < nums.length; right++) {
      rightSum += nums[right];
    }
    if (leftSum == rightSum) {
      return i;
    }
  }

  return -1;
}

// function main(): void {
//   let result: number = pivotIndex([2, -1, 1]);
//   console.log(result);
// }

// main();
