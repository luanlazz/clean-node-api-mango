import { ValidationComposite, RequireFieldValidation, EmailValidation } from '../../../../validation/validators'
import { makeLoginValidation } from './login-validation-factory'
import { Validation } from '../../../../presentation/protocols/validation'
import { EmailValidator } from '../../../../validation/protocols/email-validator'

jest.mock('../../../../validation/validators/validation-composite.ts')

const makeEmailValidator = (): EmailValidator => {
  class EmailValidatorStub implements EmailValidator {
    isValid (email: string): boolean {
      return true
    }
  }
  return new EmailValidatorStub()
}

describe('LoginValidation Factory', () => {
  test('Should call ValidationComposite with all validations', () => {
    makeLoginValidation()
    const validations: Validation[] = []
    for (const field of ['email', 'password']) {
      validations.push(new RequireFieldValidation(field))
    }
    validations.push(new EmailValidation(makeEmailValidator(), 'email'))
    expect(ValidationComposite).toHaveBeenCalledWith(validations)
  })
})
