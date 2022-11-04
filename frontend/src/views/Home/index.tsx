import "./style.css";

import Header from "../../components/Header";

function Home() {
  return (
    <>
      <Header />
      <div className="body">
        <div className="body-title">
          <h2>Bem vindo a página da loja AutoParts</h2>
        </div>
        <div className="body-description">
          <span>Aqui você escreve uma introdução para sua página, onde pode cadastrar e mostrar os produtos que você possui, os clientes podem verificar e entrar em contato para fazer um orçamento. Futuramente poderão efetuar a compra direto pelo site.</span>
        </div>
      </div>

      <div className="products">
        <h3>Aqui os seus produtos serão mostrados</h3>
        <div className="products-box">
          <ul className="products-box_list">
            <li className="products-box_list_item"><strong>Título</strong></li>
            <li className="products-box_list_item">Descrição</li>
            <li className="products-box_list_item">Valor</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Home;