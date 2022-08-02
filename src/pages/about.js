import React from "react";
import styled from "styled-components";
import { Layout } from "../templates/navigation/layout";
import Container from "react-bootstrap/Container";
import Portfolio from "../images/portfolio_portrait.png";
import Knowledge from "../images/knowledge_portrait.jpeg";
import RightArrow from "../images/footer_right_arrow.svg";
import AboutUsSplash from "../images/aboutUsBanner.svg";
import { SplashComponent } from "../templates/splash";

const YellowDiv = styled.div`
  background-color: #f8f7ec;
  border-radius: 5px;
  gap: 1em;
`;

const Image = styled.img`
  width: 100%;
  @media screen and (min-width: 768px) {
    max-width: 30vw;
    height: 100%;
    width: 40%;
  }
`;

const FooterNavigationDiv = styled.div`
  gap: 1em;

  & > img {
    width: 20%;
    transition: 0.5s ease;
  }

  &:hover > img {
    transform: translateX(10px);
  }

  @media screen and (min-width: 768px) {
    & > img {
      width: 50%;
    }
  }
`;

const AboutUs = (props) => {
  return (
    <Layout>
      <SplashComponent
        heading="About"
        title={["India's Consumer", <br />, "Technology"]}
        description="Deep specialization. Broad insights. Superior returns. We help
          founders turn insights and prototypes into the next generation of
          iconic consumer technology companies."
        backgroundImage={AboutUsSplash}
      />
      <Container
        fluid="md"
        className="d-flex flex-column py-5"
        style={{ rowGap: "20px" }}
      >
        <YellowDiv className="d-flex flex-column flex-md-row p-3 p-md-5">
          <Image
            src={Portfolio}
            alt="Portfolio"
            className="rounded-3 align-self-center"
          />
          <div className="d-flex flex-column justify-content-center px-2 px-md-5">
            <h2>Fine Consumer Tech</h2>
            <p>
              Currently, I am the co-founder at Eniak Edutech Pvt Ltd. With
              Eniak, I aim to build tools that enable students to use computers
              in a masterful way, which can expand how they think, express,
              understand, and learn everything else. We do this by
              decentralizing power to educators by building and abstracting
              tools that augment the best content from wherever with an
              underlying adaptive learning framework.
            </p>
            <p>
              I am also working on building Shaping3D, Vefes, Notshy, Untaboo.
            </p>
            <p>
              Previously, I have built and consulted for over 25 companies
              including KLM Royal Dutch Airlines, Capshun, Main Bhi Ambani, IIDE
              - Indian Institute of Digital Education, Manyavar and many more to
              expand what they can think and do with technology.
            </p>
          </div>
        </YellowDiv>
        <YellowDiv className="p-3 p-md-5">
          <Image
            src={Knowledge}
            alt="Knowledge"
            className="rounded-3 float-md-end mb-3 mb-md-0 ms-md-3"
          />
          <div className="px-2 px-md-5">
            <h2>Never too early</h2>
            <p>
              I had written this in August 2021, So its a bit outdated and a lot
              of things have happened after that but its a good start.
            </p>
            <p>
              "Any sufficiently advanced technology is indistinguishable from
              magic” - Arthur Clarke
            </p>
            <p>
              Over time, developed a fascination with technologies that can
              expand how people think, learn, understand, and create in ways
              currently impossible. This fascination has led me to explore
              theories by expressing them in real-world systems, which produces
              insights I use to improve the theories, which I use in turn to
              improve the systems. This process has caused me to work on a
            </p>
            <p>
              As a 14-year-old of the orthodox Indian education system - I had
              no clue whatsoever about anything remotely related to coding. The
              Summer break that year, however, I stumbled upon a Youtube Video
              on how to build a web browser using Visual Studio. I spent the
              entire day experimenting and building my own web browser while
              implicitly learning the foundations of programming. From that day
              on, a newfound curiosity had emerged from within, I had uncovered
              the method of self-learning whose end product lay miles ahead of
              what the confines of classroom education offered.
            </p>
            <p>
              The obsession that saw me spend hours in self-learning was noticed
              by a family friend who offered me a proposition to build a website
              for his business at the age of 15. This combined with the personal
              projects I tinkered with, most of them clones of the websites I
              admired, led me to learn frontend web design, backend web
              development, and database management.
            </p>
            <p>
              To expand my knowledge and test out my skills, I worked with
              various start-ups in the education and finance industries to
              design and develop websites for them. It earned me some
              credibility and this led me as a 17-year-old to single-handedly
              design, develop, test, deploy and manage a complete management
              system for one of the world's largest airlines - KLM Royal Dutch
              Airlines.
            </p>
            <p>
              KLM landed me my first large scale project - to build an efficient
              management system for their Indian segment which handles monthly
              reports, staff information, audits, and general documents. KLM
              still relies on my consultancy for the upkeep of their web
              application today.
            </p>
            <p>
              I, through the process of self-learning and building various
              technological solutions, realized that building effective
              meta-learning strategies is more important than the actual skill
              itself. I started researching different environments, techniques,
              and tools that maximize learning which sparked my interest in
              curriculum design and education as a whole.
            </p>
            <p>
              As an 18-year-old, contrary to what people generally do, I worked
              on real-world projects for companies before enrolling for a
              bachelor's degree in Computer Science. This transition helped me
              to see the disparity between what is needed, and what is taught in
              the universities. I stumbled upon a start-up idea competition
              called “Google Startup Weekend”. This was the start of our
              project, “ITK (Information Technology Kindergarten)”, which aimed
              to innovatively teach children computational thinking and
              programming from as early as 3rd grade. We won that competition
              and went on to introduce over 1000 kids to coding in the very next
              year across India.
            </p>
            <p>
              In the final year of my degree college, I got the opportunity to
              head the entrepreneurship cell. My job was to build a platform for
              students to explore innovative business ideas, with a strong
              infrastructure and community support from the college. During my
              tenure, I built a community of over 100 members, trained and
              mentored 100+ students, built 10 technology solutions, and in that
              process developed 3 startups through the community itself.
            </p>
            <p>
              As the head of E-Cell, I started a program called
              StartupXP(Startup Experience) which consisted of a community of
              individuals who were selected based on their passion to solve
              real-world problems outside the confines of retention of
              theoretical knowledge judged by marks and grades.
            </p>
            <p>
              I realized the fastest and easiest way to expose them to
              real-world problems was to identify problems internally within the
              college and solve them through technology. After multiple meetings
              with the Principal and other senior faculties, I came up with 8
              different education management solutions. These solutions saved
              the college 15,000+ hours of administrative work involving over 1
              Lakh papers in a year collectively for a volume of 12,000 students
              and 250 staff. In this process, I conducted over 20 workshops to
              teach students concepts around project management, design, and
              development required to build these solutions, while personally
              working on 2 of them - Admission and Feedback Management System.
              The Feedback Management System was later open-sourced and given to
              multiple other educational institutions to streamline their
              feedback process.
            </p>
            <p>
              The next step for the community was to expand its horizons and
              work with other departments and for that, I got in touch with
              Anushka Menon. She is an information designer with a lot of
              experience in the education sector. She was also working on a
              project called Thinking Nature. Thinking Nature was a research and
              product development project that strives to build a stronger
              relationship with nature. I selected 10 students who were mentored
              by Anushka. Together, they worked on understanding a subject
              called Biomimicry (take inspiration from nature and emulate its
              workings). They followed a methodology to research the topic in a
              wholesome way. This included - Observation, Learning, Creating
            </p>
          </div>
        </YellowDiv>
        <FooterNavigationDiv className="align-self-end d-flex align-items-center justify-content-end">
          <h2 className="m-0">Companies</h2>
          <img src={RightArrow} alt="right_arrow" />
        </FooterNavigationDiv>
      </Container>
    </Layout>
  );
};

export default AboutUs;
