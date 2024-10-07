import style from "./Footer.module.css";
import localFont from "next/font/local";

const codeSaver = localFont({
  src: [
    {
      path: "../../../../../public/fonts/Code-Saver-Regular.ttf",
      style: "normal",
      weight: "400",
    },
    {
      path: "../../../../../public/fonts/Code-Saver-Bold.ttf",
      style: "normal",
      weight: "700",
    },
  ],
});

function Footer() {
  return (
    <footer className={style.footer}>
      <p className={codeSaver.className}>
        &copy; Coded by{" "}
        <a href="https://github.com/facujalil" target="_blank" rel="noreferrer">
          Facundo Jalil
          <i className="fab fa-github-square" aria-hidden="true"></i>
        </a>
      </p>
    </footer>
  );
}

export default Footer;
