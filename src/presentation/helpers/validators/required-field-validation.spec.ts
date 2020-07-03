import { RequireFieldValidation } from './require-field-validation'
import { MissingParamError } from '../../errors'

describe('RequireField Validation', () => {
  test('Should return a MissingParamError if validation fails', () => {
    const sut = new RequireFieldValidation('field')
    const error = sut.validate({ name: 'any_value' })
    expect(error).toEqual(new MissingParamError('field'))
  })

  test('Should not return if validation success', () => {
    const sut = new RequireFieldValidation('field')
    const error = sut.validate({ field: 'any_value' })
    expect(error).toBeFalsy()
  })
})
