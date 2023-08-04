import Sort from '../Sort/Sort.js'
import {CategoriesList, CategoriesItem, SectionFilter} from './Categories.styled.js'

export default function Categories() { 
    return (
        <SectionFilter >
            <div>
        <CategoriesList>
            <CategoriesItem>All</CategoriesItem>
            <CategoriesItem>Meat</CategoriesItem>
            <CategoriesItem>Vegetsrian</CategoriesItem>
            <CategoriesItem>Calzone</CategoriesItem>
            <CategoriesItem>Spicy</CategoriesItem>
        </CategoriesList>
            </div>
            <Sort />
        </SectionFilter>
    )
}
