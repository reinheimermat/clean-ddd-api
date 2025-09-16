import type { AnswersRepository } from '../repositories/answers-repository'
import { AnswerQuestionUseCase } from './answer-question'

const fakeAnswersRepository: AnswersRepository = {
  create: async () => {
    return
  },
}

it('should be able to create an answer', async () => {
  const answerQuestion = new AnswerQuestionUseCase(fakeAnswersRepository)

  const answer = await answerQuestion.execute({
    content: 'This is an answer',
    instructorId: '1',
    questionId: '2',
  })

  expect(answer.content).toBe('This is an answer')
})
