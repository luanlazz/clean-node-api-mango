export interface Hasher {
  hash (valuer: string): Promise<string>
}
