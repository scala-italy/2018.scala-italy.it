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
    id: string;
    name: string;
  };
  talkType?: 'talk' | 'workshop';
}

type Speakers = { [name: string]: Speaker };

export const keynotes: Speakers = {
  doeraene: {
    name: 'Sébastien Doeraene',
    company: 'Scala Center',
    pictureUrl: require('../assets/speakers/doeraene.png'),
    color: palette.green,
    bio: (
      <div>
        <p>Sébastien Doeraene is a compiler/runtime systems hacker and a Scala enthusiast.</p>
        <p>
          Best known as the author of Scala.js, he is now executive director of the Scala Center.
        </p>
        <p>
          He holds a PhD from EPFL, having worked under the supervision of Prof. Martin Odersky, and
          a master’s degree in computer science engineering from Université catholique de Louvain in
          Belgium.
        </p>
        <p>
          When he is not busy coding, he sings in choirs and a cappella groups such as the Ensemble
          Vocal Évohé, or composes for said choirs.
        </p>
      </div>
    ),
    title: 'TBD',
    abstract: <div />
  }
};

export const speakers: Speakers = {
  // dotta: {
  //   name: 'Mirco Dotta',
  //   company: 'Triplequote',
  //   pictureUrl: require('../assets/speakers/dotta.jpg'),
  //   color: palette.green,
  //   bio: (
  //     <div>
  //       <p>
  //         Co-founder of Triplequote, the company behind Hydra: the world’s only parallel Scala
  //         compiler.
  //       </p>
  //       <p>
  //         Mirco has 10+ year experience with Scala, and he has contributed to several open source
  //         projects including Lagom, Playframework, Scala IDE for Eclipse, and the Scala language.
  //       </p>
  //       <p>
  //         Before founding his own company, he worked at Lightbend (formerly Typesafe), where he wore
  //         different hats: from engineering, to consulting, and, fun fact, even sales!
  //       </p>
  //       <p>He is a certified Lightbend trainer for Akka, Playframework, and Scala.</p>
  //       <p>
  //         He loves meeting people and sharing experiences. In his freetime, he plays chess and
  //         studies wine - both theory and practice!
  //       </p>
  //     </div>
  //   ),
  //   title: '5 things you need to know about Scala compilation',
  //   abstract: (
  //     <div>
  //       <p>
  //         You love Scala, but the one aspect you have a hard time accepting is long compile times.
  //       </p>
  //       <p>
  //         It’s not uncommon for a project to experience compilation times of a handful of minutes,
  //         if not worse. On top of that, compilation times are unpredictable, depending on a
  //         combination of language features, external libraries, and type annotations.
  //       </p>
  //       <p>A single line change may increase compilation times ten-fold!</p>
  //       <p>
  //         We are often ignorant of what makes our Scala project compile so slowly, and this session
  //         intends to fill the gap. We will explore 5 common causes leading to long compilation times
  //         and, after the session, you’ll finally feel like you have control over your projects’
  //         compile time.
  //       </p>
  //     </div>
  //   )
  // },
  // sabin: {
  //   name: 'Miles Sabin',
  //   company: 'Underscore',
  //   title: 'Adding kind-polymorphism to the Scala programming language',
  //   pictureUrl: require('../assets/speakers/sabin.jpg'),
  //   color: palette.purple,
  //   abstract: (
  //     <div>
  //       <p>
  //         What sort of primitive mechanisms should we choose to support shapeless-style generic
  //         programming directly in Scala? I say Kind-polymorphism!
  //       </p>
  //       <p>
  //         I will demonstrate this in the Typelevel compiler and show how it can be used to
  //         dramatically simplify generic programming in Scala.
  //       </p>
  //     </div>
  //   ),
  //   bio: (
  //     <div>
  //       <p>
  //         Miles has been doing stuff with Scala for more than a decade, currently with Underscore
  //         Consulting.{' '}
  //       </p>
  //       <p>
  //         He is a cofounder of Typelevel and his best known project, the Scala generic programming
  //         library shapeless, is the weapon of choice wherever boilerplate needs to be scrapped or
  //         arities abstracted over.
  //       </p>
  //     </div>
  //   )
  // },
  // rzeznicki: {
  //   name: 'Marcin Rzeźnicki',
  //   company: 'Iterators',
  //   title: 'Idris for (im)practical Scala programmers',
  //   pictureUrl: require('../assets/speakers/rzeznicki.png'),
  //   color: palette.green,
  //   abstract: (
  //     <div>
  //       <p>
  //         If you want to know how to achieve this:
  //         <pre>
  //           <code>scala> val v = 1 :: 2 :: NIL</code>
  //         </pre>
  //         <pre>
  //           <code>scala> v.tail.tail.head</code>
  //         </pre>
  //         <pre>
  //           <code>:13: error:</code>
  //         </pre>
  //         in Scala, or how to make type of <code>printf "%s = %d"</code> to be precisely{' '}
  //         <code>String -> Int -> String</code>, come to my talk (I'll also show when it won't work)
  //       </p>
  //     </div>
  //   ),
  //   bio: (
  //     <div>
  //       <p>
  //         I'm a senior software engineer at Iterators, disguised under a self-proclaimed title of
  //         Scala Tiger (or Scala Kitten), sometimes also known as Scala Animal.
  //       </p>
  //       <p>
  //         I have been in this business for ca. 10 years, mostly filled with immense displeasure of
  //         working in C#, Java or Ruby until I witnessed the advent of FP in the industry and
  //         regained the knowledge I'd lost leaving academia halls.
  //       </p>
  //       <p>
  //         Embracing Scala helped me to become born-again programmer, type system theorist and
  //         category theory hobbyist.
  //       </p>
  //       <p>
  //         I gave talks at Krakow Scala User Group, Chamberconf, Scalapolis, ScalaWAW, Lambda Days,
  //         Scala UA on subjects like: Kleisli arrows, category theory and Free monads. My coworkers
  //         wrote about me: "Don't let Marcin start talking about type systems… He is an expert using
  //         Scala to build most composable and concise business logic for our partners. " but I find
  //         it to be unfounded hype.
  //       </p>
  //       <p>
  //         I'm also the main author of open-source library called kebs:{' '}
  //         <a href="https://github.com/theiterators/kebs" target="blank">
  //           https://github.com/theiterators/kebs
  //         </a>
  //       </p>
  //     </div>
  //   )
  // },
  // labella: {
  //   name: 'Fabio Labella',
  //   company: 'OVO Energy',
  //   title: "Shared state in pure FP: when a state monad won't do",
  //   pictureUrl: require('../assets/speakers/labella.jpeg'),
  //   color: palette.brown,
  //   abstract: (
  //     <div>
  //       <p>
  //         A shared cache, a concurrent counter, a mutable DB connection: they are all common
  //         concerns in real-world applications that don’t fit the state monad model of returning a
  //         new copy of the state each time. Does this mean we should drop pure FP in those cases? Of
  //         course not!
  //       </p>

  //       <p>
  //         This talk will show how mutable, shared, concurrent state is not only possible, but very
  //         simple in pure FP, whilst remaining composable and easy to reason about.
  //       </p>

  //       <p>
  //         On one hand, we will see how to put together several concepts such as the IO type,
  //         Kleisli, and Free/Final Tagless. On the other, we’ll get at the very heart of what purity
  //         is all about.
  //       </p>
  //     </div>
  //   ),
  //   bio: (
  //     <div>
  //       <p>
  //         I’m a Senior Software Engineer based in Edinburgh, UK, working in Scala in the financial
  //         industry.
  //       </p>
  //       <p>
  //         I also actively participate in Open Source (as SystemFw): I’m one of the maintainers of
  //         fs2 and http4s, and a contributor to cats, shapeless and most of the other libraries in
  //         the Scala FP ecosystem.
  //       </p>
  //       <p>
  //         {' '}
  //         I have a passion for helping people master advanced concepts (e.g. see{' '}
  //         <a href="https://twitter.com/balajisivaraman/status/894976114304499712" target="blank">
  //           here
  //         </a>
  //         ) or{' '}
  //         <a href="https://twitter.com/etorreborre/status/933344847364313088" target="blank">
  //           here
  //         </a>
  //         ), so hit me up on Gitter if you have a question!
  //       </p>
  //     </div>
  //   )
  // },
  // jones: {
  //   name: 'Nick Jones',
  //   company: 'Uber',
  //   pictureUrl: require('../assets/speakers/jones.jpeg'),
  //   color: palette.green,
  //   title: 'Scala with Uber Data Science',
  //   bio: (
  //     <div>
  //       <p>
  //         Nick Jones is a data scientist on the cash product team at Uber in the Amsterdam office.
  //       </p>
  //       <p>
  //         Prior to moving to Amsterdam he worked at Uber HQ in San Francisco doing Uber integrations
  //         with products like Google Maps, Facebook Messenger, and Snapchat.
  //       </p>
  //       <p>
  //         He has also worked at a Silicon Valley firm that provided expert witness testimony in
  //         litigation cases involving machine learning and statistics.
  //       </p>
  //     </div>
  //   ),
  //   abstract: (
  //     <div>
  //       <p>
  //         At Uber Data Science we use Scala to help us handle experimentation, machine learning, and
  //         data analysis at tremendous scale.
  //       </p>
  //       <p>
  //         For example, just figuring out which users were exposed to what treatment experience at
  //         what time requires processing >50 billion events per day from four mobile apps and dozens
  //         of backend services.
  //       </p>
  //       <p>
  //         This talk will outline how Uber uses Scala to optimize spark jobs for machine learning
  //         pipelines, select and transform machine learning features through a Scala-based DSL, and
  //         train models.
  //       </p>
  //       <p>
  //         We will also discuss how Uber uses Scala to provide on-the-fly statistical inference in an
  //         A/B testing context, as well as how Uber uses Livy and sparkmagic to process and analyze
  //         tremendous amounts of data using Scala in Jupyter notebooks.
  //       </p>
  //     </div>
  //   )
  // },
  // pretty: {
  //   name: 'Jon Pretty',
  //   company: 'Propensive',
  //   pictureUrl: require('../assets/speakers/pretty.jpg'),
  //   color: palette.purple,
  //   bio: (
  //     <div>
  //       <p>
  //         Jon has worked full-time as a Scala developer since 2004, and has been heavily involved in
  //         the Scala community for as long as it has existed.
  //       </p>
  //       <p>
  //         He travels extensively, speaking on a variety of Scala topics at many Scala events
  //         worldwide, including talks on his open-source libraries and original research on subjects
  //         such as type inference and the differences between type members and type parameters.
  //       </p>
  //       <p>Jon chairs the Scala Center Advisory Board.</p>
  //     </div>
  //   ),
  //   title: 'Ten Cool Things You Can Do With Scala 3',
  //   abstract: (
  //     <div>
  //       <p>
  //         Scala 3 introduces a wealth of new features to the language: union and intersection types,
  //         trait parameters, implicit function types, auto-specialization, multiversal equality, and
  //         many more!
  //       </p>
  //       <p>
  //         But what do these features mean for users? What can we do with these features? How will
  //         they make the code we write more elegant, more expressive and more typesafe?
  //       </p>
  //       <p>
  //         This talk will take a grand tour of some of the new features in Scala 3, and will explore
  //         some of the cool new code we will be able to write that wasn’t possible with Scala 2.
  //       </p>
  //     </div>
  //   )
  // },
  // veltri: {
  //   name: 'Saverio Veltri',
  //   company: 'Radicalbit',
  //   pictureUrl: require('../assets/speakers/veltri.png'),
  //   color: palette.brown,
  //   bio: (
  //     <div>
  //       <p>
  //         After taking his master degree in computer science engineer, Saverio gained a strong
  //         experience in Java and mobile technologies (iOs and Android) working either in small
  //         environments or big companies.
  //       </p>
  //       <p>
  //         Afterward, he bumped into the reactive world and he became a certified Scala and Akka
  //         engineer.
  //       </p>
  //       <p>
  //         Not completely satisfied with that stuff, he is currently working in the fast data area,
  //         specifically on Apache Flink and Kafka, at Radicalbit.
  //       </p>
  //     </div>
  //   ),
  //   title: 'Leveraging Scala and Akka to build NSDb, a distributed time-series database',
  //   abstract: (
  //     <div>
  //       <p>
  //         Nowadays, many batch and streaming processing frameworks leverage(d) Scala and Akka to
  //         build large-scale resilient distributed systems.
  //       </p>
  //       <p>
  //         In the same spirit, when it came to building our own distributed database, we agreed the
  //         previous mentioned technological stack would be the best choice in order to accomplish
  //         every architectural requirement we had.
  //       </p>
  //       <p>
  //         Given those assumptions, we built NSDb, a distributed time series database, streaming
  //         oriented and optimized for the Kappa architecture serving layer.
  //       </p>
  //       <p>
  //         During this talk, we will introduce our solution with its main features. Then, we will go
  //         deeper through the architecture, the patterns and protocols being used to guarantee
  //         availability, resilience, and scalability.
  //       </p>
  //       <p>
  //         In other words, we will focus on how it’s possible to use Scala and Akka to build a
  //         distributed system using high-level primitives without implementing anything from scratch.
  //       </p>
  //     </div>
  //   ),
  //   cospeaker: {
  //     id: 'mascetti',
  //     name: 'Paolo Mascetti'
  //   }
  // },
  // mascetti: {
  //   name: 'Paolo Mascetti',
  //   company: 'Radicalbit',
  //   pictureUrl: require('../assets/speakers/mascetti.jpg'),
  //   color: palette.green,
  //   bio: (
  //     <div>
  //       <p>
  //         Paolo achieved a Master Degree in Computer Science in 2016 presenting his thesis in the
  //         Data Science field.
  //       </p>
  //       <p>
  //         After graduation, he fell in love with Scala and worked as a consultant on an IoT based
  //         project.
  //       </p>
  //       <p>
  //         Still passionate about data and machine learning, he’s actually working in Radicalbit as
  //         Data Engineer.
  //       </p>
  //     </div>
  //   ),
  //   title: 'Leveraging Scala and Akka to build NSDb, a distributed time-series database',
  //   abstract: (
  //     <div>
  //       <p>
  //         Nowadays, many batch and streaming processing frameworks leverage(d) Scala and Akka to
  //         build large-scale resilient distributed systems.
  //       </p>
  //       <p>
  //         In the same spirit, when it came to building our own distributed database, we agreed the
  //         previous mentioned technological stack would be the best choice in order to accomplish
  //         every architectural requirement we had.
  //       </p>
  //       <p>
  //         Given those assumptions, we built NSDb, a distributed time series database, streaming
  //         oriented and optimized for the Kappa architecture serving layer.
  //       </p>
  //       <p>
  //         During this talk, we will introduce our solution with its main features. Then, we will go
  //         deeper through the architecture, the patterns and protocols being used to guarantee
  //         availability, resilience, and scalability.
  //       </p>
  //       <p>
  //         In other words, we will focus on how it’s possible to use Scala and Akka to build a
  //         distributed system using high-level primitives without implementing anything from scratch.
  //       </p>
  //     </div>
  //   ),
  //   cospeaker: {
  //     id: 'veltri',
  //     name: 'Saverio Veltri'
  //   }
  // },
  // hupel: {
  //   name: 'Lars Hupel',
  //   company: '',
  //   pictureUrl: require('../assets/speakers/hupel.jpeg'),
  //   color: palette.purple,
  //   bio: (
  //     <div>
  //       <p>Lars is a PhD student in Munich, Germany, working in the area of theorem proving.</p>
  //       <p>
  //         He has been using Scala for quite a while now, and is known as one of the founders of the
  //         typelevel initiative which is dedicated to providing principled, type-driven Scala
  //         libraries.
  //       </p>
  //       <p>He also talks about Haskell and Isabelle a lot.</p>
  //     </div>
  //   ),
  //   title: 'Numeric Programming with Spire',
  //   abstract: (
  //     <div>
  //       <p>
  //         Numeric programming is a notoriously difficult topic. For number crunching, e.g. solving
  //         systems of linear equations, we need raw performance.
  //       </p>
  //       <p>
  //         However, using floating-point numbers may lead to inaccurate results. On top of that, as
  //         functional programmers, we’d really like to abstract over concrete number types, which is
  //         where abstract algebra comes into play.
  //       </p>
  //       <p>
  //         This interplay between abstract and concrete, and the fact that everything needs to run on
  //         finite hardware, is what makes good library support necessary for writing fast & correct
  //         programs.
  //       </p>
  //       <p>
  //         Spire is such a library in the Typelevel Scala ecosystem. This talk will be an
  //         introduction to Spire, showcasing the ‘number tower’, real-ish numbers and how to obey the
  //         law.
  //       </p>
  //     </div>
  //   )
  // },
  // andren: {
  //   name: 'Johan Andrén',
  //   company: 'Lightbend',
  //   pictureUrl: require('../assets/speakers/andren.jpg'),
  //   color: palette.purple,
  //   bio: (
  //     <div>
  //       <p>I am Scala enthusiast working as a developer in the Akka Team at Lightbend.</p>
  //       <p>I’m based out of Stockholm, Sweden where I’m a co-organizer of the Scala Usergroup.</p>
  //       <p>
  //         I have been working at Lightbend the last three years and before that as a consultant and
  //         mentor around Scala, Akka and Play Framework for the last 6 years and before that a long
  //         time on the JVM.
  //       </p>
  //     </div>
  //   ),
  //   title: 'Next generation actors with Akka',
  //   abstract: (
  //     <div>
  //       <p>
  //         Akka Typed is the next generation of the actor model APIs in Akka, providing what many
  //         have asked for: using the type system to guarantee actors are only sent messages they can
  //         handle.
  //       </p>
  //       <p>
  //         After several iterations of trying to formulate an API for typed Actors that makes sense
  //         we have finally found the right level of abstraction to build upon.
  //       </p>
  //       <p>
  //         In this talk we will take a closer look at the new Akka Typed APIs and how they allow you
  //         to achieve type safe asynchronous message driven systems, scaling up across many cores and
  //         out across many machines.
  //       </p>
  //     </div>
  //   )
  // },
  // tiriticco: {
  //   name: 'Fabio Tiriticco',
  //   company: '',
  //   pictureUrl: require('../assets/speakers/tiriticco.jpg'),
  //   color: palette.green,
  //   bio: (
  //     <div>
  //       <p>
  //         Scala Architect and Tech Lead. Community guy at the root - I'm the organiser of the
  //         Reactive Amsterdam meetup.
  //       </p>
  //       <p>Long distance bicycle touring and fingerpicking guitar.</p>
  //     </div>
  //   ),
  //   title: 'Cloud Native Akka & Kubernetes: the holy grail to elasticity?',
  //   abstract: (
  //     <div>
  //       <p>
  //         Have you ever wondered how to actually achieve elasticity on the cloud, outside of your
  //         cushy local dev environment?
  //       </p>
  //       <p>
  //         Akka is the most mature choice to implement the traits of the Reactive Manifesto, thanks
  //         to the Actor model. Resilience is enabled by asynchronous message passing and Actor
  //         supervision. Location transparency, message routing and the “share nothing” approach
  //         enable seamless scalability, but once our app is deployed we need to rely on some external
  //         infrastructure to automatically scale up or down our services. At this point, Akka alone
  //         is not sufficient anymore. What else do we need?
  //       </p>
  //       <p>
  //         We found Docker & Kubernetes to be a perfect match for clustered Akka applications running
  //         in the cloud. Thanks to the Kubernetes API, one can write infrastructure logic that
  //         complements the business logic. This leads to a general approach of infrastructure-as-code
  //         tailored to each different business case, which in turn lets companies achieve maximum
  //         efficiency and resource usage.
  //       </p>
  //       <p>
  //         During this talk we will cover features from both Akka and Kubernetes, plus example code
  //         in Scala: familiarity with these technologies is recommended. Our example will rely on
  //         Google Cloud infrastructure.
  //       </p>
  //       <p>
  //         Rough outline:
  //         <ul>
  //           <li>The Reactive Manifesto</li>
  //           <li>Modelling the world with Actor Programming</li>
  //           <li>Distribute your project with Akka Cluster</li>
  //           <li>Provision your project with Kubernetes</li>
  //           <li>Akka messaging vs HTTP</li>
  //           <li>Conclusions</li>
  //         </ul>
  //       </p>
  //     </div>
  //   )
  // },
  // sfregola: {
  //   name: 'Daniela Sfregola',
  //   company: '',
  //   pictureUrl: require('../assets/speakers/sfregola.png'),
  //   color: palette.brown,
  //   bio: (
  //     <div>
  //       <p>Daniela Sfregola is a Software Consultant based in London, UK.</p>
  //       <p>
  //         She is an active contributor to the Scala Community and a passionate blogger at{' '}
  //         <a href="http://danielasfregola.com" target="_blank">
  //           danielasfregola.com
  //         </a>
  //         .
  //       </p>
  //     </div>
  //   ),
  //   title: 'Random data generation with Scalacheck',
  //   abstract: (
  //     <div>
  //       <p>
  //         ScalaCheck is a well-known library for property-base testing. However, property-base
  //         testing is not always possible when side effects are involved, for example when writing an
  //         integration test that involves data being stored in a database.
  //       </p>
  //       <p>
  //         When writing non-property-base tests, we often need to initialise some data and then
  //         verify some assertions on it. However, manual data generation can make our data biased and
  //         preventing us from spotting bugs in our code.
  //       </p>
  //       <p>
  //         Having our data generated randomly not only it would make our test less biased, but it
  //         will also make it a lot more readable by highlighting what part of our data are actually
  //         relevant in our test.
  //       </p>

  //       <p>
  //         In this talk we will discuss how to reuse some of the existing ScalaCheck code to generate
  //         random instances of given types and how these can be combined to generate random case
  //         classes. We will analyse the properties of a ScalaCheck generator and provide examples of
  //         how we can manipulate existing generators to meet our needs.
  //       </p>
  //     </div>
  //   )
  // }
};

export const workshops: Speakers = {
  // cartia: {
  //   name: 'Mario Cartia',
  //   company: '',
  //   pictureUrl: require('../assets/speakers/cartia.jpg'),
  //   color: palette.green,
  //   title: 'Apache Spark 101 for Scala developers',
  //   abstract: (
  //     <div>
  //       <p>
  //         Apache Spark is a fast and general-purpose cluster computing framework capable of
  //         processing large amounts of data 10 to 100 times faster than Hadoop.
  //       </p>
  //       <p>
  //         {' '}
  //         During the workshop the participants will understand basic framework internals and the use
  //         of RDD and Dataframe APIs using Scala language.
  //       </p>
  //     </div>
  //   ),
  //   bio: (
  //     <div>
  //       <p>Mario Cartia is an evangelist, consultant and trainer in the field of Big Data.</p>
  //       <p>
  //         He has over 20 years of experience in IT, during which he has worked with the most
  //         important organizations and companies in the Italian and international scene.
  //       </p>
  //     </div>
  //   ),
  //   talkType: 'workshop'
  // },
  // jacobowitz: {
  //   name: 'Luka Jacobowitz',
  //   company: 'codecentric',
  //   pictureUrl: require('../assets/speakers/jacobowitz.jpg'),
  //   color: palette.purple,
  //   title: 'Getting Up and Running with the Typelevel stack',
  //   abstract: (
  //     <div>
  //       <p>
  //         In recent years the various typelevel libraries like Cats, Monix, Http4s, Circe and others
  //         have gained more and more popularity.
  //       </p>
  //       <p>
  //         In this workshop you’ll learn how to get up to speed with this ecosystem and develop a
  //         small, but extensible application in purely functional Scala.
  //       </p>
  //       <p>
  //         We’ll be doing a step-by-step walkthrough on how to setup your development stack and
  //         gradually introduce Cats, Http4s, Circe and Refined to develop a REST Service.
  //       </p>
  //     </div>
  //   ),
  //   bio: (
  //     <div>
  //       <p>
  //         Luka Jacobowitz is a functional programmer from Germany passionate about finding great
  //         abstractions to engineering problems.
  //       </p>
  //       <p>
  //         He's also a maintainer of several typelevel projects, including various Cats libraries as
  //         well as OutWatch.
  //       </p>
  //       <p>
  //         He cares deeply about equality and seek to make learning of pure functional programming as
  //         easy as possible.
  //       </p>
  //     </div>
  //   ),
  //   talkType: 'workshop'
  // },
  // geirsson: {
  //   name: 'Ólafur Páll Geirsson',
  //   company: 'Scalacenter',
  //   pictureUrl: require('../assets/speakers/geirsson.jpg'),
  //   color: palette.brown,
  //   title: "Let's build Scala developer tools!",
  //   abstract: (
  //     <div>
  //       <p>
  //         Building Scala developer tools has traditionally required deep expertise with Scala
  //         compiler internals, but thanks to Scalameta and SemanticDB it’s become accessible to more
  //         developers.
  //       </p>
  //       <p>
  //         We will cover compiler-related topics such tokens, trees, symbols and types. You will
  //         learn how to use command-line utilities like metac, metacp, metap to quickly produce and
  //         examine SemanticDB data. In the end, we finish by building a tool to automatically
  //         generate documentation from Scala source code.
  //       </p>
  //       <p>
  //         Participants are expected to have basic programming experience with Scala, but familiarity
  //         with compilers or metaprogramming is not required.
  //       </p>
  //     </div>
  //   ),
  //   bio: (
  //     <div>
  //       <p>
  //         Ólafur Páll Geirsson is a software developer at the Scala Center where he works on
  //         developer tools.
  //       </p>
  //       <p>He is a Scalafmt, Scalafix and Scalameta maintainer.</p>
  //     </div>
  //   ),
  //   talkType: 'workshop'
  // },
  // peruffo: {
  //   name: 'Andrea Peruffo',
  //   company: 'Nokia',
  //   pictureUrl: require('../assets/speakers/peruffo.jpg'),
  //   color: palette.green,
  //   bio: (
  //     <div>
  //       <p>
  //         Andrea Peruffo is an all-around software developer with hands-on experience in delivering
  //         any kind of software system from large scale cloud to embedded devices.
  //       </p>
  //     </div>
  //   ),
  //   title: 'Principled SBT',
  //   abstract: (
  //     <div>
  //       <p>
  //         Everyone has learned over the years to hate SBT enough, it’s now time to stand and talk a
  //         little more about it.
  //       </p>
  //       <p>
  //         Like any other library or tool we use in our daily work SBT deserve a little of principled
  //         learning, despite the fact most people try to keep the build working with some furious
  //         googling and copy-pasting this rarely turns out to be a proper solution.
  //       </p>
  //       <p>
  //         There are a few (more or less opinionated) principles where SBT sit on, just learning a
  //         few basics will enormously boost our productivity, demystify the dragons in our build.sbt
  //         and, even, open us new horizons to leverage on it.
  //       </p>
  //       <p>
  //         Don’t panic, we will start from the very basics and check SBT from a very different angle!
  //       </p>
  //     </div>
  //   ),
  //   talkType: 'workshop'
  // }
};
