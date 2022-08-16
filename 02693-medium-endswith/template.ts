
type EndsWith<T extends string, U extends string> = T extends `${infer S}${U}` ? true : false