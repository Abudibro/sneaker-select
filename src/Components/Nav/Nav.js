import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Nav.css';

const AccountNav = styled.div`
	min-height: 35px;
	background-color: #f6f6f6;
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;

const JoinUs = styled.p`
	margin: 0;
	margin-right: 10px;
	font-size: 0.8rem;
	height: 100%;
	&:hover {
		color: #595959;
	}
`;

const SignIn = styled.p`
	margin: 0px 20px 0px 10px;
	font-size: 0.8rem;
	height: 100%;
	&:hover {
		color: #595959;
	}
`;


function Nav(props) {

	const { bagItems, itemCardsData } = props;

	const [minimized, setMinimize] = useState(window.innerWidth <= 960);
	const [clicked, setClick] = useState(false);
	const [searchInput, changeSearchInput] = useState('');
	
	const handleResize = () => {
		if (window.innerWidth > 960) {
			setMinimize(false);
			setClick(false);
		}
		else {
			setMinimize(true);
		}
	}

	useEffect(() => {
		window.addEventListener("resize", handleResize, false);
	}, []);

	const searchedItems =  itemCardsData.filter(item =>  {
		return item.name.toLowerCase().includes(searchInput.toLowerCase());
	})

	console.log(searchedItems);

    return (
		<>	
			<div className='nav-wrapper'>
				<div className={clicked ? 'active' : !clicked && minimized ? 'idle' : 'main'}>
					<Link to='/' className='link' style={{marginTop: '17px', fontSize: '22px', cursor: 'pointer', marginLeft: '20px', fontWeight: '500', display: 'inline-block'}}>Sneaker Select</Link>
					<FontAwesomeIcon icon={clicked ? 'times' : 'bars'} onClick={() => setClick(!clicked)} className={minimized ? 'bars' : 'bars-main'}/>

					
					<ul className={clicked ? 'active-nav' : !clicked && minimized ? 'idle-nav' : 'main-nav'}>
						<Link className='link' to='/'>
							<li className={clicked ? 'active-link' : 'main-link'}><p style={{marginBottom:'0', margin: '10px'}}>Home</p></li>
						</Link>
						<Link className='link' to='/shop'>
							<li className={clicked ? 'active-link' : 'main-link'}>
								<p style={{marginBottom:'0', margin: '10px'}}>Shop</p> 
							</li>
						</Link>
					</ul>

					<ul className={clicked ? 'active-nav' : !clicked && minimized ? 'idle-nav' : 'main-nav'}>
						<li className={clicked ? 'active-link' : 'main-link'}>
							<div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
								<div id='search-bar-wrapper'>
									<FontAwesomeIcon icon='search' id='search-bar-icon'/>				
									<input type='text' autoComplete="off" id='nav-search' placeholder='Search' onChange={e => changeSearchInput(e.target.value)}/>
								</div>
								{
									searchInput.length >= 1 &&
									<div style={{maxHeight: 'auto', minHeight: '36px', width: '100%', backgroundColor: 'white', position: 'relative', zIndex: '1', paddingLeft: '35px', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px'}}>
										<Link to={{
										pathname: searchedItems.length >= 1 ?`/shop/${searchedItems[0].id}` : '/shop',
										state: {
											item: searchedItems[0]
										}
									}} className={searchedItems.length >= 1 ? 'link' : 'link disabled-link'} onClick={() => changeSearchInput('')}>{searchedItems.length === 0 ? `Couldn't match item` : searchedItems[0].name}</Link>
									</div>
								}

							</div>

						</li>
						<li style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
							<div className={clicked ? 'active-icon' : 'nav-icon'} style={{width: '44px', marginRight: '10px', display: 'flex'}} >
								<div style={{width: '24px'}}>
									<Link style={{color: 'rgb(39, 39, 39)'}} to='/bag'><FontAwesomeIcon icon='shopping-bag'  /></Link>
								</div>
								{
									bagItems.length > 0 &&
									<FontAwesomeIcon icon='circle' style={{fontSize: '12px', color: 'rgb(206, 0, 0)', marginTop: '2px'}}/>
								}
							</div>
							{/* <Link style={{color: 'rgb(39, 39, 39)'}} to='/liked'><FontAwesomeIcon icon='heart' className={clicked ? 'active-icon' : 'nav-icon'}/></Link> */}
						</li>
					</ul>
					
					
				</div>

				<AccountNav>
					<Link
						style={{textDecoration: 'none', color: 'black', height: '100%', position: 'relative', zIndex: '0'}}
						to='/register'
					><JoinUs>Join Us</JoinUs></Link>
					|
					<Link
						style={{textDecoration: 'none', color: 'black', zIndex: 0}}
						to='/signin'
					><SignIn>Sign In</SignIn></Link>
				</AccountNav>
			</div>
		</>
    );
}

export default Nav;
