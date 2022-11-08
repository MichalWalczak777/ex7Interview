import { Button } from "@mui/material";
import { useState } from "react";
import { Label } from "../../models/labelEnum";
import { ICountryModel } from "../../models/countryModel";
import { CountryItemDialog } from "./CountryItemDialog";

interface ICountryItemProps {
  countryData: ICountryModel;
  refresh: () => void;
}

export const CountryItem = ({ countryData, refresh }: ICountryItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleEdit = () => {
    setIsOpen(true);
  };

  return (
    <>
      <div className="countryItem">
        <div>{countryData.Id}</div>
        <div>{countryData.Symbol}</div>
        <div>{countryData.Nazwa}</div>
        <div>
          <Button onClick={handleEdit} color="primary">
            {Label.EDIT}
          </Button>
        </div>
      </div>
      <CountryItemDialog
        isOpen={isOpen}
        id={countryData.Id}
        setIsOpen={setIsOpen}
        refresh={refresh}
      />
    </>
  );
};
