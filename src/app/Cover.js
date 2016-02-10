import React from 'react';
import { pure, props, skinnable } from 'revenge';
import { FlexView } from 'Basic';
import MailchimpForm from 'MailchimpForm/MailchimpForm';

import './cover.scss';

@pure
@skinnable()
@props({ })
export default class Cover extends React.Component {

  getLocals() {
    return {};
  }

  template() {
    return (
      <FlexView className="cover-page" grow auto column hAlignContent="center" vAlignContent="center">
        <div className="logo" src="../../assets/images/logo.png" />
        <h1>The only Italian conference on Scala</h1>
        <h3>Rome, May 27th, 2016</h3>
        { /* <Button className='get-ticket' label='get your ticket' /> */ }
        <MailchimpForm
          title="Interested?"
          subtitle="Leave your email and we'll keep you posted"
          buttonTitle="Keep me posted"
        />
      </FlexView>
    );
  }

}