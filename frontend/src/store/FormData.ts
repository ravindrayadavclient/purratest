// store/useFormStore.ts
import { create } from "zustand";

interface FormState {
  formData: {
    name: string;
    certificates: string;
    turnoverMax: string;
    employeesMin: string;
    location: string;
    creditRatio: string;
  };
  setFormData: (key: keyof FormState["formData"], value: string) => void;
  resetForm: () => void;
}

const useFormStore = create<FormState>((set) => ({
  formData: {
    name: "",
    certificates: "",
    turnoverMax: "",
    employeesMin: "",
    location: "",
    creditRatio: "",
  },
  setFormData: (key, value) =>
    set((state) => ({
      formData: { ...state.formData, [key]: value },
    })),
  resetForm: () =>
    set({
      formData: {
        name: "",
        certificates: "",
        turnoverMax: "",
        employeesMin: "",
        location: "",
        creditRatio: "",
      },
    }),
}));

export default useFormStore;
