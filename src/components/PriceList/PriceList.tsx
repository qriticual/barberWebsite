import './PriceList.css'

const PriceList = () => {

    interface PriceItem {
        name: string;
        price: number;
    }
        
    const PRICE_ITEMS: PriceItem[] = [
        { name: "Herklippning", price: 200 },
        { name: "Fade", price: 250 },
        { name: "Skägg trim", price: 150 },
        { name: "Rakning", price: 100 },
    ];

  return (
    <div className="gallery-container">
        <div className='title-container'>
            <div className="title-stripe title-stripe-left"></div>
                <div className="title-text">Prislista</div>
            <div className="title-stripe title-stripe-right"></div>
        </div>

        <div className="price-list">
            {PRICE_ITEMS.map(({ name, price }) => (
            <div key={name} className="price-item">
                <span className="price-item-name">{name}</span>
                <span className="price-item-price">{price} kr</span>
            </div>
        ))}
        </div>
    </div>
  )
}

export default PriceList;