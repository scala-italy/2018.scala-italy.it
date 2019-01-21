import * as React from 'react';
import { View } from '../Basic';

import './schedule.css';
import { keynotes, speakers, workshops } from '../Speakers/speakerInfo';

const allSpeakers = { ...keynotes, ...speakers, ...workshops };

// tslint:disable

function ScheduleEntry({ id, id2, colSpan = 1 }: { id: string; id2?: string; colSpan?: number }) {
  const speaker = allSpeakers[id];
  const name = id2 ? `${speaker.name} / ${allSpeakers[id2].name}` : speaker.name;
  return (
    <td colSpan={colSpan} className="talk track-a">
      <a href={`speakers/${id}`}>
        <div>{name}</div>
        <div>{speaker.title}</div>
      </a>
    </td>
  );
}

function WorkshopEntry({ id }: { id: string }) {
  const speaker = allSpeakers[id];
  return (
    <td colSpan={2} rowSpan={2} className="talk track-b">
      <a href={`speakers/${id}`}>
        <div>{speaker.name}</div>
        <div>{speaker.title}</div>
      </a>
    </td>
  );
}

export default class Schedule extends React.PureComponent {
  render() {
    return (
      <View column className="schedule" hAlignContent="center" style={{ position: 'relative' }}>
        <div className="section-name left">Schedule</div>
        <div className="section-name right">Schedule</div>
        <h3 id="schedule">SCHEDULE</h3>
        <table>
          <tbody>
            <tr>
              <td />
              <td colSpan={2}>
                <b>Day 1 - Friday</b>
              </td>
            </tr>
            <tr>
              <td className="time">09:00 - 09:40</td>
              <td colSpan={2} className="talk track-a">
                Registration
              </td>
            </tr>
            <tr>
              <td className="time">09:40 - 10:00</td>
              <td colSpan={2} className="talk track-a">
                Opening speech and introduction
              </td>
            </tr>
            <tr>
              <td className="time">10:00 - 10:45</td>
              <ScheduleEntry colSpan={2} id="miller" />
            </tr>
            <tr>
              <td />
              <td colSpan={2} style={{ textAlign: 'center' }}>
                COFFEE BREAK
              </td>
            </tr>
            <tr>
              <td />
              <td>
                <b>Talks</b>
              </td>
              <td>
                <b>Workshops</b>
              </td>
            </tr>
            <tr>
              <td className="time">11:05 - 11:50</td>
              <ScheduleEntry id="dotta" />
              <WorkshopEntry id="geirsson" />
            </tr>
            <tr>
              <td className="time">11:55 - 12:40</td>
              <ScheduleEntry id="veltri" id2="mascetti" />
            </tr>
            <tr>
              <td />
              <td colSpan={2}>LUNCH</td>
            </tr>
            <tr>
              <td className="time">14:00 - 14:45</td>
              <ScheduleEntry id="tiriticco" />
              <WorkshopEntry id="peruffo" />
            </tr>
            <tr>
              <td className="time">14:50 - 15:35</td>
              <ScheduleEntry id="hupel" />
            </tr>
            <tr>
              <td />
              <td colSpan={2} style={{ textAlign: 'center' }}>
                BREAK
              </td>
            </tr>
            <tr>
              <td className="time">16:00 - 16:45</td>
              <ScheduleEntry colSpan={2} id="rzeznicki" />
            </tr>
            <tr>
              <td className="time">16:50 - 17:35</td>
              <td colSpan={2} className="talk track-a">
                <div>Discussion panel "The Future of Scala"</div>
                <div>Heather Miller - Luka Jacobowitz - Miles Sabin - Mirco Dotta - Ólafur Páll Geirsson</div>
                <div>Moderated by Jon Pretty</div>
              </td>
            </tr>
            <tr>
              <td className="time">21:00</td>
              <td colSpan={2} className="talk track-a">
                Community party at <a
                  href='https://www.google.it/maps/place/Braumeister/@43.7844804,11.2630474,16.66z/data=!4m5!3m4!1s0x132a54181c0fb935:0x3eb43cc06282b7bc!8m2!3d43.7850101!4d11.2636539'
                  target='blank'
                >Braumeister pub</a>
              </td>
            </tr>
            <tr>
              <td />
              <td colSpan={2}>
                <b>Day 2 - Saturday</b>
              </td>
            </tr>
            <tr>
              <td className="time">09:00 - 10:00</td>
              <td colSpan={2} className="talk track-a">
                Registration
              </td>
            </tr>
            <tr>
              <td className="time">10:00 - 10:45</td>
              <ScheduleEntry colSpan={2} id="klang" />
            </tr>
            <tr>
              <td />
              <td colSpan={2} style={{ textAlign: 'center' }}>
                COFFEE BREAK
              </td>
            </tr>
            <tr>
              <td />
              <td>
                <b>Talks</b>
              </td>
              <td>
                <b>Workshops</b>
              </td>
            </tr>
            <tr>
              <td className="time">11:05 - 11:50</td>
              <ScheduleEntry id="pretty" />
              <WorkshopEntry id="cartia" />
            </tr>
            <tr>
              <td className="time">11:55 - 12:40</td>
              <ScheduleEntry id="sabin" />
            </tr>
            <tr>
              <td />
              <td colSpan={2}>LUNCH</td>
            </tr>
            <tr>
              <td className="time">14:00 - 14:45</td>
              <ScheduleEntry id="jones" />
              <WorkshopEntry id="jacobowitz" />
            </tr>
            <tr>
              <td className="time">14:50 - 15:35</td>
              <ScheduleEntry id="andren" />
            </tr>
            <tr>
              <td />
              <td colSpan={2} style={{ textAlign: 'center' }}>
                BREAK
              </td>
            </tr>
            <tr>
              <td className="time">16:00 - 16:45</td>
              <ScheduleEntry colSpan={2} id="labella" />
            </tr>
            <tr>
              <td className="time">16:50 - 17:35</td>
              <ScheduleEntry colSpan={2} id="sfregola" />
            </tr>
          </tbody>
        </table>
      </View>
    );
  }
}
