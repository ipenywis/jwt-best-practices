import React from "react";
import { useEffect, useState } from "react";

export function useAuth() {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  useEffect(() => {
    const user = localStorage.getItem("user");
    const apiToken = localStorage.getItem("api-token");
    if (user && apiToken) {
      setUser(JSON.parse(user));
      setIsAuthenticated(true);
    } else {
      setUser(null);
      setIsAuthenticated(false);
    }
  }, []);

  return { user, isAuthenticated };
}
