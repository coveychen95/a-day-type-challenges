// 1. 遍历数组

type Flatten<T extends any[]> = T extends [infer K,... infer Rest] 
  ? K extends any[]
    ? [...Flatten<K>, ...Flatten<Rest>]
    : [K, ...Flatten<Rest>]
  : T