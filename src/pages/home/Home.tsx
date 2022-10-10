import React, { useState } from "react";
import { PageTitle } from "../../components/PageWrapper/style";
import events from "./Events";
import { EventWrapper, BPKLogo } from "./style";
import { ContentWrapper } from "../../components/ContentWrapper";
import { EventCard } from "../../components/Card/EventCard";
import logo from "../../assets/bpk.png";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const [upcomingGames, setUpcomingGames]: any = useState([])

  if(upcomingGames.length === 0){
    fetch("https://www.gamer.no/api/paradise/club/168877/matches/upcoming?filter%5Bcompetition%5D%5Bgame%5D%5Bid%5D%5B%5D=2&ffa=0&page=1", {"method": "GET"})
    .then(res => res.json())
    .then(data => setUpcomingGames(data))
  }
  
  if(upcomingGames.length === 0){
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
  }
  return (
    <ContentWrapper>
      <PageTitle>Bleikemyr Pistol Klubb</PageTitle>
      <BPKLogo src={logo} />
      <EventWrapper>
        {upcomingGames.data.map((el: any) => (
           <EventCard key={el.id} text={el.competition.name} title={el.away_signup.display_name} author="BPK" eventAdress={el.url} publishedDate={el.start_time} eventDate={el.start_time}/>
        ))}
      </EventWrapper>
    </ContentWrapper>
    
  );
};


export default Home;
