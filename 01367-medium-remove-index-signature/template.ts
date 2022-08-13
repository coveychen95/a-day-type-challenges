type RemoveIndexSignature<T> = any 

// type NeverIndex<P> = string extends P
//   ? never 
//   : number extends P
//     ? never
//     : symbol extends P
//       ? never
//       : P
// type NeverIndex2<P> = P extends string | number | symbol ? never : P
// type RemoveIndexSignature<T> = {
//   [P in keyof T as NeverIndex<P>]: T[P]
// }
// type keys1<T> = {
//   [P in keyof T]: NeverIndex<P>
// }

// type keys2<T> = {
//   [P in keyof T]: NeverIndex2<P>
// }

// type keys1res = keys1<{name: 'str'}> // { name: "name" }
// type keys2res = keys2<{name: 'str'}> // { name: never }

// type str = string extends 'P' ? true : false // false