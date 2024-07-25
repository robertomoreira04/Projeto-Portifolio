
const ProjectsContainer = () => {
  return <section className="projects-container">
    <h2>Projetos</h2>
    <p> • Lista de Tarefas 2.0: Considero meu principal projeto, que desenvolvi uma lista de tarefas totalmente funcional, contendo local storage, onde fica salvo os dados do usuário localmente. As tecnologias utilizadas foram: React.js, Typescript, SCSS e CSS Modules.
    </p>

    <p> • Myshop: Projeto de uma loja de e-commerce usando tecnologias como: Typescript, React, Styled-components, Redux. Uma loja capaz de adicionar e retirar itens do carrinho, mexendo com estados do React. 
    </p>

    <p> •  Pagina De Login: Página feita com a ferramente Vite + HTML, CSS e React. Uma página de login simulada no Frontend.
    </p>
    <a 
    href="https://github.com/robertomoreira04?tab=repositories" 
    className="btn" 
    target="_blank">
      Ver Projetos
    </a>
  </section>
}

export default ProjectsContainer;