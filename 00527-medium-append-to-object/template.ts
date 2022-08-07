type AppendToObject<T extends Object, U extends string, V> = T & {
  [K in U]: V
}