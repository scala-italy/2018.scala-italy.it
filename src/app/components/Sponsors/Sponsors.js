import React from 'react';
import { props, pure, skinnable } from 'revenge';
import { Button, FlexView } from 'Basic';

import './sponsors.scss';
import databiz from 'assets/images/databiz.png';
import engineering from 'assets/images/engineering.jpg';

@pure
@skinnable()
@props({ })
export default class Sponsors extends React.Component {

  onBecomeSponsorClick = () => window.open('mailto:info@scala-italy.it?subject=Scala%20Italy%20Sponsorship', '_blank');

  getLocals() {
    const {
      onBecomeSponsorClick
    } = this;

    return { onBecomeSponsorClick };
  }

  template({ onBecomeSponsorClick }) {
    return (
      <FlexView column grow auto className='sponsors-section' hAlignContent='center'>
        <div className='section-name left'>Sponsors</div>
        <div className='section-name right'>Sponsors</div>
        <FlexView column hAlignContent='center'>
          <h2>Sponsors</h2>
          <h4>Platinum</h4>
          <FlexView>
            <a href='http://databiz.it' target='_blank'><img src={databiz} /></a>
          </FlexView>
          <FlexView height={50} />
          <h4>Silver</h4>
          <FlexView>
            <a href='http://www.eng.it' target='_blank'><img src={engineering} /></a>
          </FlexView>
        </FlexView>
        <FlexView basis={50} />
        <FlexView>
          <Button className='action-button' buttonState='ready' onClick={onBecomeSponsorClick}>
            Become a Sponsor
          </Button>
        </FlexView>
      </FlexView>
    );
  }

}
