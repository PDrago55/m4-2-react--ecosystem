import React from 'react'
import { useParams } from 'react-router-dom'
import {items, sellers} from '../data'
import styled from 'styled-components'
function ItemDetails () {
    const { itemId } = useParams();
    const SelectedItem = items[itemId];
    return(
        <ItemContainer>
        <Title>{SelectedItem.name}</Title>
            <FruitPic src={SelectedItem.imageSrc}></FruitPic>
    <FruitText>{`The item you have chosen is ${SelectedItem.name}'s, they go for 
    $${SelectedItem.price} ... please enjoy bruh`}</FruitText>
    <LatinName>{`Latin Name: ${SelectedItem.latinName}`}</LatinName>
    <FruitButton>{`$${SelectedItem.price}- Buy Now!`}</FruitButton>
        </ItemContainer>
    )
}

const ItemContainer = styled.div`
margin-left: auto;
margin-right: auto;
border: 1px solid black;
width 400px;

&:hover {
    box-shadow: 2px 5px 36px rgba(0, 0, 0, 0.9);

}`

const FruitPic = styled.img`
width: 100%;`


const Title = styled.div`
font-size: 2rem;
text-decoration: underline;
font-weight: bold;
text-align: center;
padding: 15px;`

const FruitButton = styled.button`
padding: 20px
border-radius: 15px;
background-color: blue;
color: white;
font-size: 1.1em;
margin-left: 150px;

&:hover {
    cursor:pointer;
}
`


const FruitText = styled.div`
padding: 7px;
font-size: 1.2em`

const LatinName = styled.div`
padding: 7px;
font-size: 1.2em;
`
export default ItemDetails