export interface EventsInterface {
  title: string;
  text: string;
  eventAdress: string;
  eventDate: Date;
  publishedDate: Date;
  author: string;
}

const events: EventsInterface[] = [
  {
    title: "Telia Ligaen: Runde 1",
    text: "MAJOR Academy vs BPK",
    eventAdress: "https://www.gamer.no/turneringer/kamp/164908/",
    eventDate: new Date("September 2, 2021 20:00:00"),
    publishedDate: new Date("September 2, 2021 20:00:00"),
    author: "Arien Shibani"
  },
  {
    title: "Telia Ligaen: Runde 2",
    text: "Vellagret vs BPK",
    eventAdress: "https://www.gamer.no/turneringer/kamp/164912/",
    eventDate: new Date("September 9, 2021 20:00:00"),
    publishedDate: new Date("September 2, 2021 20:00:00"),
    author: "Arien Shibani"
  },
  {
    title: "Telia Ligaen: Runde 3",
    text: "Vennskapsgjengen vs BPK",
    eventAdress: "https://www.gamer.no/turneringer/kamp/164915/",
    eventDate: new Date("September 16, 2021 20:00:00"),
    publishedDate: new Date("September 2, 2021 20:00:00"),
    author: "Arien Shibani"
  },
  {
    title: "Telia Ligaen: Runde 4",
    text: "BRUA Esport vs BPK",
    eventAdress: "https://www.gamer.no/turneringer/kamp/164919/",
    eventDate: new Date("September 23, 2021 20:00:00"),
    publishedDate: new Date("September 2, 2021 20:00:00"),
    author: "Arien Shibani"
  },
  {
    title: "Telia Ligaen: Runde 5",
    text: "teamname vs BPK",
    eventAdress: "https://www.gamer.no/turneringer/kamp/164928/",
    eventDate: new Date("September 30, 2021 20:00:00"),
    publishedDate: new Date("September 2, 2021 20:00:00"),
    author: "Arien Shibani"
  },
  {
    title: "Telia Ligaen: Runde 6",
    text: "The Simps vs BPK",
    eventAdress: "https://www.gamer.no/turneringer/kamp/164930/",
    eventDate: new Date("October 21, 2021 20:00:00"),
    publishedDate: new Date("September 2, 2021 20:00:00"),
    author: "Arien Shibani"
  },
  {
    title: "Telia Ligaen: Runde 7",
    text: "Gamle Saoe vs BPK",
    eventAdress: "https://www.gamer.no/turneringer/kamp/164930/",
    eventDate: new Date("October 28, 2021 20:00:00"),
    publishedDate: new Date("September 2, 2021 20:00:00"),
    author: "Arien Shibani"
  },
  {
    title: "Telia Ligaen: Runde 8",
    text: "Easy Crew vs BPK",
    eventAdress: "https://www.gamer.no/turneringer/kamp/164948/",
    eventDate: new Date("November 11, 2021 20:00:00"),
    publishedDate: new Date("September 2, 2021 20:00:00"),
    author: "Arien Shibani"
  }
];

export default events;
