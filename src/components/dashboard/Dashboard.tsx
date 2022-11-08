import axios from "axios";
import { useEffect, useState } from "react";
import { CountryList } from "../countryList/CountryList";
import { ICountryArray } from "../../models/countryModel";
import { ApiUrl } from "../../models/apiUrlEnum";

export const Dashboard = () => {
  const [list, setList] = useState<ICountryArray>();

  const getCountryList = async () => {
    const response = await axios.get(ApiUrl.COUNTRIES);
    const countryList: ICountryArray = {array: response?.data.value};
    setList(countryList);
  };

  useEffect(() => {
    getCountryList();
  }, []);

  return (
    <>
      <CountryList list={list} refresh ={getCountryList} />
    </>
  );
};
