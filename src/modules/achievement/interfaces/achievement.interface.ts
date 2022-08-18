import { Nullable } from '@Common/types/nullable.type';
import { AchievementProgress } from './achievementProgress.interface';

interface Achievement {
  name: string;
  description: string;
  progress: Nullable<AchievementProgress>;
  isCompleted: boolean;
}

export type { Achievement };
