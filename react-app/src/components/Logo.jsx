import { NavLink } from "react-router-dom"

export function LogoRegister(){

    const style = {
        backgroundColor: "var(--clr-primary)", display:"block",
        textAlign:"center",
        fontWeight: "700",
        fontSize: "1.3rem",
        padding: "16px",
        color: "black"
    };
    return (
    <NavLink to="/register/visitor" className="logoVisitor" style={style}>
        <img width="32px" src="/images/visitor.png" alt="" />
        Register
    </NavLink>
    );
}

export function LogoLogin(){

    const style = {
        backgroundColor: "var(--clr-primary)", display:"block",
        textAlign:"center",
        fontWeight: "700",
        fontSize: "1.3rem",
        padding: "16px",
        color: "black"
    };
    return (
    <NavLink to="/login/visitor" className="logoVisitor" style={style}>
        <img width="32px" src="/images/crowdsource.png" alt="" />
        Login
    </NavLink>
    );
}

export function LogoHome() {
  const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "700",
    fontSize: "1.3rem",
    padding: "18px",
    color: "black",
    textDecoration: "none", // Linkin altını çizme
    backgroundColor: "var(--clr-primary)", // Arka plan rengi
  };

  const logoStyle = {
    marginRight: "8px", // Logo ile yazı arasına boşluk eklemek için
  };

  return (
    <NavLink to="/home" className="logoHome" style={style}>
      <img width="32px" src="/images/home.png" alt="" style={logoStyle} />
      Home
    </NavLink>
  );
}

export function LogoPersonel() {
  const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "700",
    fontSize: "1.3rem",
    padding: "18px",
    color: "black",
    textDecoration: "none", // Linkin altını çizme
    backgroundColor: "var(--clr-primary)", // Arka plan rengi
  };

  const logoStyle = {
    marginRight: "8px", // Logo ile yazı arasına boşluk eklemek için
  };

  return (
    <NavLink to="/personel" className="logoPersonel" style={style}>
      <img width="32px" src="/images/home.png" alt="" style={logoStyle} />
      Personel
    </NavLink>
  );
}

export function LogoManager() {
  const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "700",
    fontSize: "1.3rem",
    padding: "18px",
    color: "black",
    textDecoration: "none", // Linkin altını çizme
    backgroundColor: "var(--clr-primary)", // Arka plan rengi
  };

  const logoStyle = {
    marginRight: "8px", // Logo ile yazı arasına boşluk eklemek için
  };

  return (
    <NavLink to="/manager" className="logoPersonel" style={style}>
      <img width="32px" src="/images/home.png" alt="" style={logoStyle} />
      Manager
    </NavLink>
  );
}

export function LogoAdmin({setAktivePage}) {
  
  function handleClick(){
    setAktivePage(null);
  }

  const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "700",
    fontSize: "1.3rem",
    padding: "18px",
    color: "black",
    textDecoration: "none", // Linkin altını çizme
    backgroundColor: "var(--clr-primary)", // Arka plan rengi
  };

  const logoStyle = {
    marginRight: "8px", // Logo ile yazı arasına boşluk eklemek için
  };

  return (
    <NavLink to="/admin" onClick={handleClick} className="logoPersonel" style={style}>
      <img width="32px" src="/images/home.png" alt="" style={logoStyle} />
      Admin
    </NavLink>
  );
}