import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { fetchCoins } from './api';
import { isDarkAtom } from '../atoms';
import { SVGMap, CheckboxSVGMap } from 'react-svg-map';
import 'react-svg-map/lib/index.css';
import china from '@svg-maps/china';
import '../styles.css';

const Container = styled.div`
  padding: 0px 20px;
  padding-top: 100px;
`;

function Home() {
  const isDark = useRecoilValue(isDarkAtom);
  const setDarkAtom = useSetRecoilState(isDarkAtom);
  const toggleDarkAtom = () => setDarkAtom((prev) => !prev);
  // const { isLoading, data } = useQuery('allCoins', fetchCoins);
  // console.log(isLoading, data);
  return <Container></Container>;
}
export default Home;
