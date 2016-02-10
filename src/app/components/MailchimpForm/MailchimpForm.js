import React from 'react';
import { t, props } from 'revenge';

import './mailchimpForm.scss';

@props({
  style: t.maybe(t.Object),
  title: t.maybe(t.String),
  subtitle: t.maybe(t.String),
  buttonTitle: t.maybe(t.String)
})
export default class MailchimpForm extends React.Component {

  static defaultProps = {
    title: '',
    buttonTitle: 'Subscribe'
  };

  mailchimpGeneratedForm = () => `
    <div>
      <form action="//scala-italy.us10.list-manage.com/subscribe/post?u=bd47f4303f207958b0a0d6ed2&amp;id=a72dbaebac" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
        <div style="text-align: center">
    <h2>${this.props.title}</h2>
    <h3>${this.props.subtitle}</h3>
    <div class="mc-field-group">
      <input style='width: 300px; margin: auto' placeholder='email@example.com' type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
      <input type="submit" value="${this.props.buttonTitle}" name="subscribe" class="action-button">
    </div>
      <div id="mce-responses">
        <div class="response" id="mce-error-response" style="display:none"></div>
        <div class="response" id="mce-success-response" style="display:none"></div>
      </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
      <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_38670aab56cc45548cc38522e_d545faadcb" tabindex="-1" value=""></div>
        </div>
    </form>
    </div>
  `;

  render() {
    return (
      <div
        style={this.props.style}
        className="mailchimp-form"
        dangerouslySetInnerHTML={{ __html: this.mailchimpGeneratedForm() }}
      />
    );
  }
}
