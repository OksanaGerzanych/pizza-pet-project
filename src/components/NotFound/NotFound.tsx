
import { ContainerNoPage, TextUp, LinkStyle, Title } from "./NotFound.styled";
import { BsArrowLeftCircle} from 'react-icons/bs';

export default function NotFound() {
    return (
        <ContainerNoPage>
            <Title>404</Title>
            <TextUp>Oops! We can`t find that page! </TextUp>
            <p>Either something went wrong or the page doesn`t exist enymore. </p>
           <LinkStyle to="/">Go back <BsArrowLeftCircle size={20} /> </LinkStyle> 
        </ContainerNoPage>
    ) 
       
}