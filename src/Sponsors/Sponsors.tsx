import * as React from 'react';
import FlexView from 'react-flexview';
import Button from 'buildo-react-components/lib/Button';

import './sponsors.css';
import * as bitrock from './bitrock.png';
import * as unicredit from './unicredit.jpg';
import * as lightbend from './lightbend.png';
import * as signify from './signify.png';
import * as warda from './warda.png';

export default class Sponsors extends React.PureComponent {
  onBecomeSponsorClick = () =>
    window.open('mailto:info@scala-italy.it?subject=Scala%20Italy%20Sponsorship', '_blank')

  render() {
    return (
      <FlexView column grow className="sponsors-section" hAlignContent="center">
        <div className="section-name left">Sponsors</div>
        <div className="section-name right">Sponsors</div>
        <FlexView column hAlignContent="center">
          <h1>SPONSORS</h1>
          <FlexView
            style={{ flexWrap: 'wrap', maxWidth: 1000 }}
            hAlignContent="center"
            width="100%"
            vAlignContent="center"
          >
            <a href="http://bitrock.it" target="_blank">
              <img src={bitrock} />
            </a>
            <FlexView basis={50} />
            <a href="https://www.unicreditgroup.eu" target="_blank">
              <img src={unicredit} />
            </a>
            <FlexView basis={50} />
            <a href="https://www.lightbend.com" target="_blank">
              <img src={lightbend} />
            </a>
            <FlexView basis={50} />
            <a href="https://www.signifytechnology.com/" target="_blank">
              <img src={signify} style={{ height: 180 }} />
            </a>
            <FlexView basis={50} />
            <a href="http://www.warda.it/" target="_blank">
              <img src={warda} style={{ height: 160 }} />
            </a>
          </FlexView>
        </FlexView>
        <FlexView basis={50} />
        <FlexView>
          <Button className="action-button" buttonState="ready" onClick={this.onBecomeSponsorClick}>
            Become a Sponsor
          </Button>
        </FlexView>
      </FlexView>
    );
  }
}
