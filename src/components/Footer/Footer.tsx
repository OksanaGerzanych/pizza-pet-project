import { FooterStyle, List} from "./Footer.styled";
import { BsGithub, BsLinkedin, BsTelephone  } from "react-icons/bs";
import { GoMail } from "react-icons/go";
import { LiaCopyrightSolid } from "react-icons/lia";
import { AiOutlineHeart } from "react-icons/ai";



export default function Footer() {
     const currentYear = new Date().getFullYear();
  return (
    <FooterStyle>
      <List>
        <li>
          <a href="mailto:oksanagerzanych.job@gmail.com">
            {" "}
            <span>
              <GoMail size={20} />
            </span>
            oksanagerzanych.job@gmail.com
          </a>
        </li>
        <li>
          <a href="tel:+380509441543">
            {" "}
            <span>
              <BsTelephone size={20} />
            </span>
            +38 (050) 944-15-43
          </a>
        </li>
      </List>

      <List>
        <li>
          <a
            href="linkedin.com/in/oksana-gerzanych-5b2456257"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="linkedin"
          >
            <BsLinkedin size={40} />
          </a>
        </li>

        <li>
          <a
            href="https://github.com/OksanaGerzanych"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="github"
          >
            <BsGithub size={40} />
          </a>
        </li>
          </List>
          <p><LiaCopyrightSolid /> {currentYear} Made with<AiOutlineHeart/>by OGerzanych </p>
    </FooterStyle>
  );
}
