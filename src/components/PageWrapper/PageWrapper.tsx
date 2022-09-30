import React from "react";
import { Content, Footer, Wrapper } from "./style";
import { withRouter, RouteComponentProps, Switch, Route } from "react-router";
import { routes } from "../../routes";
import { NoMatch } from "../../pages/no-match";
import { NavBar } from "../Navbar";
import { Link } from "../Link";

interface PageWrapperProps extends RouteComponentProps {}

function PageWrapper(props: PageWrapperProps) {
  return (
    <>
      <Wrapper>
        <NavBar />
        <Content>
          <Switch>
            {routes.map(route => (
              <Route
                key={route.path}
                path={route.path}
                exact={route.exact}
                component={route.component}
              />
            ))}
            <Route component={NoMatch} />
          </Switch>
        </Content>
      </Wrapper>
      <Footer>
        <Link
          isWhite={true}
          underlineOnHover={true}
          href="https://steamcommunity.com/groups/BleikemyrPistolKlubb"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bleikemyr Pistol Klubb © 2020
        </Link>
      </Footer>
    </>
  );
}

export default withRouter(PageWrapper);
