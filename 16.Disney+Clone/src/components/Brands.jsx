import disneyplus from '../images/disnep.png';
import pixar from '../images/pixar.png';
import marvel from '../images/marvel.png';
import starwars from '../images/starwars.png';
import nationalgeo from '../images/national-geographic.png';


function Brands() {
  return (
    <section className="flex flex-col md:flex-row justify-center items-center mt-10 gap-6 w-11/12  max-w-screen-2xl mx-auto">
      <div className="brand">
        <img src={disneyplus} alt="Disney Plus" objectfit="cover" />
        
      </div>

      <div className="brand">
        <img src={pixar} alt="Pixar" objectfit="cover" />
        
      </div>

      <div className="brand">
        <img src={marvel} alt="Marvel" objectfit="cover" />
        
      </div>

      <div className="brand">
        <img src={starwars} alt="Star wars" objectfit="cover" />
        
      </div>

      <div className="brand">
        <img
          src={nationalgeo}
          alt="National Geographic"
          objectfit="cover"
        />
        
      </div>
    </section>
  );
}

export default Brands;