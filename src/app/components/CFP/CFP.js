import React from 'react';
import { props, pure, skinnable } from 'revenge';
import { Button, FlexView } from 'Basic';

import './cfp.scss';

@pure
@skinnable()
@props({ })
export default class CFP extends React.Component {

  onBecomeSpeakerClick = () => window.open('https://scalaitaly.typeform.com/to/MeZSjq', '_blank');

  getLocals() {
    const {
      onBecomeSpeakerClick
    } = this;

    return { onBecomeSpeakerClick };
  }

  template({ onBecomeSpeakerClick }) {
    return (
      <FlexView row grow auto className='cfp' hAlignContent='center'>
        <div className='section-name left'>Become a speaker</div>
        <div className='section-name right'>Become a speaker</div>
        <FlexView style={{ maxWidth: 900 }} className='wrapper'>
          <FlexView column grow={1} hAlignContent='center'>
            <span className='code-title' />
            <Button className='action-button' buttonState='ready' onClick={onBecomeSpeakerClick}>Become a Speaker</Button>
          </FlexView>
          <FlexView column grow={3} className='cfp-description'>
            <h3>Come give a talk at Scala Italy!</h3>
            <p>
              Submit your proposal by <strong>April 3rd</strong> and come sharing your knowledge with the community!
            </p>
          </FlexView>
        </FlexView>
      </FlexView>
    );
  }

}
