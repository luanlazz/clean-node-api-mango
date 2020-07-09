import { Validation } from '../../presentation/protocols'
import { MissingParamError } from '../../presentation/errors'

export class RequireFieldValidation implements Validation {
  constructor (private readonly fieldName: string) {}

  validate (input: any): Error {
    if (!input[this.fieldName]) {
      return new MissingParamError(this.fieldName)
    }
  }
}
