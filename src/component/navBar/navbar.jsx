import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../navBar/navbar.css'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';


function navbar() {
    const [active, setActive] = useState('Home');

    // searching feature   ============
    const Navigate = useNavigate()
    const [SearchItem, setSearchItem] = useState("")

    const searchingHendling = (e) => {
        e.preventDefault()
        Navigate(`/search/${SearchItem}`)
        setSearchItem("")
    }

    //  Cart feature ==========
    // const [count, setCount] = useState(0)


    return (
        <header className="navbar" >
            <Link to='/' style={{ "textDecoration": "none" }}><img src="https://www.zarla.com/images/zarla-crockery-craze-1x1-2400x2400-20230110-qkk8pj9bj44kkpdjr7b8.png?crop=1:1,smart&width=250&dpr=2" alt="" width={80} /></Link>


            {/*==== menu ======= */}

            <ul className="menu">
                <Link to='/' style={{ "textDecoration": "none" }}><li onClick={() => { setActive('Home') }}>Home{active === 'Home' ? <hr /> : <></>} </li></Link>
                <Link to='/Decor' style={{ "textDecoration": "none" }}><li onClick={() => { setActive('Decor') }}>Decor {active === 'Decor' ? <hr /> : <></>} </li></Link>
                <Link to='/DiningKitchen' style={{ "textDecoration": "none" }}><li onClick={() => { setActive('DiningKitchen') }}>Dining & Kitchen {active === 'DiningKitchen' ? <hr /> : <></>} </li></Link>
                <Link to='/Living' style={{ "textDecoration": "none" }}><li onClick={() => { setActive('Living') }}>Living {active === 'Living' ? <hr /> : <></>} </li></Link>
            </ul>


            {/* ------- search bar ------- */}
            <form className="search-Bar" onSubmit={searchingHendling}>
                <SearchIcon />
                <input
                    type="text"
                    value={SearchItem}
                    placeholder='search...'
                    onChange={(e) => { setSearchItem(e.target.value) }} />
            </form>


            {/* ------- cart & login  ------- */}

            <div className="login">
                <Link to='/LoginCart'><button className='button'>Login</button></Link>

                <Link to='/cart'><ShoppingCartOutlinedIcon /></Link>
                <div className="cart-logo">0</div>
            </div>
        </header>
    )
}

export default navbar