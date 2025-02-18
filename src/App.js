import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Se desejar adicionar estilos personalizados

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#home">André Luis Francisco Junior</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Alterna navegação">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="#about">Sobre Mim</a></li>
              <li className="nav-item"><a className="nav-link" href="#education">Educação</a></li>
              <li className="nav-item"><a className="nav-link" href="#technologies">Tecnologias</a></li>
              <li className="nav-item"><a className="nav-link" href="#experience">Experiência</a></li>
              <li className="nav-item"><a className="nav-link" href="#projects">Projetos</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact">Contato</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Seção Hero */}
      <header id="home" className="jumbotron jumbotron-fluid text-center bg-primary text-white" data-aos="fade-down" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
        <div className="container">
          <h1 className="display-4">Olá, eu sou André</h1>
          <p className="lead">Desenvolvedor FullStack &amp; Machine Learning</p>
          <p>Criando soluções em inteligencia artificial e desenvolvimento web.</p>
        </div>
      </header>

      {/* Sobre Mim */}
      <section id="about" className="container my-5" data-aos="fade-up">
        <h2>Sobre Mim</h2>
        <p>
          Sou formado em Ciência da Computação pela UDESC/Joinville e possuo Pós-Graduação em Desenvolvimento FullStack pela Universidade Descomplica. Tenho experiência em Machine Learning e Visão Computacional, desenvolvendo soluções com técnicas de deep learning e processamento de imagens. Também atuo com desenvolvimento web utilizando tecnologias modernas para criar aplicações completas e escaláveis.
        </p>
      </section>

      {/* Educação */}
      <section id="education" className="bg-light py-5" data-aos="fade-up">
        <div className="container">
          <h2>Educação</h2>
          <ul>
            <li>
              <strong>Bacharelado em Ciência da Computação</strong> – Universidade do Estado de Santa Catarina/Joinville (Fev/2017 – Ago/2023)
            </li>
            <li>
              <strong>Pós-Graduação em Desenvolvimento FullStack</strong> – Universidade Descomplica (Ago/2023 – Out/2024)
            </li>
          </ul>
        </div>
      </section>

{/* Tecnologias */}
<section id="technologies" className="container my-5" data-aos="fade-up">
  <h2>Tecnologias</h2>
  <div className="row">
    {/* Computer Vision */}
    <div className="col-md-4">
      <h4>Computer Vision</h4>
      <ul>
        <li>Python</li>
        <li>PyTorch</li>
        <li>OpenCV</li>
        <li>Keras</li>
        <li>NumPy</li>
        <li>SciKit-Learn</li>
        <li>CNNs</li>
        <li>Deep Learning</li>
        <li>Data Analysis</li>
      </ul>
    </div>
    {/* Full Stack */}
    <div className="col-md-4">
      <h4>Full Stack</h4>
      <ul>
        <li>Java</li>
        <li>Spring Boot</li>
        <li>JavaScript</li>
        <li>HTML/CSS</li>
        <li>Angular</li>
        <li>Bootstrap</li>
        <li>Banco de Dados (SQL)</li>
      </ul>
    </div>

    {/* Outros */}
    <div className="col-md-4">
      <h4>Outros</h4>
      <ul>
        <li>C/C++</li>
        <li>Go</li>
        <li>Hyperledger</li>
        <li>Docker</li>
        <li>IoT</li>
        <li>Controle de Versão (Git e GitHub)</li>
      </ul>
    </div>
  </div>
</section>


      {/* Experiência */}
      <section id="experience" className="bg-light py-5" data-aos="fade-up">
        <div className="container">
          <h2>Experiência</h2>
          <div className="mb-4">
            <h4>Desenvolvedor de Machine Learning e Visão Computacional (SENAI – ISI)</h4>
            <p>
              Desenvolvimento de soluções inovadoras utilizando técnicas de deep learning e processamento de imagens para resolver desafios reais. Responsável pela implementação de algoritmos de segmentação, detecção de objetos e otimização de modelos para aplicações práticas.
            </p>
            <p><strong>Tecnologias:</strong> Python, PyTorch, OpenCV, Keras, Bash</p>
          </div>
          <div className="mb-4">
            <h4>Desenvolvedor de Blockchain (Iniciação Científica, UDESC)</h4>
            <p>
              Implementação de soluções em Hyperledger Fabric para armazenamento seguro de dados de veículos, contribuindo para o cálculo de credibilidade veicular. Desenvolvimento de contratos inteligentes e integração com tecnologias como Docker e IoT.
            </p>
            <p><strong>Tecnologias:</strong> Hyperledger, Go, Python, Docker, IoT, Git</p>
          </div>
        </div>
      </section>

      {/* Projetos */}
      <section id="projects" className="container my-5" data-aos="fade-up">
        <h2>Projetos</h2>
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card shadow-sm">
              {/* <img src="https://via.placeholder.com/600x300" className="card-img-top" alt="Paralelização da Descoberta de Senha" /> */}
              <div className="card-body">
                <h5 className="card-title">Paralelização da Descoberta de Senha</h5>
                <p className="card-text">
                  Projeto que utiliza a função crypt do Linux para descobrir uma senha por força bruta, paralelizando o processo para aproveitar de 1 a 8 núcleos de duas máquinas em rede.
                </p>
                <a href="https://github.com/Andre-LFJ/OPRP/" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Ver Projeto</a>
              </div>
            </div>
          </div>
          {/* Adicione mais projetos aqui se necessário */}
          
        </div>
      </section>

      

      {/* Contato */}
      <section id="contact" className="bg-dark text-white py-5" data-aos="fade-up">
        <div className="container">
          <h2>Contato</h2>
          <p>Entre em contato pelos seguintes canais:</p>
          <ul className="list-unstyled">
            <li><strong>Email:</strong> <a href="mailto:andrejuniorfrancisco@gmail.com" className="text-white">andrejuniorfrancisco@gmail.com</a></li>
            <li><strong>Telefone:</strong> (47) 98449-2422</li>
            <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/andre-lfj/" className="text-white" target="_blank" rel="noopener noreferrer">Andre-LFJ</a></li>
            <li><strong>GitHub:</strong> <a href="https://github.com/Andre-LFJ" className="text-white" target="_blank" rel="noopener noreferrer">Andre-LFJ</a></li>
            <li><strong>WhatsApp:</strong> <a href="https://wa.me/5547984492422?text=Ol%C3%A1+Andr%C3%A9%2C+gostei+do+seu+curr%C3%ADculo+e+gostaria+de+conversar%21" className="text-white" target="_blank" rel="noopener noreferrer">Converse comigo</a></li>
          </ul>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="bg-secondary text-white text-center py-3">
        <div className="container">
          <p>© 2025 André Luis Francisco Junior. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
