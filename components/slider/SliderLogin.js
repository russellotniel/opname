import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderLogin = () => {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <Slider {...settings} className='mt-10 mb-8 text-center'>
      <div className="px-10">
        <h1 className='text-black font-bold'>Apa itu FitAJa!? 1</h1>
        <p className='text-gray-600 my-3 text-sm'>Layanan kesehatan digital yang terintegrasi dengan berbagai asuransi sebagai solusi sehat, cepat dan akurat.</p>
      </div>
      <div className="px-10">
        <h1 className='text-black font-bold'>Apa itu FitAJa!? 2</h1>
        <p className='text-gray-600 my-3 text-sm'>Layanan kesehatan digital yang terintegrasi dengan berbagai asuransi sebagai solusi sehat, cepat dan akurat.</p>
      </div>
      <div className="px-10">
        <h1 className='text-black font-bold'>Apa itu FitAJa!? 3</h1>
        <p className='text-gray-600 my-3 text-sm'>Layanan kesehatan digital yang terintegrasi dengan berbagai asuransi sebagai solusi sehat, cepat dan akurat.</p>
      </div>
    </Slider>
  )
}

export default SliderLogin;