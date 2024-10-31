const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>&copy; {currentYear} NG Incorporated. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
