import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import useGetData from "../hooks/useGetData"
import ProductItem from "@components/ProductItem"
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss"
import "../styles/swipper/navigation.scss";

const URL = "https://corebiz-test.herokuapp.com/api/v1/products"

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Products = () => {
  const products = useGetData(URL)

  if(!products) return null

  return (
    <section className="product">
      <h3 className="product__caption">Mas Vendidos</h3>
      <Swiper
        slidesPerView={5}
        spaceBetween={0}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        breakpoints={{
          1440: {
            slidesPerView: 5
          },
          1024: {
            slidesPerView: 4
          },
          668: {
            slidesPerView: 3
          },
          425: {
            slidesPerView: 2
          },
          0: {
            slidesPerView: 1
          }
        }}
        grabCursor={true}
        className="mySwiper"
      >
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
        {products.map(product =>
            <SwiperSlide key={product.productId}>
              <ProductItem productData={product}/>
            </SwiperSlide>
          )
        }
      </Swiper>
    </section>
  );
}

export default Products;