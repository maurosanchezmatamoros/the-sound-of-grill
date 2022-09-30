import { Card} from 'react-bootstrap'
import "../styles/Item.css"

export const Item = ({item}) => {

    return (
        <>
            <Card style={{ width: '18rem' }} className="item--card flex-column my-1">
                <Card.Img  src={item.img} alt={item.name}/>
                <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>{item.subcategory}</Card.Text>
                </Card.Body>
            </Card>
        </>
    )

}