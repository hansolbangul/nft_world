import { useSetRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { isDarkAtom, isLocation } from '../atoms';
import { SVGMap, CheckboxSVGMap, RadioSVGMap } from 'react-svg-map';
import "react-svg-map/lib/index.css";
import "../styles.css";
import { useEffect, useState } from 'react';

import canada from "@svg-maps/canada"
import china from "@svg-maps/china"
import india from "@svg-maps/india"
import italy from "@svg-maps/italy"
import japan from "@svg-maps/japan"
import southKorea from '@svg-maps/south-korea'
import spain from "@svg-maps/spain"
import sweden from "@svg-maps/sweden"
import taiwan from "@svg-maps/taiwan"
import ukraine from "@svg-maps/ukraine"
import usa from "@svg-maps/usa"
import uzbekistan from "@svg-maps/uzbekistan"
import world from "@svg-maps/world"
import { useOutletContext, useParams } from 'react-router';

const Container = styled.div`
  padding-top: 100px;
  display: flex;
  justify-content: space-between;
`;

const Box = styled.div`
  width: 100%;
  height: 80vh;
  padding: 1rem;
`

const Menu = styled.div`
  width: 18%;
  height: 80vh;
  border: 1px solid gray;
  border-radius: 20px;
  overflow: scroll;
  padding: 1rem;
`

const Land = styled.div`
  width: 100%;
  height: 50px;
  padding: 1rem;
  text-align: center;
`

function Location() {
  const { local } = useParams();
  const world = useRecoilValue(isLocation)
  console.log(local)
  console.log(world)
  return (
    <Container>
      <Box>
        {/* <SVGMap map={Tag} locationClassName={(e) => {
          if (e.name === "Busan") return 'svg-map__location__select'
          else return 'svg-map__location'
        }} /> */}
        {/* {array ? <SVGMap map={array} className='svg-map_world' locationClassName='svg-map__location_world' onLocationClick={onLocationClick} /> : 'Loading'} */}
      </Box>
    </Container>
  );
}
export default Location;
