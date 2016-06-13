import React from 'react';
import { pure, props, t, skinnable } from 'revenge';
import { FlexView, Button } from 'Basic';
// import MailchimpForm from 'MailchimpForm/MailchimpForm';

import './cover.scss';
import logo from 'assets/images/logo.png';

@pure
@skinnable()
@props({
  onArrowClick: t.Function
})
export default class Cover extends React.Component {

  onWatchVideosClick = () => window.open('https://vimeo.com/channels/scalaitaly2016');

  getLocals() {
    const { onArrowClick } = this.props;

    return { onArrowClick };
  }

  template({ onArrowClick }) {
    return (
      <FlexView className="cover-page" grow auto column hAlignContent="center" vAlignContent="center">
        <div className="logo" src={logo} />
        <h1>The only Italian conference on Scala</h1>
        <h3>Venice, May 14th, 2016</h3>
        <Button buttonState='ready' className='action-button video-button' label='watch the videos' onClick={this.onWatchVideosClick} />
        <div className="arrow bounce" onClick={onArrowClick}/>
      </FlexView>
    );
  }

}
