import { randomUUID } from 'node:crypto'

export class Entity<T> {
  private _id: string
  protected readonly props: T

  get id() {
    return this._id
  }

  set id(id: string) {
    this._id = id
  }

  constructor(props: T, id?: string) {
    this._id = id ?? randomUUID()
    this.props = props
  }
}
