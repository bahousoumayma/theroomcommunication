import { Social } from './social';

export interface Member {
  name: string;
  role: string;
  image: string;
  socials: Social[];
}
