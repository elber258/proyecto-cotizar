import axios from "axios";

//LOGIN

export const postAuth = async (url, formData, cbResponse) => {
  try {
    const { data } = await axios.post(url, formData);
    cbResponse(data);
  } catch (error) {
    console.log(error);
  }
};

//USUARIOS

export const postNewUser = async (url, formData, cbResponse) => {
    try {
      const { data } = await axios.post(url, formData);
      cbResponse(data);
    } catch (error) {
      console.log(error);
    }
  };


export const getUser = async (url, cbResponse) => {
  const { token } = JSON.parse(localStorage.getItem("userInfo"));
  try {
    const { data } = await axios.get(url, { headers: {
        Authorization: `Bearer ${token}`
    } });
    cbResponse(data);
  } catch (error) {
    console.log(error);
  }
};

export const postNewUserAuth = async (url, formData, cbResponse) => {
    const { token } = JSON.parse(localStorage.getItem("userInfo"));
    try {
      const { data } = await axios.post(url, formData, { headers: {
          Authorization: `Bearer ${token}`
      } });
      cbResponse(data);
    } catch (error) {
      console.log(error);
    }
  };



export const putUpdateUserAuth = async (url, formData, cbResponse) => {
  try {
    const { data } = await axios.put(url, formData);
    cbResponse(data);
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async (url, resData, cbResponse) => {
  try {
    const { data } = await axios.delete(url, resData);
    cbResponse(data);
  } catch (error) {
    console.log(error);
  }
};

//PRODUCTOS

export const getProduct = async (url, cbResponse) => {
  try {
    const { data } = await axios.get(url);
    cbResponse(data);
  } catch (error) {
    console.log(error);
  }
};

export const postNewProduct = async (url, formData, cbResponse) => {
  try {
    const { data } = await axios.post(url, formData);
    cbResponse(data);
  } catch (error) {
    console.log(error);
  }
};

export const putUpdateProduct = async (url, formData, cbResponse) => {
  try {
    const { data } = await axios.put(url, formData);
    cbResponse(data);
  } catch (error) {
    console.log(error);
  }
};

export const deleteProduct = async (url, resData, cbResponse) => {
  try {
    const { data } = await axios.delete(url, resData);
    cbResponse(data);
  } catch (error) {
    console.log(error);
  }
};
