export const getProducts = async (query={}) => {
  const queryParams = new URLSearchParams(query)
  const response = await fetch(`${process.env.REACT_APP_API_URL}/products?${queryParams}`);
  return response.ok ? response.json() : {};
};

export const getProductById = async (id) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/products/${id}`);
  return response.ok ? response.json() : {};
};
