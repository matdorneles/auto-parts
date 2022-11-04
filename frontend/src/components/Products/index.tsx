import { useState ,useEffect } from "react";
import "./style.css";
import axios from "axios";


function Products() {
  const [produtos, setProdutos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true); // True if IT IS loading

  useEffect(() => {
    axios.get('http://localhost:3333/item')
      .then(res => {
        console.log(res)
        setProdutos(res.data)
      })
      .catch(err => {
        console.log(err)
      })

      setLoading(false);
  }, [])
  
  if(loading) {
    return (
      <div className="loading">
        <h5 className="loading-text">
          <strong>Carregando Produtos</strong>
          <span className="loading-spinner"></span>
        </h5>
      </div>
    )
  }

  return (
    <>
      <div className="products">
        <h3>Aqui os seus produtos serão mostrados</h3>
        <div className="products-box">
        {produtos.map(produto => {
          return(
            <ul className="products-box_list">
              <li className="products-box_list_image"><img src={`http://localhost:3333/files/${produto.image}`} /></li>
              <li key={produto.id} className="products-box_list_item"><strong>{produto.title}</strong></li>
              <li className="products-box_list_item">{produto.description}</li>
              <li className="products-box_list_item">{`R$${produto.price}`}</li>
            </ul>
          )
        })}
          
        </div>
      </div>

    </>
  );
}

export default Products;