import styled, { css } from "styled-components";

const Container = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
`;

export { Container, hover01, hover02 };

export const Purple = css`
  background-color: #e9d4ff;
  color: #9a48f1;
`;

export const Orange = css`
  background-color: #ffe4c2;
  color: #ff6d00;
`;

export const Green = css`
  background-color: #b4fdd1;
  color: #06b16e;
`;

export const Gray = css`
  background-color: #94a6be;
  color: #ffffff;
`;

export const Wrapper = styled.div`
  max-width: 100%;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  background-color: #f1f1f1;
`;

const hover01 = css`
&:hover{
background-color: #33399b;
}
`;

const hover02 = css`
&:hover{
  color: #33399b;
}
`;