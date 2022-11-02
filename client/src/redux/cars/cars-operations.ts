import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ICarResponse, ICar } from "../../model/car/car";

axios.defaults.baseURL = "http://localhost:2222/api";

interface ICarId {
  _id: string;
}

const getAllCars = createAsyncThunk<ICarResponse[], void, { rejectValue: any }>(
  "cars/getAllCars",
  async (_, { rejectWithValue }: any) => {
    try {
      const { data } = await axios.get("/car/");
      return data.cars;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const addCar = createAsyncThunk<ICarResponse, ICar, { rejectValue: any }>(
  "cars/addNewCar",
  async (credentials, { rejectWithValue }: any) => {
    const car = credentials;
    try {
      const { data } = await axios.post("/car/", car);
      return data.car;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const deleteCar = createAsyncThunk<ICarResponse, ICarId, { rejectValue: any }>(
  "cars/deleteCar",
  async ({ _id }, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/car/${_id}`);
      return data.car;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const updateCar = createAsyncThunk<ICarResponse, ICar, { rejectValue: any }>(
  "cars/updateCar",
  async (
    {
      id,
      brand,
      model,
      year,
      engineDisplacement,
      transmission,
      fuel,
      price,
      bodyType,
      vehicleClass,
      imageURL,
    },
    { rejectWithValue }: any
  ) => {
    const car = {
      brand,
      model,
      year,
      engineDisplacement,
      transmission,
      fuel,
      price,
      bodyType,
      vehicleClass,
      imageURL,
    };
    try {
      const { data } = await axios.put(`/car/${id}`, car);
      return data.car;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const carsOperations = {
  getAllCars,
  addCar,
  deleteCar,
  updateCar,
};

export default carsOperations;
