import { expect, it } from 'vitest'
import { AnswerQuestionUseCase } from './answer-question'

it('should be able to create an answer', () => {
  const answerQuestion = new AnswerQuestionUseCase()

  const answer = answerQuestion.execute({
    content: 'This is an answer',
    instructorId: '1',
    questionId: '2',
  })

  expect(answer.content).toBe('This is an answer')
})
