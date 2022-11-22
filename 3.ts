function lengthOfLongestSubstring(s: string): number {
  let set = new Set(s.split(""));
  return set.size;
}

console.log(lengthOfLongestSubstring("abcabcbb"));
