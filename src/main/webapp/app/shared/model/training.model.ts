export interface ITraining {
  id?: number;
  date?: string;
  typeOfSport?: string;
  trainingDurationHour?: number;
  trainingDurationMin?: number;
  intensity?: string;
  temperature?: number;
  weightBeforeTraining?: string;
  weightAfterTraining?: string;
  fluidDrunkL?: number;
  fluidDrunkMl?: number;
  eatenInTrainingKg?: number;
  eatenInTrainingGr?: number;
  comments?: string;
}

export class Product implements ITraining {
  constructor(
    public id?: number,
    public date?: string,
    public typeOfSport?: string,
    public trainingDurationHour?: number,
    public trainingDurationMin?: number,
    public intensity?: string,
    public temperature?: number,
    public weightBeforeTraining?: string,
    public weightAfterTraining?: string,
    public fluidDrunkL?: number,
    public fluidDrunkMl?: number,
    public eatenInTrainingKg?: number,
    public eatenInTrainingGr?: number,
    public comments?: string
  ) {}
}
