import SocialNetworks from "./SocialNetworks";

import Avatar from "../img/foto-minha.jpg";

import '../styles/components/sidebar.sass';

import InformationContainer from './InformationContainer';

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Roberto Moreira" />
      <p className="title">Desenvolvedor Frontend</p>
      <SocialNetworks />
      <InformationContainer />

      <a href="https://drive.google.com/uc?export=download&id=1g9GmRkujngDcKjLQPdTIheQXXqt3QvJE"
       className="btn" >
        Download Currículo
        </a>

    </aside>
  )
}

export default Sidebar;
