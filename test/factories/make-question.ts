import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import {
  Question,
  type QuestionProps,
} from '@/domain/forum/enterprise/entities/question'
import { Slug } from '@/domain/forum/enterprise/entities/value-objects/slug'

export function makeQuestion(override: Partial<QuestionProps> = {}) {
  const question = Question.create({
    title: 'This is a question',
    slug: Slug.create('this-is-a-question'),
    content: 'This is the content of the question',
    authorId: new UniqueEntityId('author-1'),
    ...override,
  })

  return question
}
