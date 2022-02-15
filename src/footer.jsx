const Footer = () => {
  const currentYear = new Date().getFullYear();  
  return (
    <footer className="navbar navbar-dark fixed-bottom bg-dark text-center" style={{
        height: "10rem"
    }}>
      <div className="container d-flex justify-content-center">
        <span className="text-light">Copyright {String.fromCharCode(169)} Your Website {currentYear}</span>
      </div>
    </footer>
  );
};

export default Footer;
