import React from 'react';
import { props } from 'tcomb-react';
import { pure, skinnable } from 'revenge';
import { FlexView as View } from 'Basic';

import './schedule.scss';

@pure
@skinnable()
@props({})
export default class Schedule extends React.Component {

  getLocals() {
    return this.props;
  }

  template() {
    return (
      <View column className='schedule' hAlignContent='center' style={{ position: 'relative' }}>
        <div className='section-name left'>Schedule</div>
        <div className='section-name right'>Schedule</div>
        <h3>SCHEDULE</h3>
        <table>
          <tr>
            <td />
            <td colSpan={2} className='track-a-title'>TRACK A</td>
          </tr>
          <tr>
            <td className='time'>09:30 - 10:00</td>
            <td colSpan={2} className='talk track-a'>
              Opening speech and introduction
            </td>
          </tr>
          <tr>
            <td className='time'>10:00 - 10:55</td>
            <td colSpan={2} className='talk track-a'>
              <a href='#/speakers/allen'>
                <div>Jamie Allen</div>
                <div>Reactive Microservices</div>
              </a>
            </td>
          </tr>
          <tr>
            <td />
            <td colSpan='2' style={{ textAlign: 'center' }}>
              BREAK
            </td>
          </tr>
          <tr>
            <td className='time'>11:10 - 11:55</td>
            <td colSpan={2} className='talk track-a'>
              <a href='#/speakers/delafargue'>
                <div>Clement Delafargue</div>
                <div>Functional patterns for Scala beginners</div>
              </a>
            </td>
          </tr>
          <tr>
            <td className='time'>12:00 - 12:45</td>
            <td colSpan={2} className='talk track-a'>
              <a href='#/speakers/geirsson'>
                <div>Olafur Geirsson</div>
                <div>Automatic, opinionated code formatting with scalafmt</div>
              </a>
            </td>
          </tr>
          <tr>
            <td />
            <td colSpan='2'>
              LUNCH
            </td>
          </tr>
          <tr>
            <td />
            <td className='track-a-title'>TRACK A</td>
            <td className='track-b-title'>TRACK B</td>
          </tr>
          <tr>
            <td className='time'>14:00 - 14:45</td>
            <td className='talk track-a'>
              <a href='#/speakers/ballin'>
                <div>Gioia Ballin / Simone Fabiano</div>
                <div>A dive into Akka Streams: from the basics to a real-world scenario</div>
              </a>
            </td>
            <td className='talk track-b'>
              <a href='#/speakers/mcgonigle'>
                <div>Seamus Mc Gonigle</div>
                <div>Reconciling Functional Programming and Exceptions</div>
              </a>
            </td>
          </tr>
          <tr>
            <td className='time'>14:50 - 15:35</td>
            <td className='talk track-a'>
              <a href='#/speakers/akhter'>
                <div>Adil Akhter</div>
                <div>Functional Stream Processing with Scala</div>
              </a>
            </td>
            <td className='talk track-b'>
              <a href='#/speakers/szulc'>
                <div>Pawel Szulc</div>
                <div>Real-World Gobbledygook</div>
              </a>
            </td>
          </tr>
          <tr>
            <td />
            <td colSpan='2' style={{ textAlign: 'center' }}>
              BREAK
            </td>
          </tr>
          <tr>
            <td className='time'>15:50 - 16:35</td>
            <td className='talk track-a'>
              <a href='#/speakers/bessi'>
                <div>Andrea Bessi / Emanuele Bezzi</div>
                <div>Deep Learning with Apache Spark: an Introduction</div>
              </a>
              <td className='talk track-b'>
                <a href='#/speakers/vacchi'>
                  <div>Edoardo Vacchi</div>
                  <div>Be Like Water — A Shapeless Primer</div>
                </a>
              </td>
            </td>
          </tr>
          <tr>
            <td className='time'>16:40 - 17:25</td>
            <td className='talk track-a'>
              <a href='#/speakers/petronella'>
                <div>Gabriele Petronella</div>
                <div>Monad Transformers: just, why?</div>
              </a>
            </td>
            <td className='talk track-b'>
              <a href='#/speakers/ratajski'>
                <div>Jarek Ratajski</div>
                <div>ScalaJS – web without pain of JavaScript</div>
              </a>
            </td>
          </tr>
        </table>
      </View>
    );
  }
}
