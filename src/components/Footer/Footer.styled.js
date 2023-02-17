import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: relative;
  padding-top: 40px;
  padding-bottom: 40px;
  padding-left: 20px;
  background-color: #fafafa;
  color: #696969;
  border: 1px solid #d8d8d8;

  @media screen and (min-width: 768px) {
    padding-left: 343px;
    padding-top: 80px;
    padding-bottom: 107px;
  }
`;

export const Icon = styled.div`
  margin-right: 20px;
`;
export const Smile = styled.span`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    position: absolute;
    width: 88px;
    height: 85px;
    top: -35px;
    left: 5px;
  }
`;

export const SmileGreen = styled.span`
  position: absolute;
  width: 88px;
  height: 85px;
  right: 10px;
  top: -1px;
  @media screen and (min-width: 360px) {
    right: 128px;
  }
`;

export const SmileRight = styled.span`
  position: absolute;
  top: -10px;
  right: -2px;

  @media screen and (min-width: 768px) {
    top: 51px;
  }
`;
