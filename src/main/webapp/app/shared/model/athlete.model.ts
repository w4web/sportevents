// import { IRace } from 'app/shared/model/race.model';
import { IFuelSettings } from './fuelsettings.model';

export interface IAthlete {
  id?: string;
  userProvider?: string;
  userName?: string;
  firstName?: string;
  middleName?: string;
  lastName?: string;
  passwordUUId?: string;
  length?: number;
  weight?: number;
  mollieKey?: string;
  paymentStatus?: string;
  paymentDate?: string;
  fuelSettings?: IFuelSettings;
}

export class Athlete implements IAthlete {
  constructor(
    public id?: string,
    public userProvider?: string,
    public userName?: string,
    public firstName?: string,
    public middleName?: string,
    public lastName?: string,
    public passwordUUId?: string,
    public length?: number,
    public weight?: number,
    public mollieKey?: string,
    public paymentStatus?: string,
    public paymentDate?: string,
    public fuelSettings?: IFuelSettings
  ) {}
}
