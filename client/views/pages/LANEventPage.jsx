import React from 'react';
import HomePageBase from './HomePageBase';
import FlexBox from '../components/FlexBox';
import Modal from '../components/Modal';
import Button from '../components/Button';
/**
 * DashboardPage for the /dashboard route
 */
const AlignCenter = {
  textAlign: 'center'
};

const LANPage = () => (
  <HomePageBase>
    <Modal>
      <FlexBox direction="row" align="center" height="60%">
        <div>
          <img alt="LAN" src="https://picsum.photos/1725/400" />
          <div>
            <h1 style={AlignCenter}>Jullovslan</h1>
            <p style={AlignCenter}>
              hejeaojsdioajsiodjasoidjasiodjioasjdoiasjdiojdsoidmfiosdmfiosdmfiomsdiofmsdiofmsiodfmoisdmfoisdmfoisdmfosmdofimsdiofm
            </p>
            <p style={AlignCenter}>TOIAJSIODJAOSIDJIOAJDIOJ</p>
            <img alt="LAN" src="https://picsum.photos/300/200" align="right" />
          </div>
          <div>
            <p>Datum: 25:e December</p>
            <p>Plats: Grottan</p>
            <Button>Boka</Button>
          </div>
        </div>
      </FlexBox>
    </Modal>
  </HomePageBase>
);

export default LANPage;
