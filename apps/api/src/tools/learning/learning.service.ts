import { Injectable } from '@nestjs/common';
import { LearningEntry } from './learning.types.js';

@Injectable()
export class LearningService {
  private entries: LearningEntry[] = [];

  async logLearning(entry: Omit<LearningEntry, 'id' | 'createdAt'>): Promise<LearningEntry> {
    const newEntry: LearningEntry = {
      id: String(this.entries.length + 1),
      ...entry,
      createdAt: new Date(),
    };
    this.entries.push(newEntry);
    return newEntry;
  }

  async getLearnings(topic?: string): Promise<LearningEntry[]> {
    if (topic) {
      return this.entries.filter((e) => e.topic.toLowerCase().includes(topic.toLowerCase()));
    }
    return this.entries;
  }
}
