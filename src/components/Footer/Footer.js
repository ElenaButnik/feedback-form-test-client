import { IoLogoTwitter } from "react-icons/io";
import { ImFacebook } from "react-icons/im";
import { FaPinterestP } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { ReactComponent as LeftBottom } from "../../images/bottomLeft.svg";
import { ReactComponent as FooterGreen } from "../../images/footerGreen.svg";
import { ReactComponent as FooterRight } from "../../images/footerRight.svg";
import {
  Container,
  Icon,
  Smile,
  SmileGreen,
  SmileRight,
} from "./Footer.styled";
export function Footer() {
  return (
    <>
      <Container>
        <Smile>
          <LeftBottom />
        </Smile>
        <Icon>
          <FaLinkedinIn />
        </Icon>
        <Icon>
          <IoLogoTwitter href="#" />
        </Icon>
        <Icon>
          <ImFacebook />
        </Icon>
        <FaPinterestP />
        <SmileGreen>
          <FooterGreen />
        </SmileGreen>
        <SmileRight>
          <FooterRight />
        </SmileRight>
      </Container>
    </>
  );
}
