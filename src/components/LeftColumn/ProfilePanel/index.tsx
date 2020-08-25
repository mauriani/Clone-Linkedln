import React from "react";

import Panel from "../../Panel";

import { Container } from "./styles";

const ProfilePanel: React.FC = () => {
  return (
    <Panel>
      <Container>
        <div className="profile-cover"></div>
        <img
          src="https://avatars3.githubusercontent.com/u/32397288?s=400&u=b6f0dcfb34bd19ec55f15b81c91fdc15f249c0ae&v=4"
          alt="Avatar"
          className="profile-picture"
        />
        <h1>Mauriani Maciel</h1>
        <h2>Software Engineer @ Rocketseat</h2>

        <div className="separator"></div>

        <div className="key-value">
          <span className="key">Quem viu seu perfil</span>
          <span className="value">1.558</span>
        </div>
        <div className="key-value">
          <span className="key">Viram sua publicação</span>
          <span className="value">388</span>
        </div>
      </Container>
    </Panel>
  );
};

export default ProfilePanel;
