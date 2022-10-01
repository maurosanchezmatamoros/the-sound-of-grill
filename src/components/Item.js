import { Card} from 'react-bootstrap'
import "../styles/Item.css"

export const Item = ({item}) => {

    return (
        <>
            <Card className="my-1">
                <Card.Img  src={item.img} alt={item.name}/>
                <Card.Body>
                    <Card.Title>{item.name} <p>{item.price}</p></Card.Title>
                    <Card.Text>{item.subcategory}</Card.Text>
                </Card.Body>
            </Card>
        </>
    )

}