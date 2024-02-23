import "./card.css";

interface CardProps {
    price: number,
    title: string,
    image: string
    description: string
}

export function Card({ price, image, title, description } : CardProps){
    return(
        <div className="card">
            <img src={image}/>
            <h2 id="title">{title}</h2>
            <p id="description">{description}</p>
            <p id="valor"><b>R$</b> {Number(price).toFixed(2)}</p>
        </div>
    )
    
}