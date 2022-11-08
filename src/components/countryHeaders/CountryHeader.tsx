import { countryHeaders } from "../../models/countryHeaders";

export const CountryHeader = () => {
  return (
    <div className="countryItem">
      {countryHeaders.map((header) => (
        <div>{header}</div>
      ))}
    </div>
  );
};
