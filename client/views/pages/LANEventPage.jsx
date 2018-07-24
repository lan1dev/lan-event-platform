import React from 'react';
import HomePageBase from './HomePageBase';
import FlexBox from '../components/FlexBox';
import Modal from '../components/Modal';
import Button from '../components/Button';
/**
 * DashboardPage for the /dashboard route
 */
const LANPage = () => (
  <HomePageBase>
    <Modal>
      <FlexBox direction="row" align="center" height="60%">
        <div>
          <img alt="LAN" src="https://picsum.photos/1725/400" />
          <div align="center">
            <h1>Jullovslan</h1>
            <img alt="LAN" src="https://picsum.photos/300/200" align="right" />
            <p>
              hejeaojsdioajsiodjasoidjasiodjioasjdoiasjdiojdsoidmfiosdmfiosdmfiomsdiofmsdiofmsiodfmoisdmfoisdmfoisdmfosmdofimsdiofm
            </p>
            <p>TOIAJSIODJAOSIDJIOAJDIOJ</p>
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
