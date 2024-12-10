import { InstanceAxios } from "../../hooks/axiosConfig";

export class SupplierServies {
  public static getSupplier(
    name?: string,
    certificates?: string,
    turnoverMax?: string,
    employeesMin?: string,
    employeesMax?: string,
    countries?: string,
    creditRating?: string
  ) {
    return InstanceAxios().get("/suppliers", {
      params: {
        name,
        certificates,
        turnoverMax,
        employeesMin,
        employeesMax,
        countries,
        creditRating,
      },
    });
  }

  public static getFilterRevenue() {
    return InstanceAxios().get("/filters/revenue");
  }
  public static getFilterCreditRatings() {
    return InstanceAxios().get("/filters/credit-ratings");
  }
  public static getFilterEmployees() {
    return InstanceAxios().get("/filters/employees");
  }

  public static getFilterCertificates() {
    return InstanceAxios().get("/filters/certificates");
  }
  public static getFilterLocation() {
    return InstanceAxios().get("/filters/locations");
  }
}
