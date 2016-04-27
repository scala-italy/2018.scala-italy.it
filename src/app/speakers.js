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
    )
  },
  delafargue: {
    name: 'Clement Delafargue',
    company: 'Clever Cloud',
    pictureUrl: require('assets/images/speakers/delafargue.jpg'),
    color: '#C31048',
    bio: <div>CTO @ Clever Cloud. Functional Programmer</div>
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
    )
  },
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
  }

};
