import {Select, ContainerSort, TextSort} from '../Sort/Sort.styled'

export default function Sort() {
    return (
        <ContainerSort>
        <TextSort>Sort by:</TextSort>
        <Select>
            <option  value="popular">Most popular</option>
            <option  value="price"> Price</option>
            <option  value="new"> New</option>
            </Select>
        </ContainerSort>
    )
}

