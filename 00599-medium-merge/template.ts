
// ERR!!!
// type Merge<F extends Object, S extends Object> = {
//   [K in Exclude<keyof F, keyof S>]: F[K]
// } & {
//   [P in keyof S]: S[P]
// }

type Merge<F extends Object, S extends Object> = {
  [K in keyof F | keyof S]: K extends keyof S 
    ? S[K]
    : K extends keyof F
      ? F[K]
      : never
}