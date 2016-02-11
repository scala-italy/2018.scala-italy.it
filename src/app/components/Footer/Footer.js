import React from 'react';
import { props, pure, skinnable } from 'revenge';
import { FlexView, Button }  from 'Basic';

import './footer.scss';

// import databizLogo from 'assets/images/databiz.png';

@pure
@skinnable()
@props({ })
export default class Footer extends React.Component {

  onTwitterClick = () => window.open('https://twitter.com/scalaitaly', '_blank');

  //TODO: actual url
  onGPlusClick = () => window.open('https://plus.google.com/communities/107201018445276034960', '_blank');

  //TODO: actual url
  onBecomeSponsorClick = () => window.open('mailto:info@scala-italy.it?subject=Scala%20Italy%20Sponsorship', '_blank');

  //TODO: actual url
  onBecomeSpeakerClick = () => window.open('https://scalaitaly.typeform.com/to/MeZSjq', '_blank');

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
        <FlexView row width='100%'>
          <FlexView column grow className='footer-section social'>
            <FlexView>
            Have something to ask, some suggestion or just want to say hello?
            </FlexView>
            <FlexView auto vAlignContent='center' grow row className='second-row' wrap>
              <FlexView grow={5} auto>
                <span className='email'>info@scala-italy.it</span>
              </FlexView>
              <FlexView grow={1} auto>
                <Button icon='twitter' buttonState='ready' className='social-button' onClick={onTwitterClick}>
                twitter
                </Button>
              </FlexView>
              <FlexView grow={1} auto>
                <Button icon='google-plus' buttonState='ready' className='social-button' onClick={onGPlusClick}>
                google+
                </Button>
              </FlexView>
            </FlexView>
          </FlexView>
          <FlexView column grow className='footer-section sponsors' hAlignContent='center'>
            <h3>SPONSORS</h3>
            <FlexView row shrink className='sponsor-logos' />
            <Button className='action-button' buttonState='ready' onClick={onBecomeSponsorClick}>become a sponsor</Button>
          </FlexView>
        </FlexView>
        <FlexView row width='100%'>
          <FlexView grow className='footer-section tickets' hAlignContent='center' vAlignContent='center'>
            <h4>Tickets will be on sale soon!</h4>
          </FlexView>
          <FlexView column grow hAlignContent='center' className='footer-section become-speaker'>
            <h4>We're waiting for you!</h4>
            Submit your proposal for a talk here!
            <Button buttonState='ready' className='action-button' onClick={onBecomeSpeakerClick}>become a speaker</Button>
          </FlexView>
        </FlexView>
        <FlexView className='bottom-line' width='100%' hAlignContent='center' vAlignContent='center'>
          @ 2016 ImplicItaly Srl
        </FlexView>
      </FlexView>
    );
  }

}
