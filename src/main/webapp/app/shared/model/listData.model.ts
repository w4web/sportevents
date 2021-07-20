export interface ListData {
  id?: number;
  sport?: string;
  name?: string;
  grade?: string;
  man?: number;
  women?: number;
}

export class ListDataModel implements ListData {
  constructor(
    public id?: number,
    public sport?: string,
    public name?: string,
    public grade?: string,
    public man?: number,
    public women?: number
  ) {}
}
