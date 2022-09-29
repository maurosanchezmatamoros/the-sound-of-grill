import { Item, Loader } from '../components'


const MenuItemList = ({menu}) => { 

    return (
            <div className="d-flex justify-content-between flex-wrap">
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