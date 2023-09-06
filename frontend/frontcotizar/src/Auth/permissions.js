import React from "react";
import { AuthContext } from "./AuthCtx";

function useAuth() {
  return React.useContext(AuthContext);
}

function Permissions({ children }) {
  let auth = useAuth();

  if (!auth.user) {
    return null;
  }

  return children;
}

export default Permissions;
