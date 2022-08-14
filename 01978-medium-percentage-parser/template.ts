type PercentageParser<A extends string> = A extends `${infer L}${infer R}`
  ? L extends '+' | '-'
    ? R extends `${infer N}%` ? [L, N, '%'] : [L, R, '']
    : A extends `${infer N}%` ? ['', N, '%'] : ['', A, '']
  : ['', '', '']
