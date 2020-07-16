import { loginPath, surveyPath, signUpPath, surveyResultPath } from './paths'
import { badRequest, forbidden, serverError, unauthorized, notFound } from './components'
import { accountSchema, errorSchema, loginParamsSchema, surveyAnswerSchema, surveySchema, surveysSchema, apiKeyAuthSchema, signUpParamsSchema, addSurveyParamsSchema, saveSurveyParamsSchema, surveyResultSchema } from './schemas'

export default {
  openapi: '3.0.0',
  info: {
    title: 'Clean Node API',
    description: 'API of Mango course to make surveys with programmers',
    version: '1.0.0'
  },
  license: {
    name: 'ISC',
    url: 'https://opensource.org/licenses/ISC'
  },
  servers: [{
    url: '/api'
  }],
  tags: [{
    name: 'Login'
  }, {
    name: 'Survey'
  }],
  paths: {
    '/login': loginPath,
    '/signup': signUpPath,
    '/surveys': surveyPath,
    '/surveys/{surveyId}/results': surveyResultPath
  },
  schemas: {
    account: accountSchema,
    addSurveyParams: addSurveyParamsSchema,
    error: errorSchema,
    loginParams: loginParamsSchema,
    signUpParams: signUpParamsSchema,
    saveSurveyParams: saveSurveyParamsSchema,
    surveyResult: surveyResultSchema,
    survey: surveySchema,
    surveys: surveysSchema,
    surveyAnswer: surveyAnswerSchema
  },
  components: {
    securitySchemes: {
      apiKeyAuth: apiKeyAuthSchema
    },
    badRequest,
    forbidden,
    serverError,
    unauthorized,
    notFound
  }
}
