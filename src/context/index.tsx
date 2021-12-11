import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

type FilterProviderProps = {
  children: ReactNode;
};

type FilterStateProps = "Africa" | "Americas" | "Asia" | "Europe" | "Oceania";

type FilterContextProps = {
  continent: FilterStateProps;
  setContinent: Dispatch<SetStateAction<string>>;
  searchedCountry: string;
  getSearchedCountry: (
    event: React.FormEvent<HTMLFormElement>,
    country: string
  ) => void;
};

export const FilterContext = createContext<FilterContextProps>(
  {} as FilterContextProps
);

export function ContinentContextProvider({ children }: FilterProviderProps) {
  const [continent, setContinent] = useState<FilterStateProps>("Americas");
  const [searchedCountry, setSearchedCountry] = useState("");

  const getSearchedCountry = (event, country: string) => {
    event.preventDefault();
    setSearchedCountry(country.toLocaleLowerCase());
  };

  return (
    <FilterContext.Provider
      value={{ continent, setContinent, searchedCountry, getSearchedCountry }}
    >
      {children}
    </FilterContext.Provider>
  );
}
