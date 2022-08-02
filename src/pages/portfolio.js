import React from "react";
import { Layout } from "../templates/navigation/layout";
import { SplashComponent } from "../templates/splash";
import PortfolioSplash from "../images/portfolio.png";

const Portfolio = () => {
  return (
    <Layout>
      <SplashComponent
        heading="Portfolio"
        title="Making People Happy"
        description="We're proud to have been among the first investors in 85 category-defining consumer technology companies."
        backgroundImage={PortfolioSplash}
        long
        text_center
        text_thin
        background_center
      />
    </Layout>
  );
};

export default Portfolio;
