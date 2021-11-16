import React from 'react';
import './home.css';
import Product from './Product';

function Home () {
  return (
    <div>
      <div className="home">

        <img src='https://4efdz8u31dn2ay9to14kzc81-wpengine.netdna-ssl.com/wp-content/uploads/2018/04/e-commerce-blog-post-1024x683.jpg' alt='home' className='home-image'></img>

        <div className="home-product-row">
          <Product
            title='LEGO Star Wars: The Mandalorian The Child 75318 Building Kit; Collectible Buildable Toy Model for Ages 10+, New 2020 (1,073 Pieces)'
            price='$63.00'
            rating={5}
            image='https://m.media-amazon.com/images/I/71AqC2pFstL._AC_SX425_.jpg'
            />
            <Product
            title='LEGO Star Wars: The Mandalorian The Child 75318 Building Kit; Collectible Buildable Toy Model for Ages 10+, New 2020 (1,073 Pieces)'
            price='$63.00'
            rating={5}
            image='https://m.media-amazon.com/images/I/71AqC2pFstL._AC_SX425_.jpg'
            />

        </div>

        <div className="home-product-row">
        <Product
            title='LEGO Star Wars: The Mandalorian The Child 75318 Building Kit; Collectible Buildable Toy Model for Ages 10+, New 2020 (1,073 Pieces)'
            price='$63.00'
            rating={5}
            image='https://m.media-amazon.com/images/I/71AqC2pFstL._AC_SX425_.jpg'
            />
            <Product
            title='LEGO Star Wars: The Mandalorian The Child 75318 Building Kit; Collectible Buildable Toy Model for Ages 10+, New 2020 (1,073 Pieces)'
            price='$63.00'
            rating={5}
            image='https://m.media-amazon.com/images/I/71AqC2pFstL._AC_SX425_.jpg'
            />
            <Product
            title='LEGO Star Wars: The Mandalorian The Child 75318 Building Kit; Collectible Buildable Toy Model for Ages 10+, New 2020 (1,073 Pieces)'
            price='$63.00'
            rating={5}
            image='https://m.media-amazon.com/images/I/71AqC2pFstL._AC_SX425_.jpg'
            />
        </div>
        <div className="home-product-row">
        <Product
            title='LEGO Star Wars: The Mandalorian The Child 75318 Building Kit; Collectible Buildable Toy Model for Ages 10+, New 2020 (1,073 Pieces)'
            price='$63.00'
            rating={5}
            image='https://m.media-amazon.com/images/I/71AqC2pFstL._AC_SX425_.jpg'
            />
            <Product
            title='LEGO Star Wars: The Mandalorian The Child 75318 Building Kit; Collectible Buildable Toy Model for Ages 10+, New 2020 (1,073 Pieces)'
            price='$63.00'
            rating={5}
            image='https://m.media-amazon.com/images/I/71AqC2pFstL._AC_SX425_.jpg'
            />
        </div>


      </div>

    </div>
  )
}

export default Home;