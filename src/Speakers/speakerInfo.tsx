import * as React from 'react';

// tslint:disable:max-line-length
// tslint:disable:jsx-wrap-multiline

const palette = {
  brown: '#B3810D',
  green: '#799100',
  purple: '#C31048'
};

export const keynotes = {
  klang: {
    name: 'Viktor Klang',
    company: 'Lightbend',
    pictureUrl: require('../assets/speakers/klang.png'),
    color: palette.brown,
    bio: (
      <div>
        <p>Viktor Klang is the Deputy CTO at Lightbend.</p>
        <p>
          He’s known as a problem solver, software developer, prolific contributor to the Akka
          project, Akka tech lead emeritus, founding member of the Reactive Streams Special Interest
          Group, and contributor to the Scala Standard Library concurrency APIs.
        </p>
      </div>
    ),
    title: 'To be announced!',
    abstract: <div />
  }
};

export const speakers = {
  dotta: {
    name: 'Mirco Dotta',
    company: 'Triplequote',
    pictureUrl: require('../assets/speakers/dotta.jpg'),
    color: palette.green,
    bio: (
      <div>
        <p>
          Co-founder of Triplequote, the company behind Hydra: the world’s only parallel Scala
          compiler.
        </p>
        <p>
          Mirco has 10+ year experience with Scala, and he has contributed to several open source
          projects including Lagom, Playframework, Scala IDE for Eclipse, and the Scala language.
        </p>
        <p>
          Before founding his own company, he worked at Lightbend (formerly Typesafe), where he wore
          different hats: from engineering, to consulting, and, fun fact, even sales!
        </p>
        <p>He is a certified Lightbend trainer for Akka, Playframework, and Scala.</p>
        <p>
          He loves meeting people and sharing experiences. In his freetime, he plays chess and
          studies wine - both theory and practice!
        </p>
      </div>
    ),
    title: 'Effective Scala: Reloaded!',
    abstract: (
      <div>
        <p>Everything you always wanted to know about Scala but were afraid to ask.</p>
        <p>
          If you want to be able to optimize your use of the Scala programming language to solve
          real world problems without explosions, broken thumbs or bullet wounds then this is the
          session for you.
        </p>
      </div>
    )
  },
  seeberger: {
    name: 'Heiko Seeberger',
    company: '',
    title: 'Farewell Any => Unit, welcome Akka Typed!',
    pictureUrl: require('../assets/speakers/seeberger.jpg'),
    color: palette.purple,
    abstract: (
      <div>
        <p>
          You know Akka? Then you certainly also know about its current main weakness: actors are
          untyped. But with Akka Typed this is going to change!
        </p>
        <p>
          In this talk we introduce its API, discuss differences between the “old and new” world and
          show options for migration and integration.
        </p>
      </div>
    ),
    bio: (
      <div>
        <p>
          Heiko Seeberger loves rock climbing and is an internationally renowned expert on Scala,
          Akka and Functional Programming.
        </p>
        <p>
          He has more than twenty years of experience in software engineering, consulting and
          training and is an active open source contributor.
        </p>
        <p>
          Heiko works as an independent consultant and regularly shares his knowledge at conferences
          and user group meetings.
        </p>
        <p>
          He tweets under{' '}
          <a href="https://twitter.com/@hseeberger" target="_blank">
            @hseeberger
          </a>{' '}
          and blogs under{' '}
          <a href="https://heikoseeberger.rocks" target="_blank">
            heikoseeberger.rocks
          </a>.
        </p>
      </div>
    )
  }
};
