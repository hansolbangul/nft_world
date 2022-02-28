import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { fetchCoins } from './api';
import { isDarkAtom } from '../atoms';
import { SVGMap, CheckboxSVGMap, RadioSVGMap } from 'react-svg-map';
import "react-svg-map/lib/index.css";
import "react-svg-map/lib/index1.css";
import southKorea from '@svg-maps/south-korea'
import "../styles.css";
import { useState } from 'react';

const Container = styled.div`
  padding: 0px 20px;
`;

const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;


function World() {
  const isDark = useRecoilValue(isDarkAtom);
  const [array, setArray] = useState(southKorea)
  
  function onLocationClick(event) {
    console.log(event.target.id)
    console.log(event.target)
  }
  function onChange(event) {
    console.log(event)
  }
  // console.log(array)
  const Tag = array

  // Tag.locations.array(e => e.name = 'sejong' ? e.)
  
  return (
    <Container>
      <SVGMap map={Tag} locationClassName={(e) => {
        if (e.name === "Busan") return 'svg-map__location__select'
        else return 'svg-map__location'
      }} />
    </Container>
  );
}
export default World;
