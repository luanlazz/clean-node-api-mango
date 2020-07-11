export interface AddSurveyModel {
  question: string
  answers: SurveyAnswerModel[]
  date: Date
}

export interface SurveyAnswerModel {
  image?: string
  answer: string
}

export interface AddSurvey {
  add (account: AddSurveyModel): Promise<void>
}
