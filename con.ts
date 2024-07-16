type PrefixedKeys<Prefix extends string, Separator extends string, T> =
  | `${PrettySep<Prefix, Separator>}${StrKeys<T>}`;
