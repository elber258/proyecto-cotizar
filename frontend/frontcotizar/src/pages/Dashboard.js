import React from "react";

// User component
import UserMngComponent from "../components/dashboard/UserForm";
import ProductsMngComponent from "../components/dashboard/ProductForm";
import UsersDBMngComponent from "../components/dashboard/AllUsers";


const Dashboard = () => {
  return (
    <>
      <UserMngComponent />
      <UsersDBMngComponent />
      <ProductsMngComponent />
    </>
  );
};

export default Dashboard;
