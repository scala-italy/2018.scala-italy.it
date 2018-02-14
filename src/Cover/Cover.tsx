import * as React from 'react';
// import Button from 'buildo-react-components/lib/button';
// import MailchimpForm from 'MailchimpForm/MailchimpForm';

require('./cover.css');
const logo = require('../assets/logo.png');

type Props = {
  onArrowClick: () => void;
};

export default class Cover extends React.Component<Props> {
  onWatchVideosClick = () =>
    window.open('https://vimeo.com/channels/scalaitaly2017')

  onTicketClick = () => window.open('https://ti.to/scala-italy/2017');

  render() {
    // const { onArrowClick } = this.props;
    return (
      <div className="cover-page">
        <img className="logo" src={logo} />
        <h1>The Italian conference on Scala</h1>
        <h3>Florence, September 14th-15th, 2018</h3>
        {/* <div className="arrow bounce" onClick={onArrowClick} /> */}
      </div>
    );
  }
}

      // tslint:disable:max-line-length
      /* <MailchimpForm title='Interested?' subtitle="Leave your email and we'll keep you posted. No spam, we promise!" />
      <Button buttonState='ready' className='action-button ticket-button' label='Get your ticket!' onClick={this.onTicketClick} />
      <Button
        buttonState="ready"
        className="action-button video-button"
        label="watch the videos"
        onClick={this.onWatchVideosClick}
      /> */
