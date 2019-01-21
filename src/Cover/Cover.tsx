import * as React from 'react';
import Button from 'buildo-react-components/lib/Button';
// import MailchimpForm from 'MailchimpForm/MailchimpForm';

require('./cover.css');
const logo = require('../assets/logo.png');

type Props = {
  onArrowClick: () => void;
};

export default class Cover extends React.Component<Props> {
  onWatchVideosClick = () => window.open('https://vimeo.com/channels/scalaitaly2018');

  onTicketClick = () => window.open('https://www.eventbrite.it/e/scala-italy-2018-tickets-44719683778');

  render() {
    const { onArrowClick } = this.props;
    return (
      <div className="cover-page">
        <img className="logo" src={logo} />
        <h1>The Italian conference on Scala</h1>
        <h3>Florence, September 14th-15th, 2018</h3>
        <Button
          buttonState="ready"
          className="action-button ticket-button"
          label="Watch the videos!"
          onClick={this.onWatchVideosClick}
        />
        <div className="arrow bounce" onClick={onArrowClick} />
      </div>
    );
  }
}

// tslint:disable:max-line-length
/* <MailchimpForm title='Interested?' subtitle="Leave your email and we'll keep you posted. No spam, we promise!" />
      <Button
        buttonState="ready"
        className="action-button video-button"
        label="watch the videos"
        onClick={this.onWatchVideosClick}
      /> */
