import React from 'react';
import { props, t, pure, skinnable } from 'revenge';
import { FlexView } from 'Basic';

import './speaker.scss';

@pure
@skinnable()
@props({
  src: t.String,
  color: t.String,
  name: t.String,
  company: t.String
})
export default class Speaker extends React.Component {

  getLocals() {
    const {
      props: { src, color, name, company }
    } = this;

    return { src, color, name, company };
  }

  template({ src, color, name, company }) {
    return (
      <FlexView column hAlignContent='center' className={`speaker`}>
        <div className='image-container'>
          <div className='frame-1' style={{ borderColor: color }} />
          <div className='frame-2' style={{ borderColor: color }} />
          <img src={src} />
          <div className='overlay' style={{ backgroundColor: color }} />
        </div>
        <FlexView className='speaker-name' >
          {name}
        </FlexView>
        <FlexView className='speaker-company'>
          {company}
        </FlexView>
      </FlexView>
    );
  }

}
