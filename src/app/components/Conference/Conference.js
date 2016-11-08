import React from 'react';
import { props } from 'tcomb-react';
import { pure, skinnable } from 'revenge';
import { FlexView } from 'Basic';

import './conference.scss';

import martin from 'assets/images/martin.png';

@pure
@skinnable()
@props({ })
export default class Conference extends React.Component {

  getLocals() {
    return {};
  }

  template() {
    return (
      <FlexView className='conference' hAlignContent='center'>
        <div className='section-name light left'>The Conference</div>
        <div className='section-name light right'>The Conference</div>
        <FlexView style={{ maxWidth: 900 }} >
          <FlexView column grow={5}>
            <p>
            Scala Italy is the third edition of the annual Italian conference on the Scala Programming Language.
            </p>
            <p>
              It is brought to you by and for the scala <strong>community</strong>. All conference talks are peer evaluated by members of the community itself.
            </p>
          </FlexView>
          <FlexView grow={1} hAlignContent='right' className='image-wrapper'>
            <img src={martin} />
          </FlexView>
        </FlexView>
      </FlexView>
    );
  }

}
