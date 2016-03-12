import React from 'react';
import { t, props, pure } from 'revenge';
import Cover from 'Cover/Cover';
import Footer from 'Footer/Footer';
import Conference from 'Conference/Conference';
import Cfp from 'CFP/CFP';
// import Speakers from 'Speakers/Speakers';
import Sponsors from 'Sponsors/Sponsors';
import Map from 'Map/Map';
import { FlexView } from 'Basic';

@pure
@props({
  app: t.Object,
  params: t.Object,
  query: t.maybe(t.Object)
})
export default class LandingContainer extends React.Component {

  static contextTypes = {
    router: t.Object
  };

  onArrowClick = () => {
    window.bringIntoView(document.querySelector('.conference'), 500);
  };

  onSpeakerClick = name => this.context.router.push(`/speakers/${name}`);

  onSpeakerModalClose = () => this.context.router.push(`/`);

  render() {
    return (
      <FlexView column>
        <Cover onArrowClick={this.onArrowClick} />
        <Conference />
        {/*<Speakers
          speakerId={this.props.params.speakerName}
          onSpeakerClick={this.onSpeakerClick}
          onSpeakerModalClose={this.onSpeakerModalClose}
        />*/}
        <Cfp />
        <Map />
        <Sponsors />
        <Footer />
      </FlexView>
    );
  }

}

window.bringIntoView_started = 0;
window.bringIntoView_ends = 0;
window.bringIntoView_y = 0;
window.bringIntoView_tick = function() {
  let distanceLeft, dt, duration, t, travel;
  t = Date.now();
  if (t < window.bringIntoView_ends) {
    dt = t - window.bringIntoView_started;
    duration = window.bringIntoView_ends - window.bringIntoView_started;
    distanceLeft = window.bringIntoView_y - document.body.scrollTop;
    travel = distanceLeft * (dt / duration);
    document.body.scrollTop += travel; // eslint-disable-line
    window.requestAnimationFrame(window.bringIntoView_tick);
  } else {
    document.body.scrollTop = window.bringIntoView_y;
  }
};
window.bringIntoView = function(e, duration) {
  window.bringIntoView_started = Date.now();
  window.bringIntoView_ends = window.bringIntoView_started + duration;
  window.bringIntoView_y = Math.min(document.body.scrollTop + e.getBoundingClientRect().top, document.body.scrollHeight - window.innerHeight);
  window.requestAnimationFrame(window.bringIntoView_tick);
};
