import { Item, Loader } from '../components'


const MenuItemList = ({menu}) => { 

    return (
                <div className="cardContainer justify-content-center justify-content-sm-between gx-0">
                    {
                        menu.length > 0 ?
                            menu.map((card) => (
                                        <Item item={card} key={card.id}/>
                            )) : (
                                <Loader />
                            )
                    }
                </div>
    )
}

export default MenuItemList