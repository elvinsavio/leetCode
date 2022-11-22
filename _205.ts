function isIsomorphic(s: string, t: string): boolean {
  if (s.length != t.length) return false;
  let s_temp: Array<string> = [];
  let t_temp: Array<string> = [];

  for (let i = 0; i < s.length; i++) {
    s_temp[i] = t[i];
    t_temp[i] = s[i];
  }

  console.log("s => ", t, s_temp.join(""))
  console.log("t => ", s, t_temp.join(""))

  if (s_temp.join("") == t && t_temp.join("") == s) {
    return true;
  }

  return false;
}

function main(): void {
  let result: boolean = isIsomorphic("foo", "bar");
  console.log(result);
}

main();
