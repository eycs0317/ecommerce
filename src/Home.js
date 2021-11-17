import React from 'react';
import './home.css';
import Product from './Product';
// import { Link } from 'react-router-dom';
function Home () {
  return (
    <div>
      <div className="home">
      {/* <Link to='/checkout'>hahahaha</Link> */}

        <img src='https://4efdz8u31dn2ay9to14kzc81-wpengine.netdna-ssl.com/wp-content/uploads/2018/04/e-commerce-blog-post-1024x683.jpg' alt='home' className='home-image'></img>

        <div className="home-product-row">
          <Product
            title='LEGO Star Wars: The Mandalorian The Child 75318 Building Kit; Collectible Buildable Toy Model for Ages 10+, New 2020 (1,073 Pieces)'
            price='$63.99'
            rating={5}
            image='https://m.media-amazon.com/images/I/71AqC2pFstL._AC_SX425_.jpg'
            />
            <Product
            title='LG 27UL500-W 27-Inch UHD (3840 x 2160) IPS Monitor with Radeon Freesync Technology and HDR10, White'
            price='$349.00'
            rating={3}
            image='https://m.media-amazon.com/images/I/61pI7loWpZS._AC_SX522_.jpg'
            />

        </div>

        <div className="home-product-row">
        <Product
            title='Best Pet Supplies Dog Squeaky Chew Toys Fun Skin,Plush,Log'
            price='$5.99'
            rating={2}
            image='https://m.media-amazon.com/images/I/71RYZSLBQBL._AC_SX425_.jpg'
            />
            <Product
            title='Eloquent JavaScript, 3rd Edition: A Modern Introduction to Programming 3rd Edition, Kindle Edition'
            price='$23.99'
            rating={1}
            image='https://images-na.ssl-images-amazon.com/images/I/51-5ZXYtcML._SX377_BO1,204,203,200_.jpg'
            />
            <Product
            title='Cuisinart MCP-12N Multiclad Pro Stainless Steel 12-Piece Cookware Set'
            price='$249.00'
            rating={5}
            image='https://m.media-amazon.com/images/I/71DwqGSnhEL._AC_SX522_.jpg'
            />
        </div>
        <div className="home-product-row">
        <Product
            title='DRIPEX Boys Bike 20 inch Kids Bike 12/14/16/18 inch BMX Stytle for 3-10 Years Old Boy＆Girl Children Bicycle with Kickstand or Trainning Wheel,White KRA-1'
            price='$129.00'
            rating={5}
            image='https://m.media-amazon.com/images/I/91XUN5HndLL._AC_SX425_.jpg'
            />
            <Product
            title='LEGO Star Wars: The Mandalorian The Child 75318 Building Kit; Collectible Buildable Toy Model for Ages 10+, New 2020 (1,073 Pieces)'
            price='$63.00'
            rating={4}
            image='https://m.media-amazon.com/images/I/71AqC2pFstL._AC_SX425_.jpg'
            />
        </div>


      </div>

    </div>
  )
}

export default Home;