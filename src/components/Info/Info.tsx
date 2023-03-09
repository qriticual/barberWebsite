import './Info.css'
import OpeningHours from './OpeningHours';

const Info = () => {
  return (
    <div className="info-container">
      
      <div className='title-container'>
        <div className="title-stripe title-stripe-left"></div>
        <div className="title-text">Kontakta oss</div>
        <div className="title-stripe title-stripe-right"></div>
      </div>

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2041.8995086945558!2d17.955419416040787!3d59.217694781619834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f71d57c5a6eb1%3A0x5428e890321d38b3!2sViss%C3%A4tra%20Salong%20Andraus!5e0!3m2!1ssv!2sse!4v1678376312255!5m2!1ssv!2sse" className="iframe-info"></iframe>
      

      <div className="info-details-container">
        <div className="info-details">
          <div className="info-details-header">Kontakt</div>
          <div className="info-details-content">
            <a href="tel:08-711 92 08" className='info-button'>
              Ring nu
            </a>
            <p>08-711 92 08</p>
          </div>
        </div>
        <div className="info-details">
          <div className="info-details-header">Adress</div>
          <div className="info-details-content">
            <a href="https://www.google.com/maps/search/?api=1&query=Vissätra Salong Andraus, Kvarnängsvägen, Huddinge" className='info-button'>
              Visa vägbeskrivning
            </a>
            <p>Kvarnängsvägen 5, 141 49 Huddinge</p>
          </div>
        </div>
        <div className="info-details">
          <div className="info-details-header">Öppettider</div>
          <div className="info-details-content">
            <OpeningHours/>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Info;