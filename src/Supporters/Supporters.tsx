import * as React from 'react';
import FlexView from 'react-flexview/lib';

import './sponsors.scss';
import iterators from './iterators.png';
import scalacenter from './scalacenter.png';
import vodafone from './vodafone.jpg';
import scalatimes from './scalatimes.png';
import manning from './manning.png';
import radicalbit from './radicalbit.png';
import lambdadays from './lambdadays.png';

export default class Supporters extends React.PureComponent {
  render() {
    return (
      <FlexView column grow className="supporters-section" hAlignContent="center">
        <div className="section-name left">Supporters</div>
        <div className="section-name right">Supporters</div>
        <FlexView column hAlignContent="center">
          <h1>SUPPORTERS</h1>
          <FlexView
            style={{ flexWrap: 'wrap', maxWidth: 1000 }}
            hAlignContent="center"
            width="100%"
            vAlignContent="center"
          >
            <a href="https://iterato.rs/" target="_blank">
              <img src={iterators} style={{ height: 90 }} />
            </a>
            <FlexView basis={50} />
            <a href="https://scala.epfl.ch/" target="_blank">
              <img src={scalacenter} style={{ height: 80 }} />
            </a>
            <FlexView basis={50} />
            <a href="https://www.vodafone.it/" target="_blank">
              <img src={vodafone} style={{ height: 80 }} />
            </a>
            <FlexView basis={50} />
            <a href="https://scalatimes.com/" target="_blank">
              <img src={scalatimes} />
            </a>
            <FlexView basis={50} />
            <a href="https://manning.com/" target="_blank">
              <img src={manning} style={{ height: 70 }} />
            </a>
            <FlexView basis={70} />
            <a href="https://radicalbit.io/" target="_blank">
              <img src={radicalbit} style={{ height: 90 }} />
            </a>
            <FlexView basis={70} />
            <a href="http://www.lambdadays.com/" target="_blank">
              <img src={lambdadays} style={{ height: 90 }} />
            </a>
          </FlexView>
        </FlexView>
      </FlexView>
    );
  }
}
