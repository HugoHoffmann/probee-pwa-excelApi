import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.jpg";
// import Notifications from '~/components/Notifications';
import { Container, Content, Profile } from "./styles";

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <Link to="/">
            <img src={logo} alt="Logo probee" />
          </Link>
          <Link to="/users">Usuários</Link>
        </nav>
        <aside>
          <Profile>
            <div>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              src={"https://api.adorable.io/avatars/50/abott@adorable.png"}
              alt=""
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
