import { RequireFieldValidation } from './require-field-validation'
import { MissingParamError } from '@/presentation/errors'

const makeSut = (): RequireFieldValidation => {
  return new RequireFieldValidation('field')
}

describe('RequireField Validation', () => {
  test('Should return a MissingParamError if validation fails', () => {
    const sut = makeSut()
    const error = sut.validate({ name: 'any_value' })
    expect(error).toEqual(new MissingParamError('field'))
  })

  test('Should not return if validation success', () => {
    const sut = makeSut()
    const error = sut.validate({ field: 'any_value' })
    expect(error).toBeFalsy()
  })
})
