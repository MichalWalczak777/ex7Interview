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
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  refresh: () => void;
}

export const CountryItemDialog = ({
  open,
  setOpen,
  refresh,
  id,
}: ICountryItemDialogProps) => {
  const [formFields, setFormFields] = useState({
    symbol: "",
    name: "",
  });

  const handleSave = async () => {
    setOpen(false);
    await axios.patch(`${ApiUrl.COUNTRIES}(${id})`, {
      Symbol: formFields.symbol,
      Nazwa: formFields.name,
    });
    refresh();
  };

  const handleClose = async () => {
    setOpen(false);
  };

  const handleCountryChanges = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Dialog open={open} onClose={handleClose}>
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
