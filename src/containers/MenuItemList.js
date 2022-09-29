import { Item, Loader } from '../components'


const MenuItemList = ({menu}) => { 

    return (
                <div className="gridMenu justify-content-center justify-content-md-between px-2 px-md-6 px-lg-6">
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