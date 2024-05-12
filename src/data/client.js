import ApiError from "../errors/app";

export const getProducts = async (query = {}) => {
  const queryParams = new URLSearchParams(query);
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/products?${queryParams}`
  );
  return response.ok ? response.json() : {};
};

export const getProductById = async (id) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/products/${id}`
  );
  return response.ok ? response.json() : {};
};

export const getCartItems = async () => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/cart`);
  return response.ok ? response.json() : {};
};

export const addToCart = async (productId, quantity) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/cart/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ productId, quantity }),
  });
  if (!response.ok) {
    throw new ApiError("Failed to add product to cart");
  }
};

export const removeFromCart = async (cartItemId) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/cart/remove`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ productId: cartItemId }),
  });
  if (!response.ok) {
    throw new ApiError("Failed to remove product from cart");
  }
};
