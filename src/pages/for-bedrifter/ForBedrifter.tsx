import React from "react";
import { ContentWrapper } from "../../components/ContentWrapper";
import { Link } from "../../components/Link";
import { PageTitle } from "../../components/PageWrapper/style";
import styled from "styled-components";
import bedpressPic from "../../assets/bedpress.jpg";
import steamLogo from "../../assets/steam.png";

interface ForCompaniesProps {}

export const BedpressImage = styled.img`
  width: 100%;
  height: 10em;
  object-fit: cover;
  margin-bottom: 2em;
  box-shadow: 1px 1px 6px #000;
`;

export const SteamLogo = styled.img`
  width: 1em;
  height: 1em;
  margin-left: 0.5em;
`;

const ForBedrifter: React.FC<ForCompaniesProps> = () => {
  return (
    <ContentWrapper>
      <PageTitle>For Bedrifter</PageTitle>
      <br></br>
      <p>
        Bedriftskomitéen til BPK tilbyr hjelp til din bedrift i form av
        markedsføring og økt eksponering for din virksomhet. I form av ulike
        tjenester som å få din bedrifts logo på BPK's lagtrøye, reklame på
        nettsiden vår eller deres bedriftsnavn i våre in-game nick kan vi tilby
        eksponering til optill flere tusen spill og data interriserte mennesker
        på nettet.
        <br /> <br />
      </p>

      <BedpressImage
        src={bedpressPic}
        alt="Presentation at Media City Bergen"
      />

      <p>
        Vis at din bedrift er moderne, og bryr seg om e-sports miljøet i
        Haugaland ved å inngå sponsoravtaler med BPK!
        <br /> <br />
      </p>

      <h5>Kontakt oss!</h5>

      <p>
        <br />
        <Link
          style={{ marginLeft: "2em" }}
          href="https://steamcommunity.com/groups/BleikemyrPistolKlubb"
          rel="noopener noreferrer"
        >
          <b>Steam</b>
          <SteamLogo src={steamLogo} alt="SteamLogo" />
        </Link>

        <br />
      </p>
    </ContentWrapper>
  );
};

export default ForBedrifter;
