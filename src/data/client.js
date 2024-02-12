export const getProducts = async () => {
  console.log("Called Get Products");
  console.log("API URL", process.env.REACT_APP_API_URL);
  const response = await fetch(`${process.env.REACT_APP_API_URL}/products`);
  return response.ok ? response.json() : {};
};

export const getProductById = async (id) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/products/${id}`);
  return response.ok ? response.json() : {};
};
