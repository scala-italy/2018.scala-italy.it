import * as React from 'react';
import { View } from '../Basic';
import Speaker from './Speaker';
import Modal from 'react-modal';

import { speakers, keynotes, workshops } from './speakerInfo';
import './speakers.scss';

type Props = {
  onSpeakerClick: (id: string) => void;
  speakerId?: string;
  onSpeakerModalClose: () => void;
};

export default class Speakers extends React.Component<Props> {
  render() {
    const {
      props: { onSpeakerClick, speakerId, onSpeakerModalClose }
    } = this;

    const modalProps: Modal.Props = {
      isOpen: !!speakerId,
      onRequestClose: onSpeakerModalClose,
      style: {
        content: {
          style: { zIndex: 100 }
        }
      }
    };

    const speaker = speakerId && (speakers[speakerId] || keynotes[speakerId] || workshops[speakerId]);

    return (
      <View column className="speakers" hAlignContent="center">
        <div className="section-name left">Speakers</div>
        <div className="section-name right">Speakers</div>
        <View column hAlignContent="center">
          <h3>KEYNOTES</h3>
          <View hAlignContent="center" wrap>
            {Object.keys(keynotes)
              .map(id => ({ ...keynotes[id], id }))
              .map(s => (
                <Speaker
                  key={s.id}
                  src={s.pictureUrl}
                  color={s.color}
                  id={s.id}
                  name={s.name}
                  company={s.company}
                  onClick={onSpeakerClick}
                />
              ))}
          </View>
        </View>
        {/* <View column hAlignContent="center">
          <h3>SPEAKERS</h3>
          <View hAlignContent="center" wrap>
            {Object.keys(speakers)
              .map(id => ({ ...speakers[id], id }))
              .map(s => (
                <Speaker
                  key={s.id}
                  src={s.pictureUrl}
                  color={s.color}
                  id={s.id}
                  name={s.name}
                  company={s.company}
                  onClick={onSpeakerClick}
                />
              ))}
          </View>
        </View>
        <View column hAlignContent="center">
          <h3>WORKSHOPS</h3>
          <View hAlignContent="center" wrap>
            {Object.keys(workshops)
              .map(id => ({ ...workshops[id], id }))
              .map(s => (
                <Speaker
                  key={s.id}
                  src={s.pictureUrl}
                  color={s.color}
                  id={s.id}
                  name={s.name}
                  company={s.company}
                  onClick={onSpeakerClick}
                />
              ))}
          </View>
        </View> */}
        <Modal {...modalProps}>
          <View column hAlignContent="center">
            {speaker &&
              speakerId && (
                <Speaker
                  src={speaker.pictureUrl}
                  id={speakerId}
                  color={speaker.color}
                  name={speaker.name}
                  company={speaker.company}
                />
              )}
            <View className="speaker-bio">{speaker && speaker.bio}</View>
            <h3>{speaker && speaker.talkType === 'workshop' ? 'THE WORKSHOP' : 'THE TALK'}</h3>
            <View className="title">{speaker && speaker.title}</View>
            {speaker &&
              speaker.cospeaker && (
                <View className="co-speaker">
                  Co-presented with&nbsp;<a href={speaker.cospeaker.id}> {speaker.cospeaker.name} </a>
                </View>
              )}
            <View className="abstract">{speaker && speaker.abstract}</View>
          </View>
        </Modal>
      </View>
    );
  }
}
