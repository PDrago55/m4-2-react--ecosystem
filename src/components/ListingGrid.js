import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ListingItem from './ListingItem'

function ListingGrid({itemList}){
    return (
        <Wrapper>
        {itemList.map(item => (
            <ListingItem key={item.id} item={item} />
        ))}
    </Wrapper>
    )
};


ListingGrid.propTypes = {
    itemList: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            latinName: PropTypes.string.isRequired,
            imageSrc: PropTypes.string.isRequired,
        })
    ).isRequired //why do we need isRequired on this outter circle? do we need to require an array..?
};


const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 32px;
    margin: 32px 0;
`;

export default ListingGrid;