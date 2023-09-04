import { FooterStyle, List, Text, Icon, ListContacts, Wrapper} from "./Footer.styled";
import { BsGithub, BsLinkedin, BsTelephone  } from "react-icons/bs";
import { GoMail } from "react-icons/go";
import { LiaCopyrightSolid } from "react-icons/lia";
import { AiOutlineHeart } from "react-icons/ai";



export default function Footer() {
     const currentYear = new Date().getFullYear();
  return (
    <FooterStyle>
      <Wrapper>
      <ListContacts>
        <li>
          <a href="mailto:oksanagerzanych.job@gmail.com">
            {" "}
            <Icon>
              <GoMail size={20} />
            </Icon>
            oksanagerzanych.job@gmail.com
          </a>
        </li>
        <li>
          <a href="tel:+380509441543">
            {" "}
            <Icon>
              <BsTelephone size={20} />
            </Icon>
            +38 (050) 944-15-43
          </a>
        </li>
      </ListContacts>

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
          </List></Wrapper>
          <Text> Made with <AiOutlineHeart size={12} /> by OGerzanych <LiaCopyrightSolid size={12}/> {currentYear}</Text>
    </FooterStyle>
  );
}
