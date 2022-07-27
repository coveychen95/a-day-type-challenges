// think 
// 1. split string as array
// think is wrong! not all word but the first string

// 推断 第一个字符 infer
// 字母大写 Uppercase
type MyCapitalize<S extends string> = S extends `${infer FirstStr}${infer Rest}` 
  ? `${Uppercase<FirstStr>}${Rest}`
  : S

