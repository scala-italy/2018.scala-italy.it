import * as React from 'react';
import { useState, useCallback, useEffect } from 'react';
import { Cover } from './Cover/Cover';
import { Footer } from './Footer/Footer';
import { CFP } from './CFP/CFP';
import { Sponsors } from './Sponsors/Sponsors';
import { Partners } from './Partners/Partners';
import { Speakers } from './Speakers/Speakers';

import './App.scss';

export function App() {
  const [speakerId, setSpeakerId] = useState<string | undefined>('');

  useEffect(() => {
    const speakerId = window.location.pathname.replace('/speakers/', '').replace('/', '');
    if (speakerId !== '') {
      setSpeakerId(speakerId);
    }
  });

  const onSpeakerClick = useCallback(
    (name: string) => {
      history.pushState({}, '', `/speakers/${name}`);
      setSpeakerId(name);
    },
    [speakerId]
  );

  function onSpeakerModalClose() {
    history.pushState({}, '', '/');
    setSpeakerId(undefined);
  }

  return (
    <div className="app">
      <Cover />
      <CFP />
      <Speakers
        speakerId={speakerId}
        onSpeakerClick={onSpeakerClick}
        onSpeakerModalClose={onSpeakerModalClose}
      />
      <Sponsors />
      {/* <Supporters /> */}
      <Partners />
      {/* <Schedule />
        <Venue /> */}
      <Footer />
    </div>
  );
}

// tslint:disable:no-string-literal
window['bringIntoView_started'] = 0;
window['bringIntoView_ends'] = 0;
window['bringIntoView_y'] = 0;
window['bringIntoView_tick'] = function() {
  let distanceLeft, dt, duration, travel;
  const t = Date.now();
  if (t < window['bringIntoView_ends']) {
    dt = t - window['bringIntoView_started'];
    duration = window['bringIntoView_ends'] - window['bringIntoView_started'];
    distanceLeft = window['bringIntoView_y'] - document.body.scrollTop;
    travel = distanceLeft * (dt / duration);
    document.body.scrollTop += travel; // eslint-disable-line
    window.requestAnimationFrame(window['bringIntoView_tick']);
  } else {
    document.body.scrollTop = window['bringIntoView_y'];
  }
};
window['bringIntoView'] = function(e: Element, duration: number) {
  window['bringIntoView_started'] = Date.now();
  window['bringIntoView_ends'] = window['bringIntoView_started'] + duration;
  window['bringIntoView_y'] = Math.min(
    document.body.scrollTop + e.getBoundingClientRect().top,
    document.body.scrollHeight - window.innerHeight
  );
  window.requestAnimationFrame(window['bringIntoView_tick']);
};
