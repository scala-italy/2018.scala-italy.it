import * as React from 'react';
import FlexView from 'react-flexview/lib';

import './sponsors.css';
import * as iterators from './iterators.png';

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
          </FlexView>
        </FlexView>
      </FlexView>
    );
  }
}
