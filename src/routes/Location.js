import { useSetRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { isDarkAtom, isLocation } from '../atoms';
import { SVGMap, CheckboxSVGMap, RadioSVGMap } from 'react-svg-map';
// import 'react-svg-map/lib/index.css';
import '../styles.css';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  SiHomeassistantcommunitystore,
  SiTwitter,
  SiKakaotalk,
  SiInstagram,
  SiTelegram,
} from 'react-icons/si';
import { IoClose } from 'react-icons/io5';

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
import { useOutletContext, useParams } from 'react-router';

const Container = styled.div`
  padding-top: 100px;
  display: flex;
  justify-content: space-between;
`;

const Box = styled.div`
  width: 100%;
  height: 80vh;
  padding: 1rem 20rem;
  overflow: scroll;
`;

const Modal = styled.div`
  width: 24vw;
  /* height: 54%; */
  background-color: #fff;
  border-radius: 20px;
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  /* transform: translate(0, -50%); */
  padding: 1.25rem 1.25rem 0 1.25rem;
  box-shadow: 1px 1px 1px 1px gray;
`;

const ModalImage = styled.div`
  display: flex;
  width: 100%;
  height: 200px;
  background-color: gray;
  border-radius: 20px;
  box-shadow: 1px 1px 1px 1px gray;
`;

const Label = styled.div`
  width: 100%;
  height: 40px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 1px 1px 1px 1px gray;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
`;

const Button = styled.button`
  width: 45%;
  height: 40px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 1px 1px 1px 1px gray;
  display: flex;
  justify-content: center;
  align-items: center;
  border-width: 0;
  border-style: outset;
  cursor: pointer;
`;

function Location() {
  const { local } = useParams();
  const [modalArr, setModalArr] = useState();
  const [isModal, setIsModal] = useState(false);
  const [selectOb, setSelectOb] = useState();
  const [modalSvg, setModalSvg] = useState();
  const {
    state: { location: props },
  } = useLocation();

  function onLocationClick(event) {
    const {
      target: { ariaLabel: name, id: id },
    } = event;
    console.log(event);
    setSelectOb({ name: name, id: id });
    setIsModal(true);
    // const {
    //   target: { ariaLabel, id },
    // } = event;
    // if (land.filter((e) => e.name === ariaLabel.toLowerCase()).length > 0) {
    //   setIsModal(true);
    //   setModalArr(land.filter((e) => e.name === ariaLabel.toLowerCase())[0].data);
    // } else {
    //   console.log('not found');
    // }
    // // console.log(ariaLabel.toLowerCase())
  }
  console.log(selectOb);

  return (
    <Container>
      <Box>
        {/* <SVGMap map={Tag} locationClassName={(e) => {
          if (e.name === "Busan") return 'svg-map__location__select'
          else return 'svg-map__location'
        }} /> */}
        {props ? (
          <SVGMap
            map={props}
            className="svg-map_world"
            locationClassName={(e) => {
              if (e.name === 'Busan') return 'svg-map__location__select';
              else return 'svg-map__location_world';
            }}
            onLocationClick={onLocationClick}
          />
        ) : (
          'Loading'
        )}
        {isModal && (
          <Modal>
            <ModalImage>
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 793 1032"
                role="none"
                dangerouslySetInnerHTML={{ __html: modalSvg }}
              ></svg> */}
            </ModalImage>
            <Label>{selectOb.name}</Label>
            <Label>owner</Label>
            <Label>
              <div style={{ width: '60%', display: 'flex', justifyContent: 'space-between' }}>
                <SiHomeassistantcommunitystore />
                <SiTwitter />
                <SiKakaotalk />
                <SiInstagram />
                <SiTelegram />
              </div>
            </Label>
            <div style={{ display: 'flex', justifyContent: 'space-between', margin: '1rem 0' }}>
              <Button>cancle</Button>
              {/* 구매 혹은 수정 */}
              <Button>buy</Button>
            </div>
            {/* <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
              <IoClose style={{ cursor: 'pointer' }} />
            </div> */}
          </Modal>
        )}
      </Box>
    </Container>
  );
}
export default Location;
