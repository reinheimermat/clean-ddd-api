import { makeQuestion } from 'test/factories/make-question'
import { InMemoryQuestionsRepository } from 'test/repositories/in-memory-questions-repository'
import { Slug } from '../../enterprise/entities/value-objects/slug'
import { GetQuestionBySlugUseCase } from './get-question-by-slug'

let inMemoryQuestionsRepository: InMemoryQuestionsRepository
let sut: GetQuestionBySlugUseCase

describe('Get Question By Slug', () => {
  beforeEach(() => {
    inMemoryQuestionsRepository = new InMemoryQuestionsRepository()
    sut = new GetQuestionBySlugUseCase(inMemoryQuestionsRepository)
  })

  it('should be able to get a question by slug', async () => {
    inMemoryQuestionsRepository.create(
      makeQuestion({
        slug: Slug.create('this-is-a-question'),
      }),
    )

    const { question } = await sut.execute({
      slug: 'this-is-a-question',
    })

    expect(question.id).toBeTruthy()
    expect(question.title).toEqual(makeQuestion().title)
  })
})
