export interface VolunteersInterface {
  name: string;
  picture: string;
  about: string;
  department: string;
}

const volunteers: VolunteersInterface[] = [
  {
    name: "SHLEEP",
    picture: "/pictures/tom-cruise-main.jpg",
    about: "Leder",
    department: "Styret"
  },
  {
    name: "Gilli Knas",
    picture: "/pictures/tom-cruise-main.jpg",
    about: "Nestleder",
    department: "Styret"
  },
  {
    name: "Halloslutt",
    picture: "/pictures/tom-cruise-main.jpg",
    about: "Medlem",
    department: "Styret"
  },
  {
    name: "Dubhead",
    picture: "/pictures/tom-cruise-main.jpg",
    about: "Medlem",
    department: "Styret"
  },
  {
    name: "Ombombolele",
    picture: "/pictures/tom-cruise-main.jpg",
    about: "Medlem",
    department: "Styret"
  },
  {
    name: "Lucker Dog",
    picture: "/pictures/tom-cruise-main.jpg",
    about: "Medlem",
    department: "Styret"
  },
  {
    name: "Bjarle",
    picture: "/pictures/tom-cruise-main.jpg",
    about: "Medlem",
    department: "Medlem / Økonomiansvarlig"
  }
];

export default volunteers;
