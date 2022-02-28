import { Link } from "react-router-dom"
import styled from "styled-components"

const Nav = styled.div`
  width: 100%;
  height: 80px;
  box-shadow: 1px 1px 1px 1px #dddbdb;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`

const Menu = styled.div`
  text-align: center;
  text-transform: uppercase;
  background-color: #E9967A;
  padding: 7px 0px;
  border-radius: 20px;
  font-weight: 800;
  a {
    display: block;
  }
  width: 80px;
  height: 30px;
  box-shadow: 1px 1px 1px 1px gray;
  margin: 0 6px;
`

export function Header() {
  return (
    <Nav>
      <Menu>
        <Link to='/main'>Main</Link>
      </Menu>
      <Menu>
        <Link to='/world'>World</Link>
      </Menu>
    </Nav>
  )
}