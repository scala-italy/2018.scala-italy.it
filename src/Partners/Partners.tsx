import * as React from 'react';
import FlexView from 'react-flexview';

import './partners.scss';
// import * as develer from './develer.png';
import buildo from './buildo.png';

export function Partners() {
  return (
    <FlexView column grow className="partners-section" hAlignContent="center">
      <div className="section-name left">Partners</div>
      <div className="section-name right">Partners</div>
      <FlexView column hAlignContent="center">
        <h1>ORGANIZING PARTNERS</h1>
        <FlexView>
          {/* <a href="https://www.develer.com/" target="_blank">
              <img src={develer} />
            </a> */}
          {/* <FlexView basis={50} /> */}
          <a href="https://www.buildo.io" target="_blank">
            <img src={buildo} />
          </a>
        </FlexView>
      </FlexView>
      <FlexView basis={50} />
    </FlexView>
  );
}
