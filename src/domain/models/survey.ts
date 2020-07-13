export type SurveyModel = {
  id: string
  question: string
  answers: SurveyAnswerModel[]
  date: Date
}

export type SurveyAnswerModel = {
  image?: string
  answer: string
}

export type SurveyResultModel = {
  id: string
  accountId: string
  surveyId: string
  answer: string
  date: Date
}
