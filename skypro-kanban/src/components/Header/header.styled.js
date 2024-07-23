import styled from "styled-components"

const Header = styled.header`
  width: 100%;
  margin: 0 auto;
  background-color: #FFFFFF;
`
const HeaderBlock = styled.div`
  height: 70px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: 0;
  left: 0;
  padding: 0 10px;
  `

  const HeaderLogo = styled.div`
 img {
  width: 85px;
}  `

export {Header, HeaderBlock, HeaderLogo}
