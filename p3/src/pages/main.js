import './main.css'
import { useNavigate } from 'react-router-dom';
const Main = () => {
    const navigate = useNavigate();
    return(
        <>
            <div className='Welcome'>
                <div className='message'>
                    <p className='main_message'>Hey there! Hungry? You’re in the right place.</p>
                    <div className='sub_message'><p>Your cravings just found their favorite place.Freshly baked, perfectly topped, and<br></br> made with love.</p></div>
                    <p>Order now and let the feast begin! 🍕🔥</p>
                    <button className='order' onClick={() => navigate('/menu')}>START ORDERING</button>
                </div>
            </div>
        </>
    );
}
export default Main;