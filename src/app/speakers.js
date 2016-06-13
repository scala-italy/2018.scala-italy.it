import React from 'react';

export const speakers = {
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
    ),
    abstract: (
      <div>
        <p>Microservices has become a difficult term to pinpoint as more people use it to describe various approaches to building service-based applications.</p>
        <p>Many of these approaches have become anti-patterns to scale, such as sharing code between services and traditional monolithic CRUD data storage strategies.</p>
        <p>This talk will focus on how to build elastic, resilient service-based applications that can handle tremendous amounts of data in real time, and provide insight on many of the guiding principles that led to Lightbend creating the Lagom framework.</p>
      </div>
    )
  },
  delafargue: {
    name: 'Clement Delafargue',
    company: 'Clever Cloud',
    pictureUrl: require('assets/images/speakers/delafargue.jpg'),
    color: '#C31048',
    bio: <div>CTO @ Clever Cloud. Functional Programmer</div>,
    abstract: (
      <div>
        <p>Scala, by being both Functional and Object-Oriented is easy to get started with, especially for java developpers.</p>
        <p>However, to get the most of the language, you have to embrace its functional nature.</p>
        <p>In this session, I'll show you how to start using scala's functional nature by presenting patterns originated in the functional world:
          <ul>
            <li>Substitution model and "everything is an expression"</li>
            <li>Algebraic Data Types for data modelling</li>
            <li>Typeclasses for extensible abstractions</li>
            <li>Error handling in a composable fashion with Either and Validation</li>
            <li>Segregation between logic and effects for easier testing</li>
            <li>Property based testing</li>
          </ul>
        </p>
      </div>
    )
  },
  mcgonigle: {
    name: 'Seamus McGonigle',
    company: 'Workday',
    pictureUrl: require('assets/images/speakers/mcgonigle.jpg'),
    color: '#b3810d',
    bio: (
      <div>
        <p>Seamus Mc Gonigle is a Software Engineer at Workday.</p>
        <p>He holds an M­Sc in Networks and Distributed Systems from Trinity College Dublin.</p>
        <p>He is excited by the blockchain whilst terrified of artificial super intelligence.</p>
        <p>A late night hacker, a beginner rock climber and a functional programmer.</p>
      </div>
    ),
    abstract: (
      <div>
        <p>The substitution model specifies that all expressions must be reduced to a defined value type.</p>
        <p>When exceptions are thrown; the client code must consider potential exceptions along with the expected type.</p>
        <p>The effect is more expansive than reductive. Thus imperative exception handling runs foul of functional programming elegance.</p>
        <p>Imperative exception handling makes functions superficially appear to be safe. The function signature suggests a guaranteed return type.</p>
        <p>The promise is reneged upon when functions fail before completion. Moving the potential exception into the type system makes the code easier to reason about.</p>
        <p>Exceptions are often thrown at the interfaces between components owned by different teams.</p>
        <p>Effective Java provides guidelines for exception handling which are widely accepted.</p>
        <p>A similar level of agreement amongst Scala developers would ease inter-team development efforts.</p>
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
    ),
    abstract: (
      <div>
        <p>Any style guide written in English is either so brief that it’s ambiguous, or so long that no one reads it.</p>
        <p><a href='https://github.com/olafurpg/scalafmt'>Scalafmt</a> does its best to relieve your attention from such trivia and let you focus instead on writing correct, maintainable code.</p>
        <p>Mark the end of arguments about formatting! In this talk, we’ll see how scalafmt works and how it’s different from its sibling Scalariform.</p>
        <p>We’ll also dig into how scalafmt is implemented with scala.meta, a new metaprogramming library that leverages both functional and OO aspects of Scala.</p>
        <p>It turns out that scala.meta's syntactic API and scalafmt are a match made in heaven. Expect a lot of funky looking code.</p>
        <p>Don't forget to bring your strongest opinions on whitespace and indentation, it may be your last chance to express them.</p>
      </div>
    )
  },
  ballin: {
    name: 'Gioia Ballin',
    company: 'Measurence',
    pictureUrl: require('assets/images/speakers/ballin.jpg'),
    color: '#C31048',
    bio: (
      <div>
        <p>I'm a software engineer with experience in Python, Java, Scala.</p>
        <p>I'm currently working at the backend infrastructure of the IoT Analytics Platform at Measurence.</p>
        <p>Based on the latest scientific advances, I design and implement innovative algorithms for real-world applications.</p>
        <p>I'm a Data Science enthusiast and a blogger when everyone is sleeping.</p>
      </div>
    ),
    abstract: (
      <div>
        <p>Reactive streaming is becoming the best approach to handle data flows across asynchronous boundaries.</p>
        <p>In this talk we present the implementation of a real-world application based on Akka Streams.</p>
        <p>After reviewing the basics, we will discuss the development of a data processing pipeline that collects real-time sensor data and sends it to a Kinesis stream.</p>
        <p>There are various possible point of failures in this architecture.</p>
        <p>What should happen when Kinesis is unavailable? If the data flow is not handled in the correct way, some information may get lost.</p>
        <p>Akka Streams are the tools that enabled us to build a reliable processing logic for the pipeline that avoids data losses and maximizes the robustness of the entire system.</p>
      </div>
    )
  },
  fabiano: {
    name: 'Simone Fabiano',
    company: 'Measurence',
    pictureUrl: require('assets/images/speakers/fabiano.jpg'),
    color: '#1e9481',
    bio: (
      <div>
        <p>I’m a software engineer at Measurence, working on IoT and Big Data platforms.</p>
        <p>Previously I worked at LightStreamer on real-time technologies.</p>
        <p>I split my spare time between games, technology, cats and gardening.</p>
      </div>
    ),
    abstract: (
      <div>
        <p>Reactive streaming is becoming the best approach to handle data flows across asynchronous boundaries.</p>
        <p>In this talk we present the implementation of a real-world application based on Akka Streams.</p>
        <p>After reviewing the basics, we will discuss the development of a data processing pipeline that collects real-time sensor data and sends it to a Kinesis stream.</p>
        <p>There are various possible point of failures in this architecture.</p>
        <p>What should happen when Kinesis is unavailable? If the data flow is not handled in the correct way, some information may get lost.</p>
        <p>Akka Streams are the tools that enabled us to build a reliable processing logic for the pipeline that avoids data losses and maximizes the robustness of the entire system.</p>
      </div>
    )
  },
  szulc: {
    name: 'Pawel Szulc',
    company: 'Rabbit Software',
    pictureUrl: require('assets/images/speakers/szulc.jpg'),
    color: '#b3810d',
    bio: (
      <div>
        <p>Pawel Szulc is primarily a programmer. Always was and always will be.</p>
        <p>Experienced professionally in JVM ecosystem, currently having tons of fun with Scala, Erlang, Clojure and Haskell.
          By day working on (not that) BigData problems with Akka Stream & Apache Spark, by night hacking whatever he finds interesting at that given moment. Humble apprentice of Functional Programming. Runs a blog <a href='http://www.rabbitonweb.com' target='_blank'>http://www.rabbitonweb.com</a>
        </p>
        <p>Pawel started doing conference talks back in 2008, but I've been active speaker at local meetups even earlier. He’s presented at such conferences as Devoxx, Scalar, LambdaConf, Voxxed Vienna, Lambda Days, Geecon, 33rd Degree, Confitura and DevCrowd.</p>
      </div>
    ),
    abstract: (
      <div>
        <p>It's happened to all of us: we ran away from some conversation or library because it kept on using those "weird" phrases.</p>
        <p>You know, like "type classes", "semigroups", "monoids", "applicatives".</p>
        <p>Yikes! They all seem so academic, so pointlessly detached from real-world problems.</p>
        <p>But then again, given how frequently we run into them in functional programming, are they REALLY irrelevant, or do they have real-world applications?</p>
        <p>This talk will go beyond giving you raw definitions of these terms, and show you real-world motivations behind the concepts.</p>
        <p>By attending, you'll be able to keep your skills relevant to an ever-changing industry, confuse your significant other ("You know, honey, a monad is just a monoid in the category of endofunctors!"), and sound extra smart on the next job interview!</p>
      </div>
    )
  },
  akhter: {
    name: 'Adil Akhter',
    company: 'CodeStar',
    pictureUrl: require('assets/images/speakers/akther.jpg'),
    color: '#799100',
    bio: (
      <div>
        <p>
          Adil Akhter is a Senior Architect at <a href='http://codestar.nl' target='_blank'>CodeStar</a>, a consultancy that specialises in Scala and Big Data technologies.
        </p>
        <p>He is currently working as a consultant at Wehkamp, a leading e-commerce in the Netherlands focusing on building its data platform. He is a functional programming enthusiast with interests in data-driven architecture, machine learning, and language engineering.
        </p>
        <p>Aside from writing Scala at work, at present, he spends time on Haskell and F#.</p>
      </div>
    ),
    abstract: (
      <div>
        <p>Scalaz-stream (soon to be called "FS2"), a library that facilitates purely functional API to specify asynchronous stream processing in a modular and composable manner.</p>
        <p>Due to its functional abstraction around "streams" of data, scalaz-streams enables isolating and delaying the side-effects until the streams are fully composed and assembled into its final execution context.</p>
        <p>The main objective of this talk to get started scalaz-stream, with its functional approach to stream processing, and to dive into details of its semantics (for instance, Task, Process, Channel and so on).</p>
        <p>This talk will introduce the basic principles of scalaz-stream and will demonstrate on how easily we can define streams modularly, and how effectively we can compose these functional streams to solve problems of distributed systems.</p>
        <p>No knowledge of advanced functional programming is assumed.</p>
      </div>
    )
  },
  bessi: {
    name: 'Andrea Bessi',
    company: 'Databiz',
    pictureUrl: require('assets/images/speakers/bessi.jpg'),
    color: '#C31048',
    bio: (
      <div>
        <p>Andrea is a software developer with a keen interest in Data Science.</p>
        <p>After a Bachelor’s thesis on Data Mining and a Master’s thesis on Business Intelligence, Databiz allowed him to delve deeper into Machine Learning.</p>
        <p>He is always amazed at how Apache Spark and Scala ease his everyday job.</p>
      </div>
    ),
    abstract: (
      <div>
        <p>Neural networks and deep learning have seen a spectacular advance during the last few years and represent now the state of the art in tasks such as image recognition, automated translations and natural language processing.</p>
        <p>Unfortunately, most of the high performance deep learning implementations are single-node only, not being therefore particularly scalable.</p>
        <p>During this talk, we will demonstrate how Apache Spark, the fast and general engine for large-scale data processing, can be used to train artificial neural networks, thus allowing to achieve high performance and parallel computing at the same time.</p>
      </div>
    )
  },
  bezzi: {
    name: 'Emanuele Bezzi',
    company: 'Databiz',
    pictureUrl: require('assets/images/speakers/bezzi.jpg'),
    color: '#b3810d',
    bio: (
      <div>
        <p>Emanuele graduated in Mathematics in 2011 and has since become a full time software engineer.</p>
        <p>A functional programming enthusiast, he studied Haskell and then moved to Scala, which now uses as his main language.</p>
        <p>He is also experienced with Machine Learning, especially in the Natural Language Processing field, and is a certified Lightbend trainer for Apache Spark.</p>
      </div>
    ),
    abstract: (
      <div>
        <p>Neural networks and deep learning have seen a spectacular advance during the last few years and represent now the state of the art in tasks such as image recognition, automated translations and natural language processing.</p>
        <p>Unfortunately, most of the high performance deep learning implementations are single-node only, not being therefore particularly scalable.</p>
        <p>During this talk, we will demonstrate how Apache Spark, the fast and general engine for large-scale data processing, can be used to train artificial neural networks, thus allowing to achieve high performance and parallel computing at the same time.</p>
      </div>
    )
  },
  ratajski: {
    name: 'Jarek Ratajski',
    company: 'CSS Versicherung AG',
    pictureUrl: require('assets/images/speakers/jarek.png'),
    color: '#1e9481',
    bio: (
      <div>
        <p>software developer, wizard and anarchitect</p>
        <p>I love programming since the first line of code I did on my C64 in Basic. Since that I've worked with various languages and technologies - mostly around JVM / Java EE and Web (JS). Working for various customers like banks, insurance companies and even television I am constantly not satisfied from the existing frameworks and try to change the world – contributing to open source projects, giving public talks or just arguing like crazy...</p>
        <p>I live in Luzern (Switzerland) where I travel a lot on my bike or go skiing in the winter. At evenings Iattended JUG, Hakergaten and Reactive meetings. During the day I work for CSS Insurance – the biggest health insurance company in the country.</p>
      </div>
    ),
    abstract: (
      <div>
        <p>So, You like doing web applications, but JavaScript holds You back?</p>
        <p>You love Tools like Gulp, LessCSS, Sass, NPM and framework like AngularJS and React. But then You cry after refactoring of some JavaScripts and event tests do not help You.</p>
        <p>So... You no longer have to sacrifice Yourself and fight with bloody JavaScript errors all day long.</p>
        <p>You may use a decent language with type safety and still use all the power of the Web.</p>
        <p>So lets discuss ScalaJS a JavaScript transpiler and see how to: Efficiently and type safely develops web applications, Code AngularJS  and React applications using Scala, Use same data structures, interfaces and validation rules on client and server</p>
        <p>Finally, I will compare it to other similarsolutions like TypeScript, JSweet and discuss when and why could You use them.</p>
      </div>
    )
  },
  vacchi: {
    name: 'Edoardo Vacchi',
    company: 'UniCredit',
    pictureUrl: require('assets/images/speakers/vacchi.jpg'),
    color: '#799100',
    bio: (
      <div>
        <p>
          During my PhD in Computer Science at University of Milan I researched programming language design and implementation.
        </p>
        <p>
          Today I am member of the Research & Development Team at UniCredit.
        </p>
      </div>
    ),
    abstract: (
      <div>
        <p>Shapeless is a library for Generic Programming.</p>
        <p>Born as an experiment to push the boundaries of Scala's type-system, it now constitutes the base for many interesting libraries.</p>
        <p>Unfortunately, Shapeless suffers from the lack of beginner-oriented documentation.</p>
        <p>This talk, by way of simple analogies and a real-world example, aims at introducing the library along with the required prerequisites (such as Scala's implicit resolution mechanism).</p>
      </div>
    )
  },
  petronella: {
    name: 'Gabriele Petronella',
    company: 'buildo',
    pictureUrl: require('assets/images/speakers/petronella.jpg'),
    color: '#1e9481',
    bio: (
      <div>
        <p>I flip bits in a functional fashion.</p>
        <p>Building awesome things in scala, react and swift at <a href='http://buildo.io' target='_blank'>buildo</a></p>
        <p>Stackoverflow addict.</p>
        <p>Organizer of <a href='http://www.meetup.com/milano-scala-group' target='_blank'>Milano Scala Group</a> and Scala Italy</p>
        <p>When not coding or organizing events, I'm either on a plane or at the basketball court</p>
      </div>
    ),
    abstract: (
      <div>
        <p>Monad Transformers. "WAT?" "Exactly"</p>
        <p>In this session we'll see what monad transformers are, where their need comes from and how to use them effectively</p>
        <p>We'll walk through this rather complicated topic guided by real-life examples, with the noble intent of making our code
        more readable, maintainable and pleasant to work with</p>
        <p>WARNING</p>
        <p>This talk contains slides that some viewers may find disturbing, most of them containing words like "monad" and/or "functors"</p>
        <p>Listener discretion advised</p>
      </div>
    )
  }/*,
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
  }*/

};
