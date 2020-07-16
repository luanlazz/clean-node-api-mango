
import { badRequest, forbidden, serverError, unauthorized, notFound } from './components/'
import { apiKeyAuthSchema } from './schemas/'

export default {
  securitySchemes: {
    apiKeyAuth: apiKeyAuthSchema
  },
  badRequest,
  forbidden,
  serverError,
  unauthorized,
  notFound
}
