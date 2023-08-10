const API_PRODUCTS = `https://dummyjson.com/products`;

const GetpProducts = async () => {
  const response = await fetch(API_PRODUCTS);
  const data = await response.json();
  return data;
};

export const ServiceAPI = {
  GetpProducts,
};
