// 1. 限制函数结构
// 2. 提取参数
// 3. 添加参数

// 1. 
//    fn extends Function
//    fn extends (...args: any) => any
// 2. 
//    fn extends (...args: infer Args) => any
// 3. 
//    (...arg: [...Args, A]) => any
type AppendArgument<fn extends (...args: any) => any, A> = fn extends (...args: infer Args) => infer R
  ? (...arg: [...Args, A]) => R
  : never
