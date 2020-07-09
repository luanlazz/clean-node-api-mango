import { HttpRequest, Validation } from './add-survey-protocols-controller'
import { AddSurveyController } from './add-survey-controller'

const makeFakeRequest = (): HttpRequest => ({
  body: {
    question: 'any_question',
    answers: [{
      image: 'any_image',
      annswer: 'any_answer'
    }]
  }
})

describe('AddSurvey Controller', () => {
  test('Should vall Validation with correct values', async () => {
    class ValidationStub implements Validation {
      validate (input: any): Error {
        return null
      }
    }
    const validationStub = new ValidationStub()
    const validateSpy = jest.spyOn(validationStub, 'validate')
    const sut = new AddSurveyController(validationStub)
    await sut.handle(makeFakeRequest())
    expect(validateSpy).toHaveBeenCalledWith(makeFakeRequest().body)
  })
})
