import React from 'react';

export const speakers = {
  kostyukov: {
    name: 'Vladimir Kostyukov',
    company: 'Twitter',
    pictureUrl: require('assets/images/speakers/kostyukov.jpg'),
    color: '#1e9481',
    twitter: 'vkostyukov',
    bio: (
      <div>
        <p>
          Vladimir started his software engineering career working on compilers and virtual machines at Intel.
        </p>
        <p>
          After several years of writing C++, he decided to switch camps and joined the Finagle team at Twitter.
        </p>
      </div>
    )
  },
  geirsson: {
    name: 'Ólafur Geirsson',
    company: 'EPFL',
    pictureUrl: require('assets/images/speakers/geirsson.jpg'),
    color: '#b3810d',
    twitter: 'olafurpg',
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
          Ólafur blogs at <a href='http://geirsson.com' target='_blank'>geirsson.com</a>.
        </p>
      </div>
    )
  }
};
