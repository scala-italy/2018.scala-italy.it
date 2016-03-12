import React from 'react';

export const speakers = {
  kostyukov: {
    name: 'Vladimir Kostyukov',
    company: 'Twitter',
    pictureUrl: require('assets/images/speakers/kostyukov.jpg'),
    color: '#1e9481',
    bio: 'Foo bar'
  },
  geirsson: {
    name: 'Ólafur Geirsson',
    company: 'EPFL',
    pictureUrl: require('assets/images/speakers/geirsson.jpg'),
    color: '#b3810d',
    bio: (
      <div>
        <p>
          Ólafur is a Master's student at Martin Odersky's lab at EPFL.
        </p>
        <p>
          He has written payroll management systems in Iceland,
          flirted with embedded DSLs in Scala and worked on developer productivity at Google.
        </p>
        <p>
          Ólafur blogs at <a href='geirsson.com'>geirsson.com</a>.
        </p>
      </div>
    )
  }
};
