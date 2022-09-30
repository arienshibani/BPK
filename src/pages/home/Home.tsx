import React from "react";
import { PageTitle } from "../../components/PageWrapper/style";
import events from "./Events";
import { EventWrapper, BPKLogo } from "./style";
import { ContentWrapper } from "../../components/ContentWrapper";
import { EventCard } from "../../components/Card/EventCard";
import logo from "../../assets/bpk.png";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <ContentWrapper>
      <PageTitle>Bleikemyr Pistol Klubb</PageTitle>
      <BPKLogo src={logo} />
      <EventWrapper>
        {events.map(event => (
          <EventCard {...event} key={event.title}></EventCard>
        ))}
      </EventWrapper>
    </ContentWrapper>
  );
};

export default Home;
