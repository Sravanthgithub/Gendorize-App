import './Card.css'

const Card = (data) => {
    const classes = 'Card ' + data.className
    return (
        <div className= {classes}>{data.children}</div>
    )
}

export default Card;