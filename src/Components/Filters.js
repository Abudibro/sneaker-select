import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from 'styled-components';
import { sizeOptions } from '../Pages/ItemPage';

const CheckboxOption = styled.input`
    height: 20px;
    width: 20px;
`;

const FiltersColumn = styled.div`
    width: 260px;
    display: flex;
    flex-direction: column;

    @media (max-width: 960px) {
        width: 100%;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        // align-items: center;
    }

`;

const SizeOption = styled.p`
    padding: 5px 12px;
    border: 1px solid black;
    border-radius: 9px;
    margin: 5px;
    cursor: pointer;
    transition: all .3s ease;
    &:hover {
        background-color: black;
        color: white;
    }
`;

const Filters = props => {
    const [genderClicked, handleGenderClick] = useState(true);
    const [priceClicked, handlePriceClick] = useState(true);
    const [sportsClicked, handleSportsClick] = useState(true);
    const [collectionsClicked, handleCollectionsClick] = useState(true);
    const [sizeClicked, handleSizeClick] = useState(true);

    const {
        selectMale,
        selectFemale,
        selectUnder50,
        select50To100,
        select100To150,
        selectOver150,
        selectLifestyle,
        selectRunning,
        selectFootball,
        selectTraining,
        selectBasketball,
        selectJordan,
        selectMax,
        selectForce,
        selectSize
    } = props.filterMethods;

    const {
        selectedMale,
        selectedFemale,
        selectedUnder50,
        selected50To100,
        selected100To150,
        selectedOver150,
        selectedLifestyle,
        selectedRunning,
        selectedFootball,
        selectedTraining,
        selectedBasketball,
        selectedJordan,
        selectedMax,
        selectedForce,
        selectedSize
    } = props.filterVariables;

    return (
        <div style={{display: 'row', flexDirection: 'column'}}>
            
            <FiltersColumn>
                {/* Gender */}
                <div style={{margin: '20px'}}>
                    <label style={{marginBottom: '10px', cursor: 'pointer'}} onClick={() => handleGenderClick(!genderClicked)} >Gender <FontAwesomeIcon icon={genderClicked ? 'caret-up' : 'caret-down'} /></label>
                    {   genderClicked &&
                        <>

                        <div style={{display: 'flex', alignItems: 'center', marginBottom: '7px', width: '100px', cursor: 'pointer'}} onClick={() => selectMale(!selectedMale)}>
                            <CheckboxOption type='checkbox' className='checkbox' checked={selectedMale}/>
                            <label style={{marginLeft: '7px', cursor: 'pointer'}}>Men</label>
                        </div>

                        <div style={{display: 'flex', alignItems: 'center', marginBottom: '7px', width: '100px', cursor: 'pointer'}} onClick={() => selectFemale(!selectedFemale)}>
                            <CheckboxOption type='checkbox' className='checkbox' checked={selectedFemale}/>
                            <label style={{marginLeft: '7px', cursor: 'pointer'}}>Women</label>
                        </div>

                        </>
                    }
                </div>

                {/* Price */}
                <div style={{margin: '20px'}}>
                <label style={{marginBottom: '10px', cursor: 'pointer'}} onClick={() => handlePriceClick(!priceClicked)} >Shop By Price <FontAwesomeIcon icon={priceClicked ? 'caret-up' : 'caret-down'} /></label>
                    {   priceClicked &&
                        <>

                        <div style={{display: 'flex', alignItems: 'center', marginBottom: '7px', cursor: 'pointer'}} onClick={() => selectUnder50(!selectedUnder50)}>
                            <CheckboxOption type='checkbox' className='checkbox' checked={selectedUnder50}/>
                            <label style={{marginLeft: '7px', cursor: 'pointer'}}>Under £50</label>
                        </div>

                        <div style={{display: 'flex', alignItems: 'center', marginBottom: '7px', cursor: 'pointer'}} onClick={() => select50To100(!selected50To100)}>
                            <CheckboxOption type='checkbox' className='checkbox' checked={selected50To100}/>
                            <label style={{marginLeft: '7px', cursor: 'pointer'}}>£50 - £100</label>
                        </div>

                        <div style={{display: 'flex', alignItems: 'center', marginBottom: '7px', cursor: 'pointer'}} onClick={() => select100To150(!selected100To150)}>
                            <CheckboxOption type='checkbox' className='checkbox' checked={selected100To150}/>
                            <label style={{marginLeft: '7px', cursor: 'pointer'}}>£100 - £150</label>
                        </div>

                        <div style={{display: 'flex', alignItems: 'center', marginBottom: '7px', cursor: 'pointer'}} onClick={() => selectOver150(!selectedOver150)}>
                            <CheckboxOption type='checkbox' className='checkbox' checked={selectedOver150}/>
                            <label style={{marginLeft: '7px', cursor: 'pointer'}}>Over £150</label>
                        </div>
                        </>
                    }
                </div>
                
                {/* Sports */}
                <div style={{margin: '20px'}}>
                <label style={{marginBottom: '10px', cursor: 'pointer'}} onClick={() => handleSportsClick(!sportsClicked)} >Sport <FontAwesomeIcon icon={sportsClicked ? 'caret-up' : 'caret-down'} /></label>
                    {   sportsClicked &&
                        <>

                        <div style={{display: 'flex', alignItems: 'center', marginBottom: '7px', cursor: 'pointer'}} onClick={() => selectLifestyle(!selectedLifestyle)}>
                            <CheckboxOption type='checkbox' className='checkbox' checked={selectedLifestyle}/>
                            <label style={{marginLeft: '7px', cursor: 'pointer'}}>Lifestyle</label>
                        </div>

                        <div style={{display: 'flex', alignItems: 'center', marginBottom: '7px', cursor: 'pointer'}} onClick={() => selectRunning(!selectedRunning)}>
                            <CheckboxOption type='checkbox' className='checkbox' checked={selectedRunning}/>
                            <label style={{marginLeft: '7px', cursor: 'pointer'}}>Running</label>
                        </div>

                        <div style={{display: 'flex', alignItems: 'center', marginBottom: '7px', cursor: 'pointer'}} onClick={() => selectFootball(!selectedFootball)}>
                            <CheckboxOption type='checkbox' className='checkbox' checked={selectedFootball}/>
                            <label style={{marginLeft: '7px', cursor: 'pointer'}}>Football</label>
                        </div>

                        <div style={{display: 'flex', alignItems: 'center', marginBottom: '7px', cursor: 'pointer'}} onClick={() => selectTraining(!selectedTraining)}>
                            <CheckboxOption type='checkbox' className='checkbox' checked={selectedTraining}/>
                            <label style={{marginLeft: '7px', cursor: 'pointer'}}>Training & Gym</label>
                        </div>

                        <div style={{display: 'flex', alignItems: 'center', marginBottom: '7px', cursor: 'pointer'}} onClick={() => selectBasketball(!selectedBasketball)}>
                            <CheckboxOption type='checkbox' className='checkbox' checked={selectedBasketball}/>
                            <label style={{marginLeft: '7px', cursor: 'pointer'}}>Basketball</label>
                        </div>

                        </>
                    }
                </div>

                {/* Collection */}
                <div style={{margin: '20px'}}>
                <label style={{marginBottom: '10px', cursor: 'pointer'}} onClick={() => handleCollectionsClick(!collectionsClicked)} >Collections <FontAwesomeIcon icon={collectionsClicked ? 'caret-up' : 'caret-down'} /></label>
                    {   collectionsClicked &&
                        <>
                        
                        <div style={{display: 'flex', alignItems: 'center', marginBottom: '7px', width: '100px', cursor: 'pointer'}} onClick={() => selectJordan(!selectedJordan)}>
                            <CheckboxOption type='checkbox' className='checkbox' checked={selectedJordan}/>
                            <label style={{marginLeft: '7px', cursor: 'pointer'}}>Jordan Air</label>
                        </div>

                        <div style={{display: 'flex', alignItems: 'center', marginBottom: '7px', width: '100px', cursor: 'pointer'}} onClick={() => selectMax(!selectedMax)}>
                            <CheckboxOption type='checkbox' className='checkbox' checked={selectedMax}/>
                            <label style={{marginLeft: '7px', cursor: 'pointer'}}>Air Max</label>
                        </div>

                        <div style={{display: 'flex', alignItems: 'center', marginBottom: '7px', width: '100px', cursor: 'pointer'}} onClick={() => selectForce(!selectedForce)}>
                            <CheckboxOption type='checkbox' className='checkbox' checked={selectedForce}/>
                            <label style={{marginLeft: '7px', cursor: 'pointer'}}>Air Force</label>
                        </div>

                        </>
                    }
                </div>
                
                {/* Size */}
                <div style={{margin: '20px'}}>
                    <label style={{marginBottom: '10px', cursor: 'pointer'}} onClick={() => handleSizeClick(!sizeClicked)} >Size <FontAwesomeIcon icon={sizeClicked ? 'caret-up' : 'caret-down'} /></label>
                    <div style={{display: 'flex', flexWrap: 'wrap'}}>
                        {   sizeClicked &&
                            sizeOptions.map((option, i) => {
                                return (
                                    <SizeOption key={i} onClick={() => selectSize(option) } className={selectedSize === option && 'selected-size-wrapper selected-size'}>{option}</SizeOption>
                                )
                            })
                        }
                    </div>
                </div>
            </FiltersColumn>
        </div>
    )
}

export default Filters;