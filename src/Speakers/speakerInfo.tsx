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
  sabin: {
    name: 'Miles Sabin',
    company: 'Underscore',
    title: 'Adding kind-polymorphism to the Scala programming language',
    pictureUrl: require('../assets/speakers/sabin.jpg'),
    color: palette.purple,
    abstract: (
      <div>
        <p>
          What sort of primitive mechanisms should we choose to support shapeless-style generic
          programming directly in Scala? I say Kind-polymorphism!
        </p>
        <p>
          I will demonstrate this in the Typelevel compiler and show how it can be used to
          dramatically simplify generic programming in Scala.
        </p>
      </div>
    ),
    bio: (
      <div>
        <p>
          Miles has been doing stuff with Scala for more than a decade, currently with Underscore
          Consulting.{' '}
        </p>
        <p>
          He is a cofounder of Typelevel and his best known project, the Scala generic programming
          library shapeless, is the weapon of choice wherever boilerplate needs to be scrapped or
          arities abstracted over.
        </p>
      </div>
    )
  },
  rzeznicki: {
    name: 'Marcin Rzeźnicki',
    company: 'Iterators',
    title: 'Idris for (im)practical Scala programmers',
    pictureUrl: require('../assets/speakers/rzeznicki.png'),
    color: palette.green,
    abstract: (
      <div>
        <p>
          If you want to know how to achieve this:
          <pre>
            <code>scala> val v = 1 :: 2 :: NIL</code>
          </pre>
          <pre>
            <code>scala> v.tail.tail.head</code>
          </pre>
          <pre>
            <code>:13: error:</code>
          </pre>
          in Scala, or how to make type of <code>printf "%s = %d"</code> to be precisely{' '}
          <code>String -> Int -> String</code>, come to my talk (I'll also show when it won't work)
        </p>
      </div>
    ),
    bio: (
      <div>
        <p>
          I'm a senior software engineer at Iterators, disguised under a self-proclaimed title of
          Scala Tiger (or Scala Kitten), sometimes also known as Scala Animal.
        </p>
        <p>
          I have been in this business for ca. 10 years, mostly filled with immense displeasure of
          working in C#, Java or Ruby until I witnessed the advent of FP in the industry and
          regained the knowledge I'd lost leaving academia halls.
        </p>
        <p>
          Embracing Scala helped me to become born-again programmer, type system theorist and
          category theory hobbyist.
        </p>
        <p>
          I gave talks at Krakow Scala User Group, Chamberconf, Scalapolis, ScalaWAW, Lambda Days,
          Scala UA on subjects like: Kleisli arrows, category theory and Free monads. My coworkers
          wrote about me: "Don't let Marcin start talking about type systems… He is an expert using
          Scala to build most composable and concise business logic for our partners. " but I find
          it to be unfounded hype.
        </p>
        <p>
          I'm also the main author of open-source library called kebs:{' '}
          <a href="https://github.com/theiterators/kebs" target="blank">
            https://github.com/theiterators/kebs
          </a>
        </p>
      </div>
    )
  },
  labella: {
    name: 'Fabio Labella',
    company: 'NCR Corporation',
    title: 'Shared state in pure FP: when a state monad won\'t do',
    pictureUrl: require('../assets/speakers/labella.jpeg'),
    color: palette.brown,
    abstract: (
      <div>
        <p>
          A shared cache, a concurrent counter, a mutable DB connection: they are all common
          concerns in real-world applications that don’t fit the state monad model of returning a
          new copy of the state each time. Does this mean we should drop pure FP in those cases? Of
          course not!
        </p>

        <p>
          This talk will show how mutable, shared, concurrent state is not only possible, but very
          simple in pure FP, whilst remaining composable and easy to reason about.
        </p>

        <p>
          On one hand, we will see how to put together several concepts such as the IO type,
          Kleisli, and Free/Final Tagless. On the other, we’ll get at the very heart of what purity
          is all about.
        </p>
      </div>
    ),
    bio: (
      <div>
        <p>
          I’m a Senior Software Engineer based in Edinburgh, UK, working in Scala in the financial
          industry.
        </p>
        <p>
          I also actively participate in Open Source (as SystemFw): I’m one of the maintainers of
          fs2 and http4s, and a contributor to cats, shapeless and most of the other libraries in
          the Scala FP ecosystem.
        </p>
        <p>
          {' '}
          I have a passion for helping people master advanced concepts (e.g. see{' '}
          <a href="https://twitter.com/balajisivaraman/status/894976114304499712" target="blank">
            here
          </a>) or{' '}
          <a href="https://twitter.com/etorreborre/status/933344847364313088" target="blank">
            here
          </a>), so hit me up on Gitter if you have a question!
        </p>
      </div>
    )
  }
};
