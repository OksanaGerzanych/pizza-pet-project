import cart from '../../img/empty-cart.png'
import { LinkStyle } from '../NotFound/NotFound.styled'
import { Title } from './EmptyBasket.styled'
import { BsArrowLeftCircle} from 'react-icons/bs';

export default function EmptyBasket() {
    return (
        <>
        <Title>Your Cart <span>is Empty!</span></Title>
        <img src={cart} alt="cart" width="300" hight="200"/>
        <LinkStyle to="/"> <BsArrowLeftCircle size={20} /> Go back</LinkStyle>
    </>)
}