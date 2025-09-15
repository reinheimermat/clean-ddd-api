import { UniqueEntityId } from './unique-entity-id'

export class Entity<T> {
  private _id: UniqueEntityId
  protected readonly props: T

  get id() {
    return this._id
  }

  constructor(props: T, id?: string) {
    this._id = new UniqueEntityId(id)
    this.props = props
  }
}
