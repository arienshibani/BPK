import React, { useState }  from "react";
import { ContentWrapper } from "../../components/ContentWrapper";
import { PageTitle } from "../../components/PageWrapper/style";
import { Card } from "../../components/Card";
import { VolunteerWrapper } from "./style";
import volunteers from "./Volunteers";

interface AboutUsInterface {}

const Medlemmer: React.FC<AboutUsInterface> = () => {
  const [members, setMembers]: any = useState([])

  if(members.length === 0){
    fetch("https://www.gamer.no/api/paradise/club/168877/members?", {
      "method": "GET",
    }).then(res => res.json())
    .then(data => setMembers(data))
  }

  const bjarle = {
    name: "Bjarle",
    picture: "/pictures/tom-cruise-main.jpg",
    about: "member",

  }

  if(members.length === 0){
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
  }
  return (
    <ContentWrapper>
      <PageTitle>Medlemmer</PageTitle>
      <br></br>
      <VolunteerWrapper>
        {members.data.map((el: any) => (
           <Card key={el.user.id} name={el.user.user_name} about={el.user.role} picture={el.user.image.url} />
        ))}
         <Card {...bjarle} key={bjarle.name} />
      </VolunteerWrapper>
    </ContentWrapper>
  );
};

export default Medlemmer;
