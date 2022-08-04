import React from "react";
import { Layout } from "../templates/navigation/layout";
import { SplashComponent } from "../templates/splash";
import PortfolioSplash from "../images/portfolio.png";
import Container from "react-bootstrap/Container";
import styled from "styled-components";

const WorkList = styled.ul`
  & > li {
    padding-top: 0.3rem;
    padding-bottom: 0.4rem;
  }
`

const Portfolio = () => {
  return (
    <Layout>
      <SplashComponent
        title="Past Work"
        description="Working on technologies that can expand what people can think and do"
        backgroundImage={PortfolioSplash}
        long
        text_center
        text_thin
        background_center
      />
      <Container>
        <WorkList className="py-5 w-50 mx-auto">
          <li>Started coding at the age of 13.</li>
          <li>
            Started freelancing at the age of 15 where I designed static
            websites for startups.
          </li>
          <li>
            Single-handedly designed, developed and deployed inventory, staff
            and document management system for KLM Royal Dutch Airlines India at
            the age of 17.
          </li>
          <li>
            Founded a platform called Eniak to teach students how to code by
            building games and applications. It is now been used by over 3000
            students across India after winning the google startup weekend and
            raising a pre-seed round at the age of 20.
          </li>
          <li>
            Built an AI based app called Capshun which generates Instagram
            captions and hashtag recommendations for the photos you click or
            select. This app now has over 100k downloads.
          </li>
          <li>
            Helped shape the concept called “templating engine” which is a
            standard data structure that can be converted into different
            programming languages. This was used to run a social campaign called
            90min app challenge where over 1000 students have built their own
            android games in just 90mins as an introduction to coding.
          </li>
          <li>
            Managed a team of 5 to develop the initial MVP of Bhyve which has
            now raised over 100k in seed funding.
          </li>
          <li>
            Designed and delivered a 6 month course called full stack web
            development for IIDE (Indian institute of digital education). Also
            researched and developed a gamified learning system around it.
          </li>
          <li>
            Researching and developing a once-useable file system architecture
            to solve the problem of piracy in 3d printing marketplaces by owning
            the whole ecosystem under the umbrella called Shaping3D.
          </li>
          <li>
            CTO at Vefes. Building a platform to democratize renewable assets
            through a patented technology that maximizes returns.
          </li>
          <li>
            Bootstrapped a community of dark talent which has helped 15
            different companies to build tech products.
          </li>
          <li>
            Building and delivering a synchronous course for Cogoport on
            building tech products to 200 students from the most prestigious
            institutes of India (IIT, NIT, and IIIT).
          </li>
        </WorkList>
      </Container>
    </Layout>
  );
};

export default Portfolio;
