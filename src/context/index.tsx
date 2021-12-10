import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

type ContinentProviderProps = {
  children: ReactNode;
};

type ContinentStateProps =
  | "Africa"
  | "Americas"
  | "Asia"
  | "Europe"
  | "Oceania";

type ContinentContextProps = {
  continent: ContinentStateProps;
  setContinent: Dispatch<SetStateAction<string>>;
};

export const ContinentContext = createContext<ContinentContextProps>(
  {} as ContinentContextProps
);

export function ContinentContextProvider({ children }: ContinentProviderProps) {
  const [continent, setContinent] = useState<ContinentStateProps>("Americas");

  return (
    <ContinentContext.Provider value={{ continent, setContinent }}>
      {children}
    </ContinentContext.Provider>
  );
}
