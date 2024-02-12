export const createUser = async (username, email, password, fn) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/users/signup`, {
      method: "POST",
      headers: { "Content-Type": "applivation/json" },
      body: JSON.stringify({ username, email, password }),
    });
    if (response.ok) {
      fn(username);
    }
    return response.ok;
  } catch (error) {
    return false;
  }
};

export const signInUser = async (username, password, fn) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/users/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    if (response.ok) {
      fn(username);
    }
    return response.ok;
  } catch (error) {
    return false;
  }
};
