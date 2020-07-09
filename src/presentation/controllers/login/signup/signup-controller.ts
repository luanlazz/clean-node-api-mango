import { HttpRequest, HttpResponse, Controller, AddAccount, Authentication } from './signup-protocols-controller'
import { badRequest, serverError, ok, forbidden } from '../../../helpers/http/http-helper'
import { Validation } from '../../../protocols/validation'
import { EmailInUseError } from '../../../errors'

export class SignUpController implements Controller {
  constructor (
    private readonly addAccount: AddAccount,
    private readonly validation: Validation,
    private readonly authentication: Authentication
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body)
      if (error) {
        return badRequest(error)
      }

      console.log('error', error)

      const { name, email, password } = httpRequest.body

      const account = await this.addAccount.add({
        name,
        email,
        password
      })
      if (!account) {
        return forbidden(new EmailInUseError())
      }

      console.log('account', account)

      const accessToken = await this.authentication.auth({
        email,
        password
      })

      console.log('accessToken', accessToken)

      return ok({ accessToken })
    } catch (error) {
      return serverError(error)
    }
  }
}
