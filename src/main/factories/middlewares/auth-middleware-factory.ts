import { makeDbLoadAccountByToken } from '@/main/factories/usecases/account/load-account-by-token/db-load-account-by-token-factory'
import { Middleware } from '@/presentation/protocols'
import { AuthMiddleware } from '@/presentation/middleware/auth-middleware'

export const makeAuthMiddleware = (role?: string): Middleware => {
  return new AuthMiddleware(makeDbLoadAccountByToken(), role)
}
