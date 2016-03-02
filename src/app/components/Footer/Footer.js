import React from 'react';
import { props, pure, skinnable } from 'revenge';
import { FlexView, Button }  from 'Basic';

import './footer.scss';

import buildo from 'assets/images/buildo.png';
import databiz from 'assets/images/databiz_white.png';

@pure
@skinnable()
@props({ })
export default class Footer extends React.Component {

  onTwitterClick = () => window.open('https://twitter.com/scalaitaly', '_blank');

  onGPlusClick = () => window.open('https://plus.google.com/communities/107201018445276034960', '_blank');

  onBecomeSpeakerClick = () => window.open('https://scalaitaly.typeform.com/to/MeZSjq', '_blank');

  getLocals() {
    const {
      onTwitterClick,
      onGPlusClick,
      onBecomeSpeakerClick
    } = this;

    return {
      onTwitterClick,
      onGPlusClick,
      onBecomeSpeakerClick
    };
  }

  template({ onTwitterClick, onGPlusClick, onBecomeSpeakerClick }) {
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
          <FlexView column grow className='footer-section partners' hAlignContent='center'>
            <h3>PARTNERS</h3>
            <FlexView row shrink className='partners-logos' vAlignContent='center'>
              <a href='http://databiz.it' target='_blank'><img src={databiz} style={{ maxWidth: 210 }}/></a>
              <a href='http://buildo.io' target='_blank'><img src={buildo} /></a>
            </FlexView>
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
