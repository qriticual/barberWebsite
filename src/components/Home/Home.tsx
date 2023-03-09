import './Home.css'

const Home = () => {

  type OpeningHours = {
    [key: string]: {
      open: string;
      close: string;
    };
  };

  const openingHours: OpeningHours = {
    Sunday: { open: '12:00', close: '20:00' },
    Monday: { open: '09:00', close: '17:00' },
    Tuesday: { open: '09:00', close: '17:00' },
    Wednesday: { open: '09:00', close: '17:00' },
    Thursday: { open: '09:00', close: '17:00' },
    Friday: { open: '09:00', close: '20:00' },
    Saturday: { open: '12:00', close: '20:00' },
  };

  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const today = new Date();
  const dayOfWeek = daysOfWeek[today.getDay()];
  const currentTime = today.getHours() + ':' + ('0' + today.getMinutes()).slice(-2);

  const openingTime = openingHours[dayOfWeek].open;
  const closingTime = openingHours[dayOfWeek].close;

  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const tomorrowDayOfWeek = daysOfWeek[tomorrow.getDay()];
  const tomorrowOpeningTime = openingHours[tomorrowDayOfWeek].open;

  let status;
  if (currentTime >= openingTime && currentTime < closingTime) {
    status = 'Öppet till ' + closingTime + " i dag";
  } else if ( currentTime >= closingTime ) {
    status = 'Stängt, öppnar imorgon ' + tomorrowOpeningTime;
  }
  else if ( currentTime < openingTime ){
    status = 'Stängt, öppnar ' + openingTime + " i dag";
  }
  else{
    status = ''
  }


  return (
    <div className="home-container">
      <h2 className='home-heading'>
        <span>
          Andraus Barbershop
        </span>
      </h2>
      <span className='home-text1'>
        Frisör
      </span>
      <a href="tel:08-711 92 08" className='book-button'>
        Ring  08-711 92 08
      </a>
      <p className='opening-text'>{status}</p>
      <img src={require('../../assets/images/salongbild.jpg')} className="home-image"/>
    </div>
  )
}

export default Home;