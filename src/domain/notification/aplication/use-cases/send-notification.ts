import { type Either, right } from '@/core/either'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import type { NotificationsRepository } from '@/domain/notification/aplication/repositories/notifications-repository'
import { Notification } from '@/domain/notification/enterprise/entities/notification'

interface SendNotificationServiceRequest {
  recipientId: string
  title: string
  content: string
}

type SendNotificationServiceResponse = Either<
  null,
  {
    notification: Notification
  }
>

export class SendNotificationService {
  constructor(private notificationRepository: NotificationsRepository) {}

  async execute({
    recipientId,
    title,
    content,
  }: SendNotificationServiceRequest): Promise<SendNotificationServiceResponse> {
    const notification = Notification.create({
      recipientId: new UniqueEntityId(recipientId),
      title,
      content,
    })

    await this.notificationRepository.create(notification)

    return right({
      notification,
    })
  }
}
