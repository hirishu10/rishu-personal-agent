export interface TaskItem {
  id?: string;
  title: string;
  description?: string;
  status: 'pending' | 'in_progress' | 'completed';
}
