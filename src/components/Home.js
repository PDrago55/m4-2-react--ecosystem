import React from 'react';
import data, { items } from '../data';
import ListingGrid from './ListingGrid';
function Home(props){
    return <div>
    <h2>Welcome Fellow Bruh!</h2>
    <p>Fruit emporium sells the finest fruits from this world and beyond.
</p>
    <ListingGrid itemList = {Object.values(items)}/>
    </div>
}

export default Home