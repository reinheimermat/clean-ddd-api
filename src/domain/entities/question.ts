import { Entity } from '../../core/entities/entity'
import type { UniqueEntityId } from '../../core/entities/unique-entity-id'
import type { Slug } from './value-objects/slug'

interface QuestionProps {
  title: string
  content: string
  authorId: UniqueEntityId
  slug: Slug
}

export class Question extends Entity<QuestionProps> {}
