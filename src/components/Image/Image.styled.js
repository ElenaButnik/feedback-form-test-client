import styled from "styled-components";
import imgForBcg from "../../images/bcg.jpg";

export const ImageBcg = styled.div`

@media screen and (min-width: 768px) {
    position: relative;
  margin-top: -20px;
  margin-right: -300px;
  margin-left: 158px;

  width: 2000px;
  height: 924px;
  border-radius: 50%;
  background-image: url(${imgForBcg});
  background-color: blue;
  background-size: 66% 100%;
  background-repeat: no-repeat;
  background-position: left top;

  }

  
`;

export const Smile = styled.span`
 position: absolute;
  top: 40px;
  left: -40px;
  z-index: -1;
  @media screen and (min-width: 768px) {
    top: 525px;
  z-index: 2;

  }
`;

export const SmilePink = styled.span`
   position: absolute;
  top: 200px;
  left: -95px;
  z-index: -1;

  @media screen and (min-width: 768px) {
  top: 545px;
  z-index: 0;
  }
`;
