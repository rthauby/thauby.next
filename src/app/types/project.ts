import { StaticImageData } from "next/image";

interface Task {
  title: string;
  icon: React.ReactNode;
}

export interface Project {
  title: string;
  images?: StaticImageData[];
  description?: string;
  tasks?: Task[];
}
