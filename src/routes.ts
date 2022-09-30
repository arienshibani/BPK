import { ComponentType } from "react";
import { Home } from "./pages/home";
import { Statutter } from "./pages/statutter";
import { ForBedrifter } from "./pages/for-bedrifter";
import { Medlemmer } from "./pages/om-oss";

export interface NavigationRoute {
  text: string;
  exact?: boolean;
  path: string;
  component: ComponentType;
}

export const routes: NavigationRoute[] = [
  {
    text: "🏠 Hjem",
    path: "/",
    component: Home,
    exact: true
  },
  {
    text: "📖 Statutter",
    path: "/statutter",
    component: Statutter
  },
  {
    text: "📈 For bedrifter",
    path: "/for-bedrifter",
    component: ForBedrifter
  },
  {
    text: "👨‍👨‍👦 Medlemmer",
    path: "/medlemmer",
    component: Medlemmer
  }
];
