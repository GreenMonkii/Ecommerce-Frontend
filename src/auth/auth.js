export const createUser = async (email, password, fn) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/users/signup`,
      {
        method: "POST",
        headers: { "Content-Type": "applivation/json" },
        body: JSON.stringify({ email, password }),
      }
    );
    if (response.ok) {
      response.json().then((data) => {
        fn(data.token);
      });
    }
    return response.ok;
  } catch (error) {
    return false;
  }
};

export const signInUser = async (email, password, fn) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/users/login`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      }
    );
    if (response.ok) {
      response.json().then((data) => {
        console.log(data.token);
        fn(data.token);
      });
    }
    return response.ok;
  } catch (error) {
    return false;
  }
};

export const isTokenValid = async (token) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/users/validate`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      }
    );
    return response.ok;
  } catch (error) {
    return false;
  }
};
