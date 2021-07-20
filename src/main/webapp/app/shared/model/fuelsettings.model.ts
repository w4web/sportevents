export interface IFuelSettings {
  fuelSettingsId?: string;
  carbohydratesGel: number;
  carbohydratesSportDrank: number;
  selectedOwnGelItem?: boolean;
  selectedOwnDrinkItem?: boolean;
}

export class FuelSettings implements IFuelSettings {
  constructor(
    public fuelSettingsId?: string,
    public carbohydratesGel: number = 0,
    public carbohydratesSportDrank: number = 0,
    public selectedOwnGelItem?: boolean,
    public selectedOwnDrinkItem?: boolean
  ) {}
}
