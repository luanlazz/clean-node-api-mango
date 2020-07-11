import { Middleware } from '../../../presentation/protocols'
import { AuthMiddleware } from '../../../presentation/middleware/auth-middleware'
import { makeDbLoadAccountByToken } from '../usecases/account/load-account-by-token/db-load-account-by-token-factory'

export const makeAuthMiddleware = (role?: string): Middleware => {
  return new AuthMiddleware(makeDbLoadAccountByToken(), role)
}
