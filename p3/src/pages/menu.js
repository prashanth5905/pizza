import data from './data.json'
import './menu.css'

const Menu = () => {
    

    return(
        <>
            <h1>Menu</h1>
            <div className='items'>
                {
                    data.data.map((item)=>(
                        <div className='prash'>
                            <div className='pizzaimage'><img src={item.imageUrl} alt='pizza_image' /></div>
                            <div className='details'>
                                <div className='name'>
                                    {item.name}
                                    <p className='ingredients'>Ingredients: {item.ingredients.join(', ')}</p>
                                    <p>{item.soldOut ? 'Sold Out' : <p> ${item.unitPrice}.00</p>}</p>
                                    <button className="order-button">Add to cart</button>
                                </div>    
                            </div>
                            
                        </div>
                    ))
                }
            </div>
        </>
    );
}
export default Menu;