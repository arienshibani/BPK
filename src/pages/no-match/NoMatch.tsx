import React from "react";
import { ContentWrapper } from "../../components/ContentWrapper";
import { PageTitle } from "../../components/PageWrapper/style";

interface NoMatchProps {}

const NoMatch: React.FC<NoMatchProps> = () => {
  return (
    <ContentWrapper>
      <PageTitle>
        Denne siden eksisterer ikke..
        <span role="img" aria-label="Sad emoji">
          😢
        </span>{" "}
      </PageTitle>
    </ContentWrapper>
  );
};

export default NoMatch;
