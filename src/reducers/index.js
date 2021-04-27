import { ADD_FEATURE, REMOVE_FEATURE } from "../actions/index";

export const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: "2019 Ford Mustang",
    image:
      "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: [],
  },
  additionalFeatures: [
    { id: 1, name: "V-6 engine", price: 1500 },
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 250 },
  ],
};

const reducer = (state = initialState, action) => {
  let features, additionalPrice, additionalFeatures;
  switch (action.type) {
    case ADD_FEATURE:
      const featureToAdd = state.additionalFeatures.find(
        (feature) => feature.id === action.payload
      );
      features = [...state.car.features, featureToAdd];
      additionalPrice = updatePrice(features);
      additionalFeatures = state.additionalFeatures.filter(
        (feature) => feature.id !== action.payload
      );
      return {
        ...state,
        additionalPrice,
        car: { ...state.car, features },
        additionalFeatures,
      };
    case REMOVE_FEATURE:
      const featureToRemove = state.car.features.find(
        (feature) => feature.id === action.payload
      );
      features = state.car.features.filter(
        (feature) => feature.id !== action.payload
      );
      additionalPrice = updatePrice(features);
      additionalFeatures = [...state.additionalFeatures, featureToRemove];
      return {
        ...state,
        additionalPrice,
        car: { ...state.car, features },
        additionalFeatures,
      };
    default:
      return state;
  }
};

const updatePrice = (features) =>
  features.reduce((acc, feature) => acc + feature.price, 0);

export default reducer;
