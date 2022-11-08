import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import axios from "axios";
import { Dispatch, SetStateAction, useState } from "react";
import { ApiUrl } from "../../models/apiUrlEnum";
import { Label } from "../../models/labelEnum";

interface ICountryItemDialogProps {
  id: number;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  refresh: () => void;
}

export const CountryItemDialog = ({
  isOpen,
  setIsOpen,
  refresh,
  id,
}: ICountryItemDialogProps) => {
  const [formFields, setFormFields] = useState({
    symbol: "",
    name: "",
  });

  const handleSave = async () => {
    setIsOpen(false);
    await axios.patch(`${ApiUrl.COUNTRIES}(${id})`, {
      Symbol: formFields.symbol,
      Nazwa: formFields.name,
    });
    refresh();
  };

  const handleClose = async () => {
    setIsOpen(false);
  };

  const handleCountryChanges = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle>{Label.EDIT_COUNTRY}</DialogTitle>
      <DialogContent>
        <label>{Label.SYMBOL}</label>
        <input
          type="text"
          name="symbol"
          placeholder={Label.SYMBOL}
          onChange={handleCountryChanges}
        ></input>
        <label>{Label.NAME}</label>
        <input
          type="text"
          name="name"
          placeholder={Label.NAME}
          onChange={handleCountryChanges}
        ></input>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSave} color="primary">
          {Label.SAVE}
        </Button>
        <Button onClick={handleClose} color="primary" autoFocus>
          {Label.CANCEL}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
