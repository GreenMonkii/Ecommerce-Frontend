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

export const getCartItems = async (token) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/cart`, {
    headers: {
      Authorization: token,
    },
  });
  const data = await response.json();
  return response.ok ? data.items : {};
};

export const addToCart = async (product, quantity, token) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/cart/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify({ product, quantity }),
  });
  if (!response.ok) {
    console.log(response);
    throw new ApiError("Failed to add product to cart");
  }
};

export const removeFromCart = async (cartItemID, token) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/cart/remove`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify({ cartItemID }),
  });
  if (!response.ok) {
    throw new ApiError("Failed to remove product from cart");
  }
};

export const addReview = async (productID, rating, comment, token) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/products/${productID}/reviews`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({ rating, comment }),
    }
  );
  if (!response.ok) {
    const data = await response.json();
    throw new ApiError(data.message);
  }
};
