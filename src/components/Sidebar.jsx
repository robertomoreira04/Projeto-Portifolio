import SocialNetworks from "./SocialNetworks";

import Avatar from "../img/foto-minha.jpg";

import '../styles/components/sidebar.sass';

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Roberto Moreira" />
      <p className="title">Desenvolvedor</p>
      <SocialNetworks />
      <a href="" className="btn">Download Currículo</a>
    </aside>
  )
}

export default Sidebar;
