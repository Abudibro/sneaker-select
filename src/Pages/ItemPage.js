import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Container = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 5vh;
    
    @media (max-width: 960px) {
        align-items: center;
        flex-direction: column;
        margin-top: 0;
    }
`;

const ItemDetails = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    width: calc(100% - 40px);
    margin: 10px 0 85px 0;

    @media (max-width: 960px) {
        width: calc(100% - 15vw);
        margin: 15px 15vw ;
    }
`;

const ImagesWrapper = styled.div`
    // height: 50vh;
    width: 40vw;

    @media (max-width: 960px) {
        // height: 60vh;
        width: 85vw;
    }
`;

const ItemImage = styled.img`
    height: 50vh;
    width: 40vw;
    object-fit: cover;
    transition: all .4s ease;
    margin: 15px 0;

    @media (max-width: 960px) {
        height: 60vh;
        width: 85vw;
    }
`;

const SizesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%
`;

const SizeOptionWrapper = styled.p`
    height: 48px;
    width: 120px;
    border: 1px solid black;
    border-radius: 7px;
    margin: 3px;

    display: flex;
    justify-content: center;
    align-items: center;
    transition: all .2s ease;
    cursor: pointer;

    @media (max-width: 960px) {
        width: 30%;
        height: 52px;
    }

    &:hover {
        background-color: black;
    }

    &:hover .size-option-text {
        color: white;
    }
`;

const SizeSection = styled.div`
    margin-left: 70px;
    width: 380px;

    @media (max-width: 960px) {
        margin-left: 0;
        margin-top: 65px;
        width: 90vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

const AddToBag = styled.button`
    width: 100%;
    height: 50px;
    background-color: black;
    color: white;
    border : 0;
    border-radius: 30px;
    margin: 25px 0 0 0;
    transition: all .3s ease;

    &: hover {
        opacity: .8;
    }

    @media (max-width: 960px) {
        width: 70%;
    }
`;

const ItemDescription = styled.p`
    font-size: 17px;
    margin-top: 25px;
`;

export const sizeOptions = [
    3, 4, 5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 10, 11, 12, 13
];


function ItemPage(props) {
    
    const {name, img, price, desc} = props.location.state.item;
    
    const [selectedSize, selectSize] = useState(null);
    const [sizeNotSelected, displayError] = useState(true);
    const [ATBPressed, setATBPressed] = useState(false);
    const [minimized, setMinimize] = useState(window.innerWidth <= 960);

    const handleResize = () => {
		if (window.innerWidth > 960) {
			setMinimize(false);
		}
		else {
			setMinimize(true);
		}
	}

    useEffect(() => {
		window.addEventListener("resize", handleResize, false);
	}, []);

    sizeNotSelected && !ATBPressed && window.scrollTo(0, 0);

    return (
        <Container>
            {
                minimized &&
            <ItemDetails>
                <strong><p style={{fontSize: '28px'}}>{name}</p></strong>
                <p style={{fontSize: '21px'}}>£{price}</p>
            </ItemDetails>
            }
            <ImagesWrapper>
                <ItemImage src={img[0]} />
                <ItemImage src={img[1]} />
                <ItemImage src={img[2]} />
            </ImagesWrapper>

            <SizeSection>
                { !minimized &&
                <ItemDetails>
                    <strong><p style={{fontSize: '34px'}}>{name}</p></strong>
                    <p style={{fontSize: '25px'}}>£{price}</p>
                </ItemDetails>

                }
                <strong><p className={sizeNotSelected && ATBPressed ? 'select-size-error' : undefined} style={{margin: '5px', fontSize: '17px'}}>{ sizeNotSelected && ATBPressed ? 'Please select a size' : 'Sizes'}</p></strong>
                <SizesContainer className={sizeNotSelected && ATBPressed ? 'select-size-error-border' : undefined}>
                    {
                        sizeOptions.map(size => {
                            return(
                                <SizeOptionWrapper onClick={() => {
                                    if (!sizeNotSelected && size === selectedSize) { selectSize(null); displayError(true); setATBPressed(true)}
                                    else { selectSize(size); displayError(false);}
                                }} className={ selectedSize === size ? 'selected-size-wrapper' : undefined}><p className={selectedSize === size ? 'size-option-text selected-size' : 'size-option-text'} style={{marginBottom: '0px', transition: 'all .2s ease'}}>{size}</p></SizeOptionWrapper>
                            );
                        })
                    }
                </SizesContainer>
                <AddToBag onClick={() => {
                    !sizeNotSelected ? props.addItemToBag({...props.location.state.item, size: selectedSize, quantity: 1})  
                    : setATBPressed(true);

                    !sizeNotSelected && window.scrollTo(0, 0);
                }

                }>Add To Bag<FontAwesomeIcon icon='shopping-bag' style={{width: '20px', marginLeft: '6px'}}/></AddToBag>
                {/* <LikeItem>Like</LikeItem> */}

                <ItemDescription>{desc}</ItemDescription>
                
            </SizeSection>
        </Container>
    )
}

export default ItemPage
