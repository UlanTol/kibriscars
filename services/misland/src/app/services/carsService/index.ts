import { apolloClient } from "../../qraphql";
import { GET_ALL_CARS } from "./queries";
import { GetCars_cars } from "./__generated__/GetCars";

class CarsService {
  public async getCars(): Promise<GetCars_cars[]> {
    try {
      const response = await apolloClient.query({ query: GET_ALL_CARS });

      if (response && response.data && response.data.cars) {
        return response.data.cars as GetCars_cars[];
      } else {
        throw new Error("Failed to fetch cars data.");
      }
    } catch (err) {
      throw err;
    }
  }
}

export default new CarsService();
