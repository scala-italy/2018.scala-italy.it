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
  },
  allen: {
    name: 'Jamie Allen',
    company: 'Lightbend',
    pictureUrl: require('assets/images/speakers/allen.jpg'),
    color: '#799100',
    bio: (
      <div>
        <p>
          Jamie Allen is the Senior Director of Strategic Enablement Services for Typesafe, responsible for the enablement of customers around the world through consulting and training.
        </p>
        <p>
          He is the author of Effective Akka (O’Reilly), and the co-author of the upcoming Reactive Design Patterns (Manning).
        </p>
        <p>
          Jamie is a computer languages enthusiast who enjoys writing performant code that most efficiently leverages the resources at hand.
        </p>
      </div>
    )
  },
  delafargue: {
    name: 'Clement Delafargue',
    company: 'Clever Cloud',
    pictureUrl: require('assets/images/speakers/delafargue.jpg'),
    color: '#C31048',
    bio: <div>CTO @ Clever Cloud. Functional Programmer</div>
  }
};
