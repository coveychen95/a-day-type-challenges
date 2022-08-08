type StringToUnion<T extends string> = any


type StringToArray<S extends string> = S extends `${infer F}${infer R}`
  ? [F, ...StringToArray<R>]
  : never

type test1 = StringToArray<'1234'>