export interface Project {
  id: string;
  link: string;
  title: string;
  thumbnail: string;
  videoUrl: string;
  projectTitle: string;
  year: string;
  clientName?: string | undefined;
  description?: string;
  additionalInfo?: string;
  technologies: string[];
}
