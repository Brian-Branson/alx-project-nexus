const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} E-commerce app. All rights reserved.</p>
        <p>
          ,<link href="/privacy-policy" className="text-gray-400 hover:text-white">
            Privacy Policy
          </link>
        </p>
      </div>
    </footer>
  );
}
export default Footer;