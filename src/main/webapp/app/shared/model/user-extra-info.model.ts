import { IUser } from 'app/core/user/user.model';

export interface IUserExtraInfo {
  id?: number;
  middleName?: string;
  user?: IUser;
}

export class UserExtraInfo implements IUserExtraInfo {
  constructor(public id?: number, public middleName?: string, public user?: IUser) {}
}
