import type { Equal, Expect } from '@type-challenges/utils'

type Foo = {
  a: number
  b: string
}
type Bar = {
  b: number
  c: boolean
}


// // false
// type r = Equal<{
//   a: string
//   b: number
// }, {
//   a: string
// } & {
//   b: number
// } >

type cases = [
  Expect<Equal<Merge<Foo, Bar>, {
    a: number
    b: number
    c: boolean
  }>>,
]