import { create } from "zustand";
interface EmployeeRange {
  minEmployees: number;
  maxEmployees: number;
}
export interface IRevenueRange {
  minRevenue: number;
  maxRevenue: number;
}

interface StoreState {
  authorisations: string[];
  locations: string[];
  creditRating: string[]; // Fixed spelling from "creditReting"
  employee: EmployeeRange;
  revenue: IRevenueRange;
  setAuthorisations: (newAuthorisations: string[]) => void;
  setLocations: (newLocations: string[]) => void;
  setCreditRating: (newCreditRating: string[]) => void; // Fixed spelling
  setEmployee: (newEmployee: EmployeeRange) => void;
  setRevenue: (newRevenue: IRevenueRange) => void;
}

const useFilterStore = create<StoreState>((set) => ({
  authorisations: [], // Initially empty
  locations: [], // Initially empty
  creditRating: [], // Initially empty
  employee: { minEmployees: 0, maxEmployees: 0 }, // Initially empty
  revenue: { minRevenue: 0, maxRevenue: 0 }, // Initially empty
  setAuthorisations: (newAuthorisations) =>
    set(() => ({ authorisations: newAuthorisations })),
  setLocations: (newLocations) => set(() => ({ locations: newLocations })),
  setCreditRating: (newCreditRating) =>
    set(() => ({ creditRating: newCreditRating })), // Fixed spelling
  setEmployee: (newEmployee) => set(() => ({ employee: newEmployee })),
  setRevenue: (newRevenue) => set(() => ({ revenue: newRevenue })),
}));

export default useFilterStore;
