import { ICountryArray } from "../../models/countryModel";
import { CountryItem } from "../countryItem/CountryItem";

export const CountryList = ({
  list,
  refresh,
}: {
  list: ICountryArray | undefined;
  refresh: () => void;
}) => {
  return (
    <div className="countryList">
      {list?.array.map((listElement) => (
        <CountryItem
          key={listElement.Id}
          countryData={{
            Id: listElement.Id,
            Nazwa: listElement.Nazwa,
            Symbol: listElement.Symbol,
          }}
          refresh={refresh}
        />
      ))}
    </div>
  );
};
