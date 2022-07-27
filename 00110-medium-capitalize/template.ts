// think 
// 1. split string as array
// think is wrong! not all word but the first string
type MyCapitalize<S extends string> = S extends `${infer FirstStr}${infer Rest}` 
  ? `${Uppercase<FirstStr>}${Rest}`
  : S

