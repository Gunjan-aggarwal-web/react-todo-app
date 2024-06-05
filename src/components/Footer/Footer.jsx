import { FaGithub } from "react-icons/fa";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={`${style.footer} bg-dark text-white`}>
      <div className={style.socialIconContainer}>
       
        <a
          href="https://github.com/Gunjan-aggarwal-web"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className={style.socialIcon} />
        </a>
      </div>
      <span className={`copyRightText ${style.socialIconContainer}`}>
        <span className={style.madeWithText}> Made With</span> 💗 by Gunjan
        &copy; {new Date().getFullYear()}
      </span>
    </footer>
  );
};

export default Footer;
 