import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import {Outlet} from 'react-router-dom'
import { useSetRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { fetchCoins } from './api';
import { isDarkAtom } from '../atoms';
import { SVGMap, CheckboxSVGMap } from 'react-svg-map';
import "react-svg-map/lib/index.css";
import china from '@svg-maps/china'
import "../styles.css";

const Container = styled.div`
  padding: 0px 20px;
`;

const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// const Coin = styled.li`
//   background-color: ${(props) => props.theme.cardBgColor};
//   color: ${(props) => props.theme.textColor};
//   border-radius: 15px;
//   margin-bottom: 10px;
//   border: 1px solid white;
//   a {
//     display: flex;
//     align-items: center;
//     padding: 20px;
//     transition: color 0.2s ease-in;
//   }
//   &:hover {
//     a {
//       color: ${(props) => props.theme.accentColor};
//     }
//   }
// `;



function Home() {
  const isDark = useRecoilValue(isDarkAtom);
  const setDarkAtom = useSetRecoilState(isDarkAtom);
  const toggleDarkAtom = () => setDarkAtom((prev) => !prev);
  // const { isLoading, data } = useQuery('allCoins', fetchCoins);
  // console.log(isLoading, data);
  return (
    <Container>
      <Link to='/world' >china</Link>
      <Outlet />
    </Container>
  );
}
export default Home;
