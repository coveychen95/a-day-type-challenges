type UpperLetter = 'A' | 'B' | 'C' | 'F'

type KebabCase<S extends string, Flag extends boolean = false> = S extends `${infer F}${infer Rest}`
  ? Flag extends true
    ? F extends UpperLetter ? `-${Lowercase<F>}${KebabCase<Rest, true>}` : `${Lowercase<F>}${KebabCase<Rest, true>}`
    : `${Lowercase<F>}${KebabCase<Rest, true>}`
  : S


type t = KebabCase<'FooBarBaz'>

type t2 = KebabCase<'foo-bar'>
