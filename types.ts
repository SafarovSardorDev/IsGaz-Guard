export interface TeamMember {
  name: string;
  role: string;
  tasks: string;
  skills: string;
  image?: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface RoadmapStep {
  title: string;
  status: 'completed' | 'current' | 'future';
}