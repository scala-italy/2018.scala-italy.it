import * as React from 'react';

// tslint:disable:max-line-length
// tslint:disable:jsx-wrap-multiline

const palette = {
  brown: '#B3810D',
  green: '#799100',
  purple: '#C31048'
};

interface Speaker {
  name: string;
  company: string;
  pictureUrl: string;
  color: string;
  title: string;
  bio: JSX.Element;
  abstract: JSX.Element;
  cospeaker?: {
    id: string,
    name: string
  };
  talkType?: 'talk' | 'workshop';
}

type Speakers = { [name: string]: Speaker };

export const keynotes: Speakers = {
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
    title: 'Addressing recent events',
    abstract: (
      <div>
        <p>Is there a possible unification of stream processing a.k.a. Fast Data, and Microservices?</p>
        <p>In this keynote, we’ll explore the problem and outline a possible solution.</p>
      </div>
    )
  },
  miller: {
    name: 'Heather Miller',
    company: 'Scalacenter',
    pictureUrl: require('../assets/speakers/miller.jpeg'),
    color: palette.purple,
    title: 'To be announced',
    abstract: <div />,
    bio: (
      <div>
        <p>Heather Miller is the executive director of the Scala Center at EPFL, where she is a research scientist, and an Assistant Clinical Professor at Northeastern University in Boston.</p>
        <p>She recently completed her PhD in EPFL's Faculty of Computer and Communication Science where she contributed to the now-widespread programming language, Scala. Heather's research interests are at the intersection of data-centric distributed systems and programming languages, with a focus on transferring her research results into industrial use.</p>
        <p>She has also led development of popular MOOCs some 800,000 students strong, such as "Functional Programming Principles in Scala."</p>
      </div>
    )
  }
};

export const speakers: Speakers = {
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
    title: '5 things you need to know about Scala compilation',
    abstract: (
      <div>
        <p>You love Scala, but the one aspect you have a hard time accepting is long compile times.</p>
        <p>It’s not uncommon for a project to experience compilation times of a handful of minutes, if not worse. On top of that, compilation times are unpredictable, depending on a combination of language features, external libraries, and type annotations.</p>
        <p>A single line change may increase compilation times ten-fold!</p>
        <p>We are often ignorant of what makes our Scala project compile so slowly, and this session intends to fill the gap. We will explore 5 common causes leading to long compilation times and, after the session, you’ll finally feel like you have control over your projects’ compile time.</p>
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
    company: 'OVO Energy',
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
  },
  jones: {
    name: 'Nick Jones',
    company: 'Uber',
    pictureUrl: require('../assets/speakers/jones.jpeg'),
    color: palette.green,
    title: '',
    bio: (
      <div>
        <p>Nick Jones is a data scientist on the cash product team at Uber in the Amsterdam office.</p>
        <p>Prior to moving to Amsterdam he worked at Uber HQ in San Francisco doing Uber integrations with products like Google Maps, Facebook Messenger, and Snapchat.</p>
        <p>He has also worked at a Silicon Valley firm that provided expert witness testimony in litigation cases involving machine learning and statistics.</p>
      </div>
    ),
    abstract: (
      <div>
        <p>At Uber Data Science we use Scala to help us handle experimentation, machine learning, and data analysis at tremendous scale.</p>
        <p>For example, just figuring out which users were exposed to what treatment experience at what time requires processing >50 billion events per day from four mobile apps and dozens of backend services.</p>
        <p>This talk will outline how Uber uses Scala to optimize spark jobs for machine learning pipelines, select and transform machine learning features through a Scala-based DSL, and train models.</p>
        <p>We will also discuss how Uber uses Scala to provide on-the-fly statistical inference in an A/B testing context, as well as how Uber uses Livy and sparkmagic to process and analyze tremendous amounts of data using Scala in Jupyter notebooks.</p>
      </div>
    )
  },
  pretty: {
    name: 'Jon Pretty',
    company: 'Propensive',
    pictureUrl: require('../assets/speakers/pretty.jpg'),
    color: palette.purple,
    bio: (
      <div>
        <p>Jon has worked full-time as a Scala developer since 2004, and has been heavily involved in the Scala community for as long as it has existed.</p>
        <p>He travels extensively, speaking on a variety of Scala topics at many Scala events worldwide, including talks on his open-source libraries and original research on subjects such as type inference and the differences between type members and type parameters.</p>
        <p>Jon chairs the Scala Center Advisory Board.</p>
      </div>
    ),
    title: 'Ten Cool Things You Can Do With Scala 3',
    abstract: (
      <div>
        <p>Scala 3 introduces a wealth of new features to the language: union and intersection types, trait parameters, implicit function types, auto-specialization, multiversal equality, and many more!</p>
        <p>But what do these features mean for users? What can we do with these features? How will they make the code we write more elegant, more expressive and more typesafe?</p>
        <p>This talk will take a grand tour of some of the new features in Scala 3, and will explore some of the cool new code we will be able to write that wasn’t possible with Scala 2.</p>
      </div>
    )
  },
  veltri: {
    name: 'Saverio Veltri',
    company: 'Radicalbit',
    pictureUrl: require('../assets/speakers/veltri.png'),
    color: palette.brown,
    bio: (
      <div>
        <p>After taking his master degree in computer science engineer, Saverio gained a strong experience in Java and mobile technologies (iOs and Android) working either in small environments or big companies.</p>
        <p>Afterward, he bumped into the reactive world and he became a certified Scala and Akka engineer.</p>
        <p>Not completely satisfied with that stuff, he is currently working in the fast data area, specifically on Apache Flink and Kafka, at Radicalbit.</p>
      </div>
    ),
    title: 'Leveraging Scala and Akka to build NSDb, a distributed time-series database',
    abstract: (
      <div>
        <p>Nowadays, many batch and streaming processing frameworks leverage(d) Scala and Akka to build large-scale resilient distributed systems.</p>
        <p>In the same spirit, when it came to building our own distributed database, we agreed the previous mentioned technological stack would be the best choice in order to accomplish every architectural requirement we had.</p>
        <p>Given those assumptions, we built NSDb, a distributed time series database, streaming oriented and optimized for the Kappa architecture serving layer.</p>
        <p>During this talk, we will introduce our solution with its main features. Then, we will go deeper through the architecture, the patterns and protocols being used to guarantee availability, resilience, and scalability.</p>
        <p>In other words, we will focus on how it’s possible to use Scala and Akka to build a distributed system using high-level primitives without implementing anything from scratch.</p>
      </div>
    ),
    cospeaker: {
      id: 'mascetti',
      name: 'Paolo Mascetti'
    }
  },
  mascetti: {
    name: 'Paolo Mascetti',
    company: 'Radicalbit',
    pictureUrl: require('../assets/speakers/mascetti.jpg'),
    color: palette.green,
    bio: (
      <div>
        <p>Paolo achieved a Master Degree in Computer Science in 2016 presenting his thesis in the Data Science field.</p>
        <p>After graduation, he fell in love with Scala and worked as a consultant on an IoT based project.</p>
        <p>Still passionate about data and machine learning, he’s actually working in Radicalbit as Data Engineer.</p>
      </div>
    ),
    title: 'Leveraging Scala and Akka to build NSDb, a distributed time-series database',
    abstract: (
      <div>
        <p>Nowadays, many batch and streaming processing frameworks leverage(d) Scala and Akka to build large-scale resilient distributed systems.</p>
        <p>In the same spirit, when it came to building our own distributed database, we agreed the previous mentioned technological stack would be the best choice in order to accomplish every architectural requirement we had.</p>
        <p>Given those assumptions, we built NSDb, a distributed time series database, streaming oriented and optimized for the Kappa architecture serving layer.</p>
        <p>During this talk, we will introduce our solution with its main features. Then, we will go deeper through the architecture, the patterns and protocols being used to guarantee availability, resilience, and scalability.</p>
        <p>In other words, we will focus on how it’s possible to use Scala and Akka to build a distributed system using high-level primitives without implementing anything from scratch.</p>
      </div>
    ),
    cospeaker: {
      id: 'veltri',
      name: 'Saverio Veltri'
    }
  },
  hupel: {
    name: 'Lars Hupel',
    company: '',
    pictureUrl: require('../assets/speakers/hupel.jpeg'),
    color: palette.purple,
    bio: (
      <div>
        <p>Lars is a PhD student in Munich, Germany, working in the area of theorem proving.</p>
        <p>He has been using Scala for quite a while now, and is known as one of the founders of the typelevel initiative which is dedicated to providing principled, type-driven Scala libraries.</p>
        <p>He also talks about Haskell and Isabelle a lot.</p>
      </div>
    ),
    title: 'Numeric Programming with Spire',
    abstract: (
      <div>
        <p>Numeric programming is a notoriously difficult topic. For number crunching, e.g. solving systems of linear equations, we need raw performance.</p>
        <p>However, using floating-point numbers may lead to inaccurate results. On top of that, as functional programmers, we’d really like to abstract over concrete number types, which is where abstract algebra comes into play.</p>
        <p>This interplay between abstract and concrete, and the fact that everything needs to run on finite hardware, is what makes good library support necessary for writing fast & correct programs.</p>
        <p>Spire is such a library in the Typelevel Scala ecosystem. This talk will be an introduction to Spire, showcasing the ‘number tower’, real-ish numbers and how to obey the law.</p>
      </div>
    )
  },
  koestler: {
    name: 'Anderas Koestler',
    company: 'Finally Tagless Ltd',
    pictureUrl: require('../assets/speakers/koestler.jpg'),
    color: palette.brown,
    bio: (
      <div>
        <p>Andreas is a freelance software engineer currently free wheeling at Finally Tagless Ltd.</p>
        <p>He has been in the business of developing scalable and reliable software for more than 15 years - embracing Scala’s quirky idiosyncrasies for the last 5 of those.</p>
        <p>When he is not humbled by his coworkers or his motorbike he is hacking on shapeless and helping to re-home ex racing Greyhounds.</p>
      </div>
    ),
    title: 'Simon-Says: Correct-by-Construction RBAC',
    abstract: (
      <div>
        <p>In this talk I will derive the logic foundations of Role Based Access Control, turn these into typed programs, and show how we can leverage Scala’s type system to enforce user authorisation at compile time and provide statically computable security contexts.</p>
      </div>
    )
  },
};

export const workshops: Speakers = {
  cartia: {
    name: 'Mario Cartia',
    company: '',
    pictureUrl: require('../assets/speakers/cartia.jpg'),
    color: palette.green,
    title: 'Apache Spark 101 for Scala developers',
    abstract: (
      <div>
        <p>Apache Spark is a fast and general-purpose cluster computing framework capable of processing large amounts of data 10 to 100 times faster than Hadoop.</p>
        <p> During the workshop the participants will understand basic framework internals and the use of RDD and Dataframe APIs using Scala language.</p>
      </div>
    ),
    bio: (
      <div>
        <p>Mario Cartia is an evangelist, consultant and trainer in the field of Big Data.</p>
        <p>He has over 20 years of experience in IT, during which he has worked with the most important organizations and companies in the Italian and international scene.</p>
      </div>
    ),
    talkType: 'workshop'
  },
  jacobowitz: {
    name: 'Luka Jacobowitz',
    company: 'codecentric',
    pictureUrl: require('../assets/speakers/jacobowitz.jpg'),
    color: palette.purple,
    title: 'Getting Up and Running with the Typelevel stack',
    abstract: (
      <div>
        <p>In recent years the various typelevel libraries like Cats, Monix, Http4s, Circe and others have gained more and more popularity.</p>
        <p>In this workshop you’ll learn how to get up to speed with this ecosystem and develop a small, but extensible application in purely functional Scala.</p>
        <p>We’ll be doing a step-by-step walkthrough on how to setup your development stack and gradually introduce Cats, Http4s, Circe and Refined to develop a REST Service.</p>
      </div>
    ),
    bio: (
      <div>
        <p>Luka Jacobowitz is a functional programmer from Germany passionate about finding great abstractions to engineering problems.</p>
        <p>He's also a maintainer of several typelevel projects, including various Cats libraries as well as OutWatch.</p>
        <p>He cares deeply about equality and seek to make learning of pure functional programming as easy as possible.</p>
      </div>
    ),
    talkType: 'workshop'
  },
  geirsson: {
    name: 'Ólafur Páll Geirsson',
    company: 'Scalacenter',
    pictureUrl: require('../assets/speakers/geirsson.jpg'),
    color: palette.brown,
    title: 'Let\'s build Scala developer tools!',
    abstract: (
      <div>
        <p>Building Scala developer tools has traditionally required deep expertise with Scala compiler internals, but thanks to Scalameta and SemanticDB it’s become accessible to more developers.</p>
        <p>We will cover compiler-related topics such tokens, trees, symbols and types. You will learn how to use command-line utilities like metac, metacp, metap to quickly produce and examine SemanticDB data. In the end, we finish by building a tool to automatically generate documentation from Scala source code.</p>
        <p>Participants are expected to have basic programming experience with Scala, but familiarity with compilers or metaprogramming is not required.</p>
      </div>
    ),
    bio: (
      <div>
        <p>Ólafur Páll Geirsson is a software developer at the Scala Center where he works on developer tools.</p>
        <p>He is a Scalafmt, Scalafix and Scalameta maintainer.</p>
      </div>
    ),
    talkType: 'workshop'
  }
};
