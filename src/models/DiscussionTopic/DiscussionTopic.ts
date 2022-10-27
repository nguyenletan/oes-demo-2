export interface IDiscussionTopic {
  id: string
  title: string
  numberOfNewMessages: number
  numberOfMessages: number
  courseId: string
  unitCode: string
  color: string | null
}

export class DiscussionTopic implements IDiscussionTopic {
  id: string = ''
  title: string = ''
  numberOfNewMessages: number = 0
  numberOfMessages: number = 0
  courseId: string = ''
  unitCode: string = ''
  color: string | null = null

  constructor(jsonData?: any) {
    if (jsonData) {
      this.mapped(jsonData)
    }
  }

  mapped(jsonData: any) {
    this.id = jsonData.topic_id
    this.title = jsonData.title
    this.numberOfMessages = jsonData.replies
  }
}
