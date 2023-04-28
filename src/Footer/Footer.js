import React from "react";

const Footer = () => {
  return (
    <footer style={{ textAlign: "center", color: "aqua" }}>
      <p>Copyright &copy; {new Date().getFullYear() - 1} ShivamJha</p>
    </footer>
  );
};
export default Footer;
