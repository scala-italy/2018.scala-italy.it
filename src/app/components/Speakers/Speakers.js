import React from 'react';
import { props, pure, skinnable } from 'revenge';
import { FlexView } from 'Basic';
import Speaker from './Speaker';

import geirsson from 'assets/images/speakers/geirsson.jpg';
import kostyukov from 'assets/images/speakers/kostyukov.jpg';
import './speakers.scss';

@pure
@skinnable()
@props({

})
export default class Speakers extends React.Component {

  getLocals() {
    const {
      props: { }
    } = this;

    return {};
  }

  template() {
    return (
      <FlexView className='speakers' hAlignContent='center'>
        <div className='section-name left'>Speakers</div>
        <div className='section-name right'>Speakers</div>
        <FlexView column style={{ maxWidth: 900 }} hAlignContent='center'>
          <h3>SPEAKERS</h3>
          <FlexView hAlignContent='center' wrap>
            <Speaker src={kostyukov} color='#1e9481' name='Vladimir Kostyukov' company='Twitter' />
            <Speaker src={geirsson} color='#b3810d' name='Ólafur Geirsson' company='EPFL' />
          </FlexView>
        </FlexView>
      </FlexView>
    );
  }

}
