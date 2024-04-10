import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="mb-2 md:mb-0">
            <p>&copy; {new Date().getFullYear()} Your Website</p>
          </div>
          <div className="flex items-center">
            <a
              href="#"
              className="text-gray-400 hover:text-white hover:underline mr-4"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white hover:underline"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
