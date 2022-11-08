export interface ICountryModel {
    Id: number;
    Symbol: string;
    Nazwa: string;
  }

export interface ICountryArray {
    array: Array<ICountryModel>;
}