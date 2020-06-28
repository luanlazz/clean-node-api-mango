export interface Encrypter {
  encrypt (valuer: string): Promise<string>
}
