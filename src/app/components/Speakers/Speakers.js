import React from 'react';
import { props, t, pure, skinnable } from 'revenge';
import { FlexView } from 'Basic';
import Speaker from './Speaker';
import Modal from 'react-modal';

import { speakers } from 'speakers';
import './speakers.scss';

@pure
@skinnable()
@props({
  onSpeakerClick: t.Function,
  speakerId: t.maybe(t.String),
  onSpeakerModalClose: t.Function
})
export default class Speakers extends React.Component {

  getLocals() {
    const {
      props: { onSpeakerClick, speakerId, onSpeakerModalClose }
    } = this;

    const modalProps = {
      isOpen: !!speakerId,
      onRequestClose: onSpeakerModalClose,
      style: { zIndex: 100 }
    };

    const speaker = speakers[speakerId];

    return { onSpeakerClick, speakerId, modalProps, speaker };
  }

  template({ onSpeakerClick, speakerId, modalProps, speaker }) {
    return (
      <FlexView className='speakers' hAlignContent='center'>
        <div className='section-name left'>Speakers</div>
        <div className='section-name right'>Speakers</div>
        <FlexView column hAlignContent='center'>
          <h3>SPEAKERS</h3>
          <FlexView hAlignContent='center' wrap>
            {Object.keys(speakers).map(id => ({ ...speakers[id], id })).map(s => (
              <Speaker src={s.pictureUrl} color={s.color} id={s.id} name={s.name} company={s.company} twitter={s.twitter} onClick={onSpeakerClick} />
            ))}
          </FlexView>
        </FlexView>
        <Modal {...modalProps}>
          <FlexView column hAlignContent='center'>
            {speaker && <Speaker src={speaker.pictureUrl} id={speakerId} color={speaker.color} name={speaker.name} company={speaker.company} twitter={speaker.twitter}/>}
            <FlexView className='speaker-bio'>
              {speaker && speaker.bio}
            </FlexView>
          </FlexView>
        </Modal>
      </FlexView>
    );
  }

}
