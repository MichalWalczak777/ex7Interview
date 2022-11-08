import axios from "axios";
import { useEffect, useState } from "react";
import { CountryList } from "../countryList/CountryList";
import { ICountryArray } from "../../models/countryModel";
import { ApiUrl } from "../../models/apiUrlEnum";
import { CountryHeader } from "../countryHeaders/CountryHeader";
import { Label } from "../../models/labelEnum";

export const Dashboard = () => {
  const [list, setList] = useState<ICountryArray>();

  const getCountryList = async () => {
    const response = await axios.get(ApiUrl.COUNTRIES);
    const countryList: ICountryArray = { array: response?.data.value };
    setList(countryList);
  };

  useEffect(() => {
    getCountryList();
  }, []);

  return (
    <>
      <h1>{Label.COUNTRIES}</h1>
      <CountryHeader />
      <CountryList list={list} refresh={getCountryList} />
    </>
  );
};
