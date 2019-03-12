import * as React from 'react';
import FlexView from 'react-flexview';
import Button from 'buildo-react-components/lib/Button';

import './sponsors.scss';
import bitrock from './bitrock.png';
import unicredit from './unicredit.jpg';
import vodafone from './vodafone.png';
// import * as lightbend from './lightbend.png';
// import * as signify from './signify.png';
// import * as warda from './warda.png';
// import * as moneyfarm from './moneyfarm.png';
// import * as scalac from './scalac.png';
// import * as avanscoperta from './avanscoperta.png';

const goldSponsors = [
  {
    name: 'vodafone',
    logo: vodafone,
    link: 'https://vodafone.it'
  }
];

const silverSponsors = [
  {
    name: 'bitrock',
    logo: bitrock,
    link: 'https://bitrock.it'
  },
  {
    name: 'unicredit',
    logo: unicredit,
    link: 'https://www.unicreditgroup.eu/'
  }
];

export function Sponsors() {
  function onBecomeSponsorClick() {
    window.open('mailto:info@scala-italy.it?subject=Scala%20Italy%20Sponsorship', '_blank');
  }

  return (
    <FlexView column grow className="sponsors-section" hAlignContent="center">
      <div className="section-name left">Sponsors</div>
      <div className="section-name right">Sponsors</div>
      <FlexView column hAlignContent="center">
        <h1>SPONSORS</h1>
        <h2>GOLD SPONSORS</h2>
        <FlexView
          style={{ flexWrap: 'wrap', maxWidth: 1000 }}
          hAlignContent="center"
          width="100%"
          vAlignContent="center"
        >
          {goldSponsors.map(({ logo, link, name }) => (
            <a key={name} href={link} target="_blank">
              <img className="gold" src={logo} />
            </a>
          ))}
        </FlexView>
        <FlexView basis={50} />
        <h2>SILVER SPONSORS</h2>
        <FlexView
          style={{ flexWrap: 'wrap', maxWidth: 1000 }}
          hAlignContent="center"
          width="100%"
          vAlignContent="center"
        >
          {silverSponsors.map(({ logo, link, name }) => (
            <a key={name} href={link} target="_blank">
              <img className="silver" src={logo} height={20} />
            </a>
          ))}
        </FlexView>
      </FlexView>
      <FlexView basis={50} />
      <FlexView>
        <Button className="action-button" buttonState="ready" onClick={onBecomeSponsorClick}>
          Become a Sponsor
        </Button>
      </FlexView>
    </FlexView>
  );
}
