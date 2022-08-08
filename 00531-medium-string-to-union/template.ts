
type StringToArray<S extends string, arr extends any[] = []> = S extends ''
? arr
: S extends `${infer F}${infer R}`
  ? [F, ...StringToArray<R>]
  : never

// ERR!!!!
// type StringToUnion<T extends string> = StringToArray<T> extends any[] 
//   ? (StringToArray<T>)['number']
//   : never




type StringToUnion<T extends string> = T extends `${infer F}${infer Rest}`
  ? F | StringToUnion<Rest>
  : never




type test1 = StringToArray<'1234'> // ['1', '2', '3', '4']