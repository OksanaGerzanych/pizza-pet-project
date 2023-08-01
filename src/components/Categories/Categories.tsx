import {CategoriesList, CategoriesItem } from './Categories.styled.js'

export default function Categories() { 
    return (
        <CategoriesList>
            <CategoriesItem>All</CategoriesItem>
            <CategoriesItem>Meat</CategoriesItem>
            <CategoriesItem>Vegetsrian</CategoriesItem>
            <CategoriesItem>Calzone</CategoriesItem>
            <CategoriesItem>Spicy</CategoriesItem>
        </CategoriesList>
    )
}
