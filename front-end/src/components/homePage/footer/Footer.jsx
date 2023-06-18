import React from "react";
import "./footer.css"

function Footer() {

    const currentYear = new Date().getFullYear();

    return (
        <footer id="footer">
            <div className="container-fluid">
                <a href="https://www.linkedin.com/in/akbarjon-atakhanov-125189175"><i className="social-icon fab fa-linkedin"></i></a>
                <a href="https://www.facebook.com/akbarjon.atakhanov"><i className="social-icon fab fa-facebook-f"></i></a>
                <a href="https://www.instagram.com/atakhanov_97"><i className="social-icon fab fa-instagram"></i></a>
                <a href="mailto:atakhanov@gmail.com"><i className="social-icon fas fa-envelope"></i></a>
                <p>© Copyright {currentYear}</p>
            </div>
            
        </footer>
    )
}

export default Footer;