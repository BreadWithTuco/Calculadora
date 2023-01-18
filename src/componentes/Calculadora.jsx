import "./css/Calculadora.css";

export function Calculadora() {
  return (
    <div className="conteiner">
      <div className="calculator">
        <div className="display">
          <h2>0</h2>
        </div>
        <div className="line"></div>
        <div className="contButtons">
          <div>
            <button className="buttons operationals">C</button>
            <button className="buttons operationals">()</button>
            <button className="buttons operationals">%</button>
            <button className="buttons operationals">/</button>
          </div>

          <div>
            <button className="buttons">7</button>
            <button className="buttons">8</button>
            <button className="buttons">9</button>
            <button className="buttons operationals">X</button>
          </div>

          <div>
            <button className="buttons">4</button>
            <button className="buttons">5</button>
            <button className="buttons">6</button>
            <button className="buttons operationals">-</button>
          </div>

          <div>
            <button className="buttons">1</button>
            <button className="buttons">2</button>
            <button className="buttons">3</button>
            <button className="buttons operationals">+</button>
          </div>

          <div>
            <button className="buttons">
              <p id="arrow">➤</p>
            </button>
            <button className="buttons">0</button>
            <button className="buttons">.</button>
            <button className="buttons operationals">=</button>
          </div>
        </div>
      </div>
    </div>
  );
}
