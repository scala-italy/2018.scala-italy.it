import React from 'react';
import { props, pure, skinnable } from 'revenge';
import { FlexView, Button }  from 'Basic';

import './footer.scss';

import buildo from 'assets/images/buildo.png';
import databiz from 'assets/images/databiz_white.png';
import sugMilano from 'assets/images/sug-milano.png';
import sugTreviso from 'assets/images/sug-lagoon.jpg';
import jugRoma from 'assets/images/jug-roma.jpg';
import jugPadova from 'assets/images/jug-padova.jpg';
import programmersPadua from 'assets/images/pip.png';

@pure
@skinnable()
@props({ })
export default class Footer extends React.Component {

  onTwitterClick = () => window.open('https://twitter.com/scalaitaly', '_blank');

  onGPlusClick = () => window.open('https://plus.google.com/communities/107201018445276034960', '_blank');

  onGetTicketsClick = () => window.open('https://ti.to/scala-italy/2016', '_blank');

  getLocals() {
    const {
      onTwitterClick,
      onGPlusClick
    } = this;

    return {
      onTwitterClick,
      onGPlusClick
    };
  }

  template({ onTwitterClick, onGPlusClick }) {
    return (
      <FlexView hAlignContent='center' column className='footer' width='100%'>
        <FlexView row width='100%'>
          <FlexView column grow className='footer-section social'>
            <FlexView>
              Have something to ask, some suggestion or just want to say hello?
            </FlexView>
            <FlexView auto vAlignContent='center' grow row className='second-row' wrap>
              <FlexView grow={5} auto>
                <span className='email'>info@scala-italy.it</span>
              </FlexView>
              <FlexView grow={1} auto>
                <Button icon='twitter' buttonState='ready' className='social-button' onClick={onTwitterClick}>
                  twitter
                </Button>
              </FlexView>
              <FlexView grow={1} auto>
                <Button icon='google-plus' buttonState='ready' className='social-button' onClick={onGPlusClick}>
                  google+
                </Button>
              </FlexView>
            </FlexView>
          </FlexView>
          <FlexView column grow className='footer-section tickets' hAlignContent='center' vAlignContent='center'>
            <h3>TICKETS</h3>
            <Button buttonState='ready' className='action-button ticket-button' label='get your tickets' onClick={this.onGetTicketsClick} />
          </FlexView>
        </FlexView>
        <FlexView row width='100%'>
          <FlexView column grow className='footer-section partners' hAlignContent='center'>
            <h3>PARTNERS</h3>
            <FlexView row shrink wrap className='partners-logos' hAlignContent='center' vAlignContent='center'>
              <a href='http://databiz.it' target='_blank'><img src={databiz} style={{ maxWidth: 210 }}/></a>
              <a href='http://buildo.io' target='_blank'><img src={buildo} /></a>
              <a href='http://www.meetup.com/milano-scala-group/' target='_blank'><img src={sugMilano} /></a>
              <a href='http://www.meetup.com/it-IT/Scala-by-the-Lagoon/' target='_blank'><img src={sugTreviso} /></a>
              <a href='https://groups.yahoo.com/neo/groups/jug-roma/info' target='_blank'><img src={jugRoma} /></a>
              <a href='http://www.jugpadova.it/' target='_blank'><img src={jugPadova} /></a>
              <a href='https://www.facebook.com/groups/programmersinpadua/' target='_blank'><img src={programmersPadua} /></a>
            </FlexView>
          </FlexView>
        </FlexView>
        <FlexView className='bottom-line' width='100%' hAlignContent='center' vAlignContent='center'>
          @ 2016 Implicitaly Srlsu
        </FlexView>
      </FlexView>
    );
  }

}
