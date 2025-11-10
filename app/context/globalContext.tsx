"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";
import { FilterForm, Job } from "../types";

interface GlobalContextType {
  data: Job[] | null;
  setData: Dispatch<SetStateAction<Job[] | null>>;
  filterForm: FilterForm;
  setFilterForm: Dispatch<SetStateAction<FilterForm>>;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<Job[] | null>(null);

  const [filterForm, setFilterForm] = useState<FilterForm>({
    searchInput: "",
    searchLocation: "",
    isFullTime: false,
  });

  // 🟢 1. İlk yüklemede localStorage'dan oku
  useEffect(() => {
    const savedFilters = localStorage.getItem("filterForm");
    if (savedFilters) {
      try {
        const parsed = JSON.parse(savedFilters);
        setFilterForm(parsed);
      } catch (error) {
        console.error("Error parsing filterForm from localStorage:", error);
      }
    }
  }, []);

  // 🟢 2. filterForm değiştikçe localStorage'a kaydet
  useEffect(() => {
    localStorage.setItem("filterForm", JSON.stringify(filterForm));
  }, [filterForm]);

  return (
    <GlobalContext.Provider
      value={{
        data,
        setData,
        filterForm,
        setFilterForm,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobal = () => {
  const context = useContext(GlobalContext);
  if (!context)
    throw new Error("useGlobal must be used within a GlobalProvider");
  return context;
};
