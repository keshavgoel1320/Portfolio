import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
        </div>
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <a
              key={index}
              href={socialImg.link}
              target="_blank"
              rel="noreferrer"
              className="icon"
            >
              <img
                src={socialImg.imgPath}
                alt="social icon"
                className="rounded-md"
              />
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Keshav Goel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
