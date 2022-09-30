import React from "react";
import { Accordion, Card } from "react-bootstrap";
import { ContentWrapper } from "../../components/ContentWrapper";
import { PageTitle } from "../../components/PageWrapper/style";

interface InfoProps { }

const Statutter: React.FC<InfoProps> = () => {
  return (
    <ContentWrapper>
      <PageTitle>Statutter</PageTitle>
      <br></br>
      <br></br>
      <p>
        Bleikemyr Pistol Klubb er en e-sports klubb av og for spillere fra
        Haugesund. Styret i BPK skal fungere som et høringsorgan for
        organisasjonen i saker som berører spillerene og medlemene i klubben, og
        skal være et kontaktpunkt for de som ønsker hjelp med forskjellige
        problemstillinger.{" "}
      </p>
      <br></br>

      <Accordion>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            § 1 - Formål
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <p>
                1. BPK står for Bleikemyr Pistolklubb. Klubben har til formål å
                ivareta og fremme interessene til spillerene, mht. deres
                velvære- og arbeidsvilkår både faglig og sosialt.
              </p>

              <p>
                2. "Styret" i BPK er klubbens høyeste formelle organ. Andre
                eksterne utvalg tilhørende klubben er underlagt Styret.
              </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            § 2 - Konstituering og allmøte
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <p>
                {" "}
                3. Styret i BPK er ikke fungerende før det har blitt konstituert
                gjennom et allmøte.
              </p>
              <p>
                {" "}
                4. Det skal holdes 1 allmøte hvert år. Det skal gjøres
                tidligst innen fire uker før den offisielle starten av året.
              </p>
              <p>
                {" "}
                5. Det sittende utvalget i Styret innkaller tilhørende medlemmer
                til allmøtene, med minst 2 ukers varsel.
              </p>
              <p>
                {" "}
                6. På allmøtet skal BPK settes sammen og verv/roller skal
                velges. Styret konstitueres på grunnlag av oppmøtte spillere.
              </p>
              <p> 7. Styret sitter til et nytt styremøte er konstituert.</p>
              <p> 8. Det skal også innkalles til allmøte når enten:</p>
              <ol type="a">
                <li> minst 5 medler i BPK krever det. </li>
                <li>
                  {" "}
                  det er fremmet forslag om endringer av BPK's statutter.{" "}
                </li>
              </ol>
              <p>
                {" "}
                9. Allmøtet skal ha en dagsorden. Foreløpig dagsorden skal
                gjøres kjent for medlemmene ved innkalling.
              </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="2">
            § 3 - Valg
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              <p>
                10. Verv velges for ett år, med unntak av leder og
                økonomiansvarlig som sitter i 2 år. Leder og økonomiansvarlig
                velges på allmøtet i januar. De resterende velges i både august
                og januar.
              </p>

              <p>
                11. BPK må ha en valgt leder, en valgt nestleder, en valgt
                økonomiansvarlig, en representant til bedriftskomiteen og et
                verneombud. Andre verv opprettes eller avvikles etter behov.
              </p>

              <p>
                12. Det er ingen begrensninger på hvor mange ganger hvert enkelt
                medlem av BPK kan stille til verv.
              </p>

              <p>
                13. Vedtak på allmøter fattes med et 2/3 flertall av oppmøtte
                medlemmer.
              </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="3">
            § 4 - Sammensetning og medlemskap
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="3">
            <Card.Body>
              <p>
                15. BPK skal, så langt det er mulig, bestå av representanter fra
                Haugesund og omegn. Dette for å oppnå best mulig kommunikasjon
                og samhold.
              </p>

              <p>16. Hvert medlem i et konstituert allmøte har én stemme.</p>

              <p>
                17. BPK er vedtaksdyktig dersom mer enn 50% av utvalgets
                medlemmer er tilstede. Vedtak fattes ved simpelt flertall. Ved
                stemmelikhet har leder dobbeltstemme.
              </p>

              <p>
                18. BPK bør avholde regelmessige møter hver 21. dag, men avgjør
                selv møtehyppigheten etter behov. Møteinnkalling med saksliste
                skal sendes ut én uke (7 dager) før møtet.
              </p>

              <p>
                19. Alle BPK møter skal protokollføres, og protokollen skal
                offentliggjøres så godt det lar seg gjøre.
              </p>

              <p>
                20. Leder forpliktes til å skrive halvårsrapporter som redegjør
                for BPK's aktiviteter. Disse skal offentliggjøres.
              </p>

              <p>
                21. Nye medlemmer kan tas inn underveis om det er ønskelig eller
                nødvendig.
              </p>

              <p>
                22. Medlemmer med verv eller konkrete tildelte roller forplikter
                å følge opp sine ansvar, og oppdatere de resterende medlemmene i
                klubben jevnlig og etter behov.
              </p>

              <p>
                23. Medlemmer med påtatte verv kan trekke seg fra sine verv med
                fire ukers varsel. Det holdes da et internt valg i BPK for å
                fylle det ledige vervet.
              </p>

              <p>
                24. Medlemmer kan trekke seg fra BPK ved å meddele dette til
                sittende leder.
              </p>

              <p>25. Alle medlemmer av BPK er møtepliktige.</p>

              <p>
                26. Fravær, uten gyldig årsak, to (2) møter på rad, vil alene
                være grunnlag for utmelding fra BPK. Hva som regnes som gyldig
                fravær avgjøres av leder.
              </p>

              <p>
                27. Mistillit til medlem av BPK kan fremmes av medlemmene.
                Mistillitsforslaget skal behandles, og må vedtas med 2/3
                flertall på neste allmøte.
              </p>

              <p>
                28. Alle medlemmer har krav på en attest for sin deltagelse,
                etter endt engasjement. Denne skrives av styrets nestleder i
                samråd med BPKs sittende leder.
              </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="4">
            § 5 - Reglementsendringer
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="4">
            <Card.Body>
              <p>
                29. Statuttene 1-30 er gjeldende fra 30.08.2021. Det sittende
                styret har ansvaret for iverksettelsen og håndhevelsen av disse
                statuttene.
              </p>

              <p>
                30. Statuttene kan KUN endres av et allmøte for medlemer i BPK.
                Et vedtak om en endring må ha oppnådd 2/3 flertall blant de
                tilstedeværende stemmeberettigede.
              </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </ContentWrapper>
  );
};

export default Statutter;
