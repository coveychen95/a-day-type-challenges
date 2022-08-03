
type LengthOfString<S extends string, R extends any[] = []> = S extends ''
  ? R['length']
  : S extends `${infer F}${infer Other}`
    ? LengthOfString<Other, [...R, F]>
    : never