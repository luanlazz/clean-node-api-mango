import { ValidationComposite } from '../../../presentation/helpers/validators/validation-composite'
import { RequireFieldValidation } from '../../../presentation/helpers/validators/require-field-validation'
import { Validation } from '../../../presentation/protocols/validation'
import { EmailValidatorAdapter } from '../../../utils/email-validator-adapter'
import { EmailValidation } from '../../../presentation/helpers/validators/email-validation'

export const makeLoginValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['email', 'password']) {
    validations.push(new RequireFieldValidation(field))
  }
  validations.push(new EmailValidation(new EmailValidatorAdapter(), 'email'))
  return new ValidationComposite(validations)
}
