import * as React from 'react';
import { Button, View } from '../Basic';

require('./cfp.css');

export default class CFP extends React.PureComponent {
  onBecomeSpeakerClick = () => window.open('https://www.papercall.io/scala-italy-2019', '_blank');

  render() {
    const { onBecomeSpeakerClick } = this;
    return (
      <View grow className="cfp" hAlignContent="center">
        <View style={{ maxWidth: 900 }} className="wrapper">
          <View column grow width="30%" hAlignContent="center">
            <span className="code-title" />
            <Button className="action-button" buttonState="ready" onClick={onBecomeSpeakerClick}>
              Become a Speaker
            </Button>
          </View>
          <View column grow width="70%" className="cfp-description" marginLeft="30px">
            <h3>Be a speaker at Scala Italy!</h3>
            <p>Submit your talk proposal and come share your knowledge with the community!</p>
            <p />
          </View>
        </View>
      </View>
    );
  }
}
