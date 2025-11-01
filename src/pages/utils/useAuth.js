import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user"); // your key in localStorage
    if (!user) {
      navigate("/signin"); // redirect to login page
    }
  }, [navigate]);
};

export default useAuth;