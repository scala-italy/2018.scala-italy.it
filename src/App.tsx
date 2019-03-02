import * as React from 'react';
import Cover from './Cover/Cover';
import Footer from './Footer/Footer';
import CFP from './CFP/CFP';
// import Speakers from './Speakers/Speakers';
import Sponsors from './Sponsors/Sponsors';
import Partners from './Partners/Partners';
// import Venue from './Venue/Venue';
// import Supporters from './Supporters/Supporters';
// import Schedule from './Schedule/Schedule';

require('./App.css');

type State = {
  speakerId?: string | undefined;
};

class App extends React.Component<{}, State> {
  state: State = {};

  componentDidMount() {
    const speakerId = window.location.pathname.replace('/speakers/', '').replace('/', '');
    if (speakerId !== '') {
      this.setState({ speakerId });
    }
  }

  onArrowClick = () => (window as any).bringIntoView(document.querySelector('.cfp'), 1000);

  onSpeakerClick = (name: string) => {
    history.pushState({}, undefined, `/speakers/${name}`);
    this.setState({ speakerId: name });
  }

  onSpeakerModalClose = () => {
    history.pushState({}, undefined, '/');
    this.setState({ speakerId: undefined });
  }

  render() {
    // const { speakerId } = this.state;

    return (
      <div className="app">
        <Cover onArrowClick={this.onArrowClick} />
        <CFP />
        <Sponsors />
        {/* <Supporters /> */}
        <Partners />
        {/* <Speakers
          speakerId={speakerId}
          onSpeakerClick={this.onSpeakerClick}
          onSpeakerModalClose={this.onSpeakerModalClose}
        /> */}
        {/* <Schedule />
        <Venue /> */}
        <Footer />
      </div>
    );
  }
}

export default App;

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
