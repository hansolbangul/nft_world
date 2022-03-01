import { useSetRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { isDarkAtom, isLocation } from '../atoms';
import { SVGMap, CheckboxSVGMap, RadioSVGMap } from 'react-svg-map';
// import 'react-svg-map/lib/index.css';
import '../styles.css';
import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import canada from '@svg-maps/canada';
import china from '@svg-maps/china';
import india from '@svg-maps/india';
import italy from '@svg-maps/italy';
import japan from '@svg-maps/japan';
import southKorea from '@svg-maps/south-korea';
import spain from '@svg-maps/spain';
import sweden from '@svg-maps/sweden';
import taiwan from '@svg-maps/taiwan';
import ukraine from '@svg-maps/ukraine';
import usa from '@svg-maps/usa';
import uzbekistan from '@svg-maps/uzbekistan';
import world from '@svg-maps/world';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';
import Location from './Location';

const Container = styled.div`
  padding-top: 100px;
  display: flex;
  justify-content: space-between;
`;

const Box = styled.div`
  width: 100%;
  height: 80vh;
  padding: 1rem;
  position: relative;
`;

const Modal = styled.div`
  width: 30vw;
  height: 88%;
  background-color: #fff;
  border-radius: 20px;
  position: fixed;
  top: 100px;
  right: 0;
  /* transform: translate(0, -50%); */
  padding: 1.25rem;
`;

function World() {
  const isDark = useRecoilValue(isDarkAtom);
  const history = useNavigate();
  const [isModal, setIsModal] = useState(false);
  const [array, setArray] = useState();
  const [land] = useState([
    { name: 'south korea', data: southKorea },
    { name: 'canada', data: canada },
    { name: 'china', data: china },
    { name: 'india', data: india },
    { name: 'italy', data: italy },
    { name: 'japan', data: japan },
    { name: 'ukraine', data: ukraine },
    { name: 'usa', data: usa },
    { name: 'spain', data: spain },
  ]);

  useEffect(() => {
    setArray(world);
  }, []);

  function onLocationClick(event) {
    console.log(event);
    const {
      target: { ariaLabel, id },
    } = event;
    if (land.filter((e) => e.name === ariaLabel.toLowerCase()).length > 0) {
      // setIsModal(true);
      history(`/world/${ariaLabel.toLowerCase()}`, {
        state: { location: land.filter((e) => e.name === ariaLabel.toLowerCase())[0].data },
      });
    } else {
      console.log('not found');
    }
    // console.log(ariaLabel.toLowerCase())
  }
  // console.log(array);

  return (
    <Container>
      <Box>
        {/* <SVGMap map={Tag} locationClassName={(e) => {
          if (e.name === "Busan") return 'svg-map__location__select'
          else return 'svg-map__location'
        }} /> */}
        <Routes>
          <Route path=":location" sta element={<Location />} />
          {/* <Route path="dm" element={<DirectMessage />} /> */}
        </Routes>
        {/* <Link to={'/world/japan'} state={{ location: modalArr }}>
          japan
        </Link> */}
        {array ? (
          <SVGMap
            map={array}
            className="svg-map"
            locationClassName="svg-map__location_world"
            onLocationClick={onLocationClick}
          />
        ) : (
          'Loading'
        )}
        {/* {isModal && (
          <Modal>
            <SVGMap
              map={modalArr}
              className="svg-map_world"
              locationClassName="svg-map__location_world"
              onLocationClick={onLocationClick}
            />
          </Modal>
        )} */}
      </Box>
    </Container>
  );
}
export default World;
