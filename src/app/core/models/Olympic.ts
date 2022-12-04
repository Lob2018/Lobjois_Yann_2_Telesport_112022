// TODO: create here a typescript interface for an olympic country
import { Participation } from './Participation';

export class Olympic {
  id!: number;
  country!: string;
  participations!: Participation[];
}