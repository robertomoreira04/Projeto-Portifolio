import '../styles/components/socialnetworks.sass';

import {FaLinkedinIn, FaGithub} from "react-icons/fa";

const socialNetworks =[
  { name: 'linkedin', icon: <FaLinkedinIn /> },
  { name: 'github', icon: <FaGithub /> },
];

const SocialNetworks = () => {
  return (
    <section id="social-networks">
      <a href=""><FaLinkedinIn /></a>
      <a href=""><FaGithub /></a>
    </section>
  )
}

export default SocialNetworks;