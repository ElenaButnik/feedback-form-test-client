import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  overflow: hidden;

  @media screen and (min-width: 360px) {
    max-width: 767.98px;
  }

  @media screen and (min-width: 768px) {
    max-width: 1023.98px;
    flex-direction: row;
  }
  @media screen and (min-width: 1024px) {
    max-width: 1450px;
  }
`;
export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  padding-bottom: 50px;

  @media screen and (min-width: 768px) {
    padding-left: 147px;
    padding-bottom: 174px;
    align-items: flex-start;
  }
`;
export const Title = styled.h1`
  padding-bottom: 10px;
  padding-top: 50px;
  font-size: 20px;
  color: #3e3e3e;

  @media screen and (min-width: 768px) {
    padding-top: 179px;
  }

  @media screen and (min-width: 768px) {
    font-size: 40px;
  }
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    align-items: flex-start;
  }
`;

export const Input = styled.input`
  width: 227px;
  background-color: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 10px;

  @media screen and (min-width: 768px) {
    width: 557px;
  }

  &:last-of-type {
    margin-bottom: 23px;
    height: 40px;

    @media screen and (min-width: 768px) {
      height: 189px;
    }
  }

  &:not(:last-of-type) {
    margin-bottom: 8px;
    height: 20px;

    @media screen and (min-width: 768px) {
      height: 93px;
    }
  }

  ::placeholder {
    padding-left: 46px;
    padding-top: 31px;
  }
`;

export const Button = styled.button`
  width: 218px;
  max-width: 100%;
  height: 33px;
  font-size: 18px;
  line-height: 1;

  color: #ffffff;
  background-color: #fad34f;
  border-radius: 500px;
  border: none;

  @media screen and (min-width: 768px) {
    height: 73px;
  }
`;

export const Smile = styled.span`
  width: 88px;
  height: 85px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    position: absolute;
    top: 5px;
    left: 5px;
  }
`;
