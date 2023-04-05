import { createContext, useState, useEffect } from "react";
import { server } from "config";
export const Global_data = createContext(null);

function Context({ children }) {
  let initialData = {
    encounters: [],
    countries: [],
  };
  const [data, setData] = useState(initialData);

  const getEncounters = async () => {
    const encountersResponse = await fetch(`${server}/api/encounters`);
    const encounters = await encountersResponse.json();
    const countriesResponse = await fetch(`${server}/api/countries`);
    const countries = await countriesResponse.json();

    setData({ ...data, encounters, countries });
  };

  useEffect(() => {
    getEncounters();
  }, []);
  return (
    <Global_data.Provider value={{ data, setData }}>
      {children}
    </Global_data.Provider>
  );
}

export default Context;
