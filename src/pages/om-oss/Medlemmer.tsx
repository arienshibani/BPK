import React from "react";
import { ContentWrapper } from "../../components/ContentWrapper";
import { PageTitle } from "../../components/PageWrapper/style";
import { Card } from "../../components/Card";
import { VolunteerWrapper } from "./style";
import volunteers from "./Volunteers";

interface AboutUsInterface {}

const Medlemmer: React.FC<AboutUsInterface> = () => {
  return (
    <ContentWrapper>
      <PageTitle>Medlemmer</PageTitle>
      <br></br>
      <VolunteerWrapper>
        {volunteers.map(vol => (
          <Card {...vol} key={vol.name} />
        ))}
      </VolunteerWrapper>
    </ContentWrapper>
  );
};

export default Medlemmer;
