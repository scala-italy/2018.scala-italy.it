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

  onGetTicketsClick = () => window.open('https://ti.to/scala-italy/2016', '_blank');

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
        <Button buttonState='ready' className='action-button ticket-button' label='get your tickets' onClick={this.onGetTicketsClick} />
        {/*<MailchimpForm
          title="Interested?"
          subtitle="Leave your email and we'll keep you posted"
          buttonTitle="Keep me posted"
        />*/}
        <div className="arrow bounce" onClick={onArrowClick}/>
      </FlexView>
    );
  }

}
