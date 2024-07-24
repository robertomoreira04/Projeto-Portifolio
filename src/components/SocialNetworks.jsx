import '../styles/components/socialnetworks.sass';

import {FaLinkedinIn, FaGithub} from "react-icons/fa";

const SocialNetworks = () => {
  return (
    <section id="social-networks">
      <a className='social-btn' id='linkedin'
      href="https://www.linkedin.com/in/roberto-moreira-3b6ba3290" target='_blank'>
        <FaLinkedinIn />
      </a>
      <a className='social-btn' id='github'
      href="https://github.com/robertomoreira04" target='_blank'>
        <FaGithub />
      </a>
    </section>
  )
}

export default SocialNetworks;
