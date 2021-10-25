import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Filters from '../Components/Filters';
import { ItemCard, ImageWrapper, ItemImage, ItemDetail } from '../Components/FeaturedProducts';

const ItemsWrapper = styled.div`
    max-width: auto;
    display: flex;
    justify-content: center;
    // margin-left: 20px;
    flex-wrap: wrap;
    align-items: center;
`;

const SortBy = styled.select`
    margin: 15px;
    margin-right: 3vw;
    border: 1px solid black;
    border-radius: 15px;
    padding: 5px;
    padding-top: 6px;
    padding-bottom: 6px;
    width: fit-content;
    &:focus {
        outline: none;
    }
`;

const ItemCardResponsive = styled(ItemCard)`
    width: 20vw;
    margin: 20px;

    @media (max-width: 960px) {
        width: 320px;
    }

    @media (max-width: 499px) {
        width: 85vw;
    }
`;

const ItemImageRepsonsive = styled(ItemImage)`
    width: 20vw;
    height: 20vw;

    @media (max-width: 960px) {
        width: 320px;
        height: 320px;
    }

    @media (max-width: 499px) {
        width: 85vw;
        height: 85vw;
    }
`;

const Wrapper = styled.div`
    display: flex;
    flex-wrap: nowrap;
    align-items: center;

    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

const FiltersWrapper = styled.div`
    height: calc(100vh - 163px);
    overflow-y: scroll;
    width: 260px;

    @media (max-width: 960px) {
        height: auto;
        width: auto;
        overflow-y: auto;
    }

`;

const ItemsScrollWrapper = styled.div`
    height: calc(100vh - 163px);
    overflow-y: scroll;
    width: calc(100vw - 260px);

    @media (max-width: 960px) {
        height: auto;
        width: 100%;
        overflow-y: auto;
    }
`;


const  Shop = (props) => {

     useEffect(() => {
        try {
            props.location.state.category === 'Women' ? selectFemale(true)
            : props.location.state.category === 'Lifestyle' ? selectLifestyle(true)
            : props.location.state.category === 'Running' ? selectRunning(true)
            : props.location.state.category === 'Football' ? selectFootball(true)
            : props.location.state.category === 'Training' ? selectTraining(true)
            : props.location.state.category === 'Basketball' && selectBasketball(true)

            props.location.state.collection === 'jordan' ? selectJordan(true)
            : props.location.state.collection === 'max' ? selectMax(true)
            : props.location.state.collection === 'force' && selectForce(true)
        }
        catch {}
    }, [props.location.state]);
    const [sortedMthd, sort] = useState('l-h');

    const [selectedMale, selectMale] = useState(false);
    const [selectedFemale, selectFemale] = useState(false);
    
    const [selectedUnder50, selectUnder50] = useState(false);
    const [selected50To100, select50To100] = useState(false);
    const [selected100To150, select100To150] = useState(false);
    const [selectedOver150, selectOver150] = useState(false);
    
    const [selectedLifestyle, selectLifestyle] = useState(false);
    const [selectedRunning, selectRunning] = useState(false);
    const [selectedFootball, selectFootball] = useState(false);
    const [selectedTraining, selectTraining] = useState(false);
    const [selectedBasketball, selectBasketball] = useState(false);

    const [selectedJordan, selectJordan] = useState(false);
    const [selectedMax, selectMax] = useState(false);
    const [selectedForce, selectForce] = useState(false);
    
    const [selectedSize, selectSize] = useState(null);
    
    const filterMethods = {
        selectMale: selectMale,
        selectFemale: selectFemale,
        selectUnder50: selectUnder50,
        select50To100: select50To100,
        select100To150: select100To150,
        selectOver150: selectOver150,
        selectLifestyle: selectLifestyle,
        selectRunning: selectRunning,
        selectFootball: selectFootball,
        selectTraining: selectTraining,
        selectBasketball: selectBasketball,
        selectJordan: selectJordan,
        selectMax: selectMax,
        selectForce: selectForce,
        selectSize: selectSize
    }

    const filterVariables = {
        selectedMale: selectedMale,
        selectedFemale: selectedFemale,
        selectedUnder50: selectedUnder50,
        selected50To100: selected50To100,
        selected100To150: selected100To150,
        selectedOver150: selectedOver150,
        selectedLifestyle: selectedLifestyle,
        selectedRunning: selectedRunning,
        selectedFootball: selectedFootball,
        selectedTraining: selectedTraining,
        selectedBasketball: selectedBasketball,
        selectedJordan: selectedJordan,
        selectedMax: selectedMax,
        selectedForce: selectedForce,
        selectedSize: selectedSize
    }

    const filteredItems = props.itemCardsData.filter((item, i) => {
        const withinGender = () => {
            if ((selectedMale && selectedFemale) || (!selectedMale && !selectedFemale)) return (item.gender === 'men' || item.gender === 'women' || item.gender === 'unisex');
            else if (selectedFemale) return (item.gender === 'women' || item.gender === 'unisex');
            else if (selectedMale) return (item.gender === 'men' || item.gender === 'unisex');
        }

        const withinPriceRange = () => {
            let lb = 0;
            let ub = 500;
            if (selectedUnder50) ub = 50;
            if (selected50To100) {
                ub = 100;
                if (!selectedUnder50) lb = 50;
            } if (selected100To150) {
                ub = 150;
                if (!selected100To150 && !selectedUnder50) lb = 100;
            }
            if (selectedOver150) {
                ub = 500;
                if (!selectedUnder50 && !selected100To150 && !selected50To100) lb = 150;
            }

            return (item.price >= lb && item.price <= ub);
        }

        const withinCategory = () => {
            if ((selectedLifestyle && selectedRunning && selectedFootball && selectedTraining && selectedBasketball) || (!selectedLifestyle && !selectedRunning && !selectedFootball && !selectedTraining && !selectedBasketball)) return true;
            return (
                (selectedLifestyle && item.category === 'lifestyle') ||
                (selectedRunning && item.category === 'running') ||
                (selectedFootball && item.category === 'football') ||
                (selectedTraining && item.category === 'training') ||
                (selectedBasketball && item.category === 'basketball')
            );
        }

        const withinCollection = () => {
            if ((selectedJordan && selectedMax && selectedForce) || (!selectedJordan && !selectedMax && !selectedForce)) return true;
            return ((selectedJordan && item.collection === 'jordan') || (selectedMax && item.collection === 'max') || (selectedForce && item.collection === 'force'));
        }

        return (
            withinGender() &&
            withinPriceRange() &&
            withinCategory() &&
            withinCollection()
        );
    })

    const sortItems = arr => {
        const compare = ((a, b) => {
            const priceA = a.price;
            const priceB = b.price;
            
            let comparison = 0;
            if (priceA > priceB) {
                comparison = 1;
            } else if (priceA < priceB) {
                comparison = -1;
            }
            return comparison;
        })

        const compareBackwards =((a, b) => {
            const priceA = a.price;
            const priceB = b.price;
            
            let comparison = 0;
            if (priceA > priceB) {
                comparison = 1;
            } else if (priceA < priceB) {
                comparison = -1;
            }
            return comparison * -1;
        })

        const compareAlphabetically =((a, b) => {
            const priceA = a.name;
            const priceB = b.name;
            
            let comparison = 0;
            if (priceA > priceB) {
                comparison = 1;
            } else if (priceA < priceB) {
                comparison = -1;
            }
            return comparison;
        })

        if (sortedMthd === 'l-h') return arr.sort(compare);
        else if (sortedMthd === 'h-l') return arr.sort(compareBackwards);
        else return arr.sort(compareAlphabetically);
    }

    console.log(filteredItems);

    return (
        <>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <SortBy onChange={e => sort(e.target.value)}>
                    <option value='' disabled defaultValue selected>Sort By</option>
                    <option value='h-l' >Highest To Lowest</option>
                    <option value='l-h'>Lowest To Highest</option>
                    <option value='a'>Alphabetically</option>
                </SortBy>
            </div>
            <Wrapper>
                <FiltersWrapper>
                    <Filters filterMethods={filterMethods} filterVariables={filterVariables}/>
                </FiltersWrapper>

                <ItemsScrollWrapper>
                    <ItemsWrapper>
                    {
                        sortItems(filteredItems).map((item, i) => {
                            return (
                                <Link to={{
                                    pathname: `/shop/${item.id}`,
                                    state: {
                                        item: item
                                    }
                                }} className='link' key={i} >
                                    <ItemCardResponsive>
                                        <ImageWrapper>
                                            <ItemImageRepsonsive src={item.img[0]} className='featured-item-img'/>
                                        </ImageWrapper>
                                        <strong><ItemDetail className='featured-item-detail' style={{marginTop: '15px'}}>{item.name}</ItemDetail></strong>
                                        <strong><ItemDetail className='featured-item-detail' style={{marginTop: '5px'}}>£{item.price}</ItemDetail></strong>
                                    </ItemCardResponsive>
                                </Link>
                            )
                        })
                    }
                    </ItemsWrapper>
                </ItemsScrollWrapper>
            </Wrapper>
        </>
    )
}

export default Shop;
