import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect} from 'react'
// import { Link } from 'react-router-dom';
import styled from 'styled-components';

import mastercard from '../Resources/mastercard.png';
import visa from '../Resources/visa.png';
import paypal from  '../Resources/paypal.png';
import amex from  '../Resources/amex.png';

const Wrapper = styled.div`
    min-height: calc(100vh - 120px);
    display: flex;
    justify-content: center;
    align-items: start;
    flex-wrap: wrap;
`;

const ItemsWrapper = styled.div`
    margin-top: 5%;
    min-width: 650px;
    margin-left: 15px;
    margin-right: 15px;

    @media (max-width: 1239px) {
        min-width: 75%;
        width: 75%;
    }
    @media (max-width: 960px) {
        min-width: 85%;
        width: 85%;
    }
`;

const ItemGrid = styled.div`
    display: grid;
    grid-template-columns: 500px 100px 100px 50px;
    grid-gap: 10px;
    margin-bottom: 20px;
    align-items: center;

    @media (max-width: 100vh) {
        display: grid;
    }

    @media (max-width: 1210px) {
        width: 100%;
        grid-template-columns: calc(100% - 250px) 100px 100px 50px;
    }

    @media (max-width: 835px) {
        grid-template-columns: 200px calc(50% - 125px) calc(50% - 125x) 50px;
    }

    @media (max-width: 499px) {
        display: flex;
    }
`;

const ItemMainInfo = styled.div`
    display: flex;

    @media (max-width: 730px) {
        flex-direction: column;
    }

    @media (max-width: 499px) {
        width: 160px;
    }
`;

const QtySelector = styled.select`
    color: #404040;
    width: 60px;
    height: 32px;
    font-size: 18px;
    text-align: center;
    // border: 1px solid grey;
    border: none;
    background-color: #f6f6f6;
    border-radius: 6px;
    cursor: pointer;

    &:hover {
        // border: 1px solid black;
    }


    &:focus {
        outline: none;
    }
`;

const DisplayedItemPrice = styled.p`
    color: #404040;
    width: fit-content;
    height: 32px;
    line-height: 32px;
    padding: 0px 9px;
    font-size: 18px;
    text-align: center;
    // border: 1px solid grey;
    border: none;
    background-color: #f6f6f6;
    border-radius: 6px;
    cursor: pointer;
    margin-bottom: 0;

    &:hover {
        // border: 1px solid black;
    }


    &:focus {
        outline: none;
    }
`;

const CheckoutWrapper = styled.div`
    width: 400px;
    margin-top: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 15px;
    margin-right: 15px;
    
    @media (max-width: 1239px) {
        min-width: 75%;
        width: 75%;
    }
    @media (max-width: 960px) {
        min-width: 85%;
        width: 85%;
    }
`;

const CheckoutRow = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 5px;
`;

const DeliverySelector = styled.select`
    border-style: none;
    // border-bottom: 1px #757575 solid;
    color: #757575;
    height: 30px;
    padding-bottom: 0px;
    &: focus {
        outline: none;
    }
`;

const CheckoutBtn = styled.button`
    width: 100%;
    height: 60px;
    // background-color: black;
    background: linear-gradient(132deg, rgba(13,13,13,1) 0%, rgba(27,27,27,1) 100%);
    color: white;
    margin-top: 20px;
    font-weight: 600;
    border-style: none;
    border-radius: 22px;
    &:hover {
        opacity: 0.8;
    }

    &:hover .checkout-arrow {
        transform: translate(10px, 0);
    }
`;

function ShoppingBag(props) {

    const { bagItems, changeQty, deleteItem } = props;
    const [shipping, changeShipping] = useState(parseFloat('3.99'));
    const [width, setWidth] = useState(window.innerWidth);
    
    const handleResize = () => {
        setWidth(window.innerWidth);
    }

	useEffect(() => {
		window.addEventListener("resize", handleResize, false);
	}, []);

    let itemsTotal = 0;


    return (
        <Wrapper>
            <ItemsWrapper>
                <h1 style={{marginBottom: '30px'}}>Shopping Bag</h1>
                <div style={{marginTop: '30px', borderTop: 'solid rgb(224, 224, 224) 2px', paddingTop: '20px'}}>
                    {
                        bagItems.length < 1 &&
                        <p>Your shopping bag is empty</p>
                    }
                    {
                        bagItems.length >= 1 && width > 499 &&
                        <ItemGrid>
                            <strong><p>PRODUCT DETAILS</p></strong>
                            <strong><p>QTY</p></strong>
                            <strong><p>TOTAL</p></strong>
                        </ItemGrid>
                    }
                    {
                        bagItems.map((item, i) => {
                            itemsTotal += (item.quantity * item.price);
                            return(
                                <ItemGrid>
                                    <ItemMainInfo>
                                        <img src={item.img[0]} style={{height: '130px', width: '130px', objectFit: 'contain'}} alt='shoe'/>
                                        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', marginLeft: '10px'}}>
                                            <div style={{display: 'flex', flexDirection: 'column', fontSize: '16px'}}>
                                                <strong><p style={{fontSize: '18px'}}>{item.name}</p></strong>
                                                <p style={{marginBottom: '5px'}}>Size: {item.size}</p>
                                                <p style={{marginBottom: '5px'}}>£{item.price}</p>
                                            </div>
                                        </div>
                                    </ItemMainInfo>
                                    {
                                        width <= 499 &&
                                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                                            <div style={{marginBottom: '20px'}}>
                                                <QtySelector onChange={e => {
                                                    changeQty(item.id, i, e.target.value)
                                                }} >
                                                    <option defaultValue selected value={1}>1</option>
                                                    <option value={2}>2</option>
                                                    <option value={3}>3</option>
                                                    <option value={4}>4</option>
                                                    <option value={5}>5</option>
                                                    <option value={6}>6</option>
                                                    <option value={7}>7</option>
                                                    <option value={8}>8</option>
                                                    <option value={9}>9</option>
                                                    <option value={10}>10</option>
                                                </QtySelector>
                                            </div>
                                            <DisplayedItemPrice style={{marginBottom: '20px'}}>£{  (item.quantity * item.price).toFixed(2)  }</DisplayedItemPrice>
                                            <DisplayedItemPrice onClick={() => deleteItem(item.id, i)} style={{borderRadius: '50%', cursor: 'pointer', marginBottom: '20px'}}><FontAwesomeIcon icon='times' /></DisplayedItemPrice>
                                        </div>
                                    }
                                    {
                                        
                                        width > 499 &&
                                        <div>
                                        <QtySelector onChange={e => {
                                                changeQty(item.id, i, e.target.value)
                                            }} >
                                                <option defaultValue selected value={1}>1</option>
                                                <option value={2}>2</option>
                                                <option value={3}>3</option>
                                                <option value={4}>4</option>
                                                <option value={5}>5</option>
                                                <option value={6}>6</option>
                                                <option value={7}>7</option>
                                                <option value={8}>8</option>
                                                <option value={9}>9</option>
                                                <option value={10}>10</option>
                                            </QtySelector>
                                        </div>
                                    }
                                    {
                                        width > 499 &&
                                        <DisplayedItemPrice>£{  (item.quantity * item.price).toFixed(2)  }</DisplayedItemPrice>

                                    }
                                    {
                                        width > 499 &&
                                        <DisplayedItemPrice onClick={() => deleteItem(item.id, i)} style={{borderRadius: '50%', cursor: 'pointer'}}><FontAwesomeIcon icon='times' /></DisplayedItemPrice>
                                    }
                                    
                                </ItemGrid>
                            )
                        })
                    }
                    {
                        bagItems.length >= 2 &&
                        <ItemGrid style={{marginTop: '30px'}}>
                            <p></p>
                            <p style={{fontSize: '19px'}}>Total</p>
                            <strong><p style={{fontSize: '19px'}}>£{itemsTotal.toFixed(2)}</p></strong>
                        </ItemGrid>
                    }
                </div>
            </ItemsWrapper>

            <CheckoutWrapper>
                <CheckoutRow style={{
                    margin: '25px',
                    borderBottom: 'solid rgb(224, 224, 224) 2px'
                }}>
                    <p style={{
                        fontSize: '25px',
                        fontWeight: '800',
                    }}>SUMMARY</p>
                </CheckoutRow>
                <CheckoutRow>
                    <p>Subtotal</p>
                    <p style={{ color: '#757575'}}>£{itemsTotal.toFixed(2)}</p>
                </CheckoutRow>
                <CheckoutRow style={{flexDirection: 'column', justifyContent: 'flex-start', marginBottom: '20px'}}>
                    <p>Delivery</p>
                    <DeliverySelector onChange={e => changeShipping(parseFloat(e.target.value))}>
                        <option value={3.99}>Standard Delivery £3.99</option>
                        <option value={5.99}>Premium Delivery £5.99</option>
                        <option value={7.99}>Next Day Delivery £7.99</option>
                    </DeliverySelector>
                </CheckoutRow>
                <CheckoutRow style={{
                    borderTop: '1px solid rgb(224, 224, 224)',
                    borderBottom: '1px solid rgb(224, 224, 224)',
                    paddingTop: '13px',
                    paddingBottom: '13px',
                    marginTop: '20px'
                }}>
                    <strong><p style={{marginBottom: '0'}}>Total</p></strong>
                    <p style={{
                        color: '#757575',
                        marginBottom: '0',
                    }}>£{ itemsTotal === 0 ? (0).toFixed(2) : (itemsTotal + shipping).toFixed(2) }</p>
                </CheckoutRow>
                <CheckoutRow>
                    <CheckoutBtn>Checkout</CheckoutBtn>
                </CheckoutRow>
                <CheckoutRow style={{marginTop: '20px'}}>
                    <p style={{fontWeight: '900'}}>WE ACCEPT:</p>
                </CheckoutRow>
                <CheckoutRow>
                    <div style={{
                        display: 'flex',
                        alignItems:'center'
                    }}>
                        <img style={{
                            height: '20px',
                            width: 'auto',
                            marginRight: '10px'
                        }} src={mastercard} alt='mastercard'/>
                        <img style={{
                            height: '20px',
                            width: 'auto',
                            marginRight: '10px'
                        }} src={visa} alt='visa'/>
                        <img style={{
                            height: '20px',
                            width: 'auto',
                            marginRight: '10px'
                        }} src={paypal} alt='paypal'/>
                        <img style={{
                            height: '20px',
                            width: 'auto',
                            marginRight: '10px'
                        }} src={amex}  alt='american express'/>
                    </div>
                </CheckoutRow>
            </CheckoutWrapper>
            
        </Wrapper>
    )
}

export default ShoppingBag
