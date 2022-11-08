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
  const [open, setOpen] = useState(false);

  const handleEdit = () => {
    setOpen(true);
  };

  return (
    <div>
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
        open={open}
        id={countryData.Id}
        setOpen={setOpen}
        refresh={refresh}
      />
    </div>
  );
};
