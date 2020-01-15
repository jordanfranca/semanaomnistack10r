import React from 'react';
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';
//Componente: Bloco isolado de HTML, CSS e JS o qual não interfere no restante da aplicação
// Estado: informações mantidas pelo componente (lembrar imutabilidade)
// Propriedade: Informações que um componente pai passsa para componente filho

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Techs</label>
            <input name="techs" id="techs" required />
          </div>

          <div className="input-group">
              <div className="input-block">
                <label htmlFor="latitude">Latitude</label>
                <input name="latitude" id="latitude" required />

              </div>
              <div className="input-block">
                <label htmlFor="longitude">Longitude</label>
                <input name="longitude" id="longitude" required />

              </div>
          </div>

          <button type="submit" >Enviar</button>

        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/6255332?s=460&v=4" alt="Jordã França" />
              <div className="user-info">
                <strong>Jordã França</strong>
                <span>React, PHP</span>
              </div>
            </header>
            <p>Programador desde 2009 atuando com PHP + MySQL + HTML5 + CSS e JS.</p>
            <a href="https://github.com/jordanfranca" target="_blank">Acessar o perfil</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/6255332?s=460&v=4" alt="Jordã França" />
              <div className="user-info">
                <strong>Jordã França</strong>
                <span>React, PHP</span>
              </div>
            </header>
            <p>Programador desde 2009 atuando com PHP + MySQL + HTML5 + CSS e JS.</p>
            <a href="https://github.com/jordanfranca" target="_blank">Acessar o perfil</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/6255332?s=460&v=4" alt="Jordã França" />
              <div className="user-info">
                <strong>Jordã França</strong>
                <span>React, PHP</span>
              </div>
            </header>
            <p>Programador desde 2009 atuando com PHP + MySQL + HTML5 + CSS e JS.</p>
            <a href="https://github.com/jordanfranca" target="_blank">Acessar o perfil</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/6255332?s=460&v=4" alt="Jordã França" />
              <div className="user-info">
                <strong>Jordã França</strong>
                <span>React, PHP</span>
              </div>
            </header>
            <p>Programador desde 2009 atuando com PHP + MySQL + HTML5 + CSS e JS.</p>
            <a href="https://github.com/jordanfranca" target="_blank">Acessar o perfil</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
