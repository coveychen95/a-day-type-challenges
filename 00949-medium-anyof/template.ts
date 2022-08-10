

type AnyOf<T extends readonly any[]> = T extends [infer F, ...infer R]
  ? F extends '' | 0 | false | {[key: string]: never} | []
    ? AnyOf<R>
    : true
  : false
