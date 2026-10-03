import { Injectable } from '@nestjs/common';

export interface LearningRecord {
  id: string;
  userId: string;
  title: string;
  content: string;
  topic?: string;
  createdAt: Date;
}

@Injectable()
export class LearningService {
  private notes: LearningRecord[] = [];

  async create(data: {
    userId: string;
    title: string;
    content: string;
    topic?: string;
  }) {
    const newNote: LearningRecord = {
      id: String(this.notes.length + 1),
      userId: data.userId,
      title: data.title,
      content: data.content,
      topic: data.topic,
      createdAt: new Date(),
    };
    this.notes.push(newNote);
    return newNote;
  }

  async search(userId: string, topic?: string) {
    return this.notes.filter((note) => {
      const userMatches = note.userId === userId;
      if (!topic) return userMatches;
      const topicMatches =
        note.topic?.toLowerCase().includes(topic.toLowerCase()) ||
        note.title.toLowerCase().includes(topic.toLowerCase());
      return userMatches && topicMatches;
    });
  }
}
