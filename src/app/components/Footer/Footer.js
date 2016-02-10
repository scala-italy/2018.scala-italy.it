import React from 'react';
import { props, pure, skinnable } from 'revenge';
import { FlexView, Button } from 'Basic';

import './footer.scss';

import databizLogo from 'assets/images/databiz.png';

@pure
@skinnable()
@props({ })
export default class Footer extends React.Component {

  onTwitterClick = () => window.open('https://twitter.com/scala-italy', '_blank');

  //TODO: actual url
  onGPlusClick = () => window.open('https://plus.google.com/communities/107201018445276034960', '_blank');

  //TODO: actual url
  onBecomeSponsorClick = () => window.open('', '_blank');

  //TODO: actual url
  onBecomeSpeakerClick = () => window.open('', '_blank');

  getLocals() {
    const {
      onTwitterClick,
      onGPlusClick,
      onBecomeSponsorClick,
      onBecomeSpeakerClick
    } = this;

    return {
      onTwitterClick,
      onGPlusClick,
      onBecomeSponsorClick,
      onBecomeSpeakerClick
    };
  }

  template({ onTwitterClick, onGPlusClick, onBecomeSponsorClick, onBecomeSpeakerClick }) {
    return (
      <FlexView hAlignContent='center' column className='footer' width='100%'>
        <FlexView row>
          <FlexView column grow className='footer-section social'>
            <FlexView>
            Have something to ask, some suggestion or just want to say hello?
            </FlexView>
            <FlexView vAlignContent='center' grow row className='second-row'>
              <FlexView grow>
                <span className='email'>info@scala-italy.it</span>
              </FlexView>
              <FlexView grow>
                <Button className='social-button' onClick={onTwitterClick}>twitter</Button>
              </FlexView>
              <FlexView grow>
                <Button className='social-button' onClick={onGPlusClick}>google+</Button>
              </FlexView>
            </FlexView>
          </FlexView>
          <FlexView column grow className='footer-section sponsors' hAlignContent='center'>
            <h3>SPONSORS</h3>
            <FlexView row shrink className='sponsor-logos'>
              <img src={databizLogo} />
            </FlexView>
            <Button className='action-button' onClick={onBecomeSponsorClick}>become a sponsor</Button>
          </FlexView>
        </FlexView>
        <FlexView row>
          <FlexView grow className='footer-section tickets'>
            <h4>Tickets will be on sale soon!</h4>
          </FlexView>
          <FlexView grow className='footer-section cfp'>
            <FlexView column>
              <h4>We're waiting for you!</h4>
              Submit your proposal for a talk here!
              <Button className='action-button' onClick={onBecomeSpeakerClick}>become a speaker</Button>
            </FlexView>
          </FlexView>
        </FlexView>
      </FlexView>
    );
  }

}
