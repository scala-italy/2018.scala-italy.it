import * as React from 'react';
import { View } from '../Basic';
import cx from 'classnames';

import './speaker.scss';

type Props = {
  src: string;
  color?: string;
  id: string;
  name: string;
  company: string;
  onClick?: (speakerId: string) => void;
};

export default class Speaker extends React.Component<Props> {

  static defaultProps = {
    color: 'transparent'
  };

  onClick = () => this.props.onClick && this.props.onClick(this.props.id);

  render() {
    const {
      onClick,
      props: { src, color, name, company }
    } = this;

    const dynamic = !!this.props.onClick;

    return (
      <View
        column
        hAlignContent="center"
        className={cx({ speaker: true, dynamic })}
        onClick={onClick}
      >
        <div className="image-container">
          <div className="frame-1" style={{ borderColor: color }} />
          <div className="frame-2" style={{ borderColor: color }} />
          <img src={src} />
          <div className="overlay" style={{ backgroundColor: dynamic ? color : 'transparent' }} />
        </div>
        <View className="speaker-name">{name}</View>
        <View className="speaker-company">{company}</View>
      </View>
    );
  }
}
