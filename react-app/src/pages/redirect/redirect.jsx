import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const RedirectPage = () => {
    
  const navigate = useNavigate();
  const [code] = useSearchParams();

  useEffect(() => {
    fetch(
      `http://localhost:9090/api/v1/auth/confirm-account?activationCode=${code.get(
        "code"
      )}`
    ).then((resp) => {
      console.log(code);
      if (resp.ok) navigate("/login/login");
      else {
        navigate("/error-page");
      }
    });
  }, []);

  return (
    <div>
      <p>Yönlendirme yapılıyor...</p>
    </div>
  );
};

export default RedirectPage;
