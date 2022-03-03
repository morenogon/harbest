import { Link } from 'react-router-dom';
import '../styles/Home.scss';

const Home = () => {
  return (
    <div className="home">
      <img src='https://harbestmarket.com/wp-content/uploads/2020/06/harbest-market-1.png' alt='' />
      <div>
        <h2>De la huerta a tu restaurante</h2>
        <h3 className='home__description'>Compra frutas y hortalizas directamente a agricultores sin intermediarios</h3>
      </div>
      <Link className="home__link" to='/products'>Explorar</Link>
    </div>
  )
}

export default Home;