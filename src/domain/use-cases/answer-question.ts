import { Answer } from '../entities/answer'

interface AnswerQuestionUseCaseRequest {
  instructorId: string
  questionId: string
  content: string
}

export class AnswerQuestionUseCase {
  execute({ content }: AnswerQuestionUseCaseRequest) {
    const answer = new Answer(content)

    return answer
  }
}

new AnswerQuestionUseCase().execute({
  instructorId: '1',
  questionId: '2',
  content: 'This is an answer',
})
