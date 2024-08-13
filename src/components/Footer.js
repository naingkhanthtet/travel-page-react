import React from "react";
import { FaGithub, FaTwitter, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="footer-icons">
            <FaGithub size={30}/>
            <FaTwitter size={30}/>
            <FaLinkedin size={30}/>
            <FaFacebook size={30}/>
            <FaInstagram size={30}/>
        </footer>
    )
}