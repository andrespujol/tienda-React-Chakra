import React, { useContext } from 'react'
import { CartWidget } from '../CartWidget/CartWidget'
import './NavBar.css'
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { ChevronDownIcon } from "@chakra-ui/icons"
import { GiHamburgerMenu } from 'react-icons/gi';
import { RiShoppingBagLine } from 'react-icons/ri';
import CartContext from '../../Context/CartContext'
// import { FcLike } from 'react-icons/fc';
import { NavLink } from 'react-router-dom';


export const NavBar = () => {
  const { getQuantity } = useContext(CartContext)
  
  return (
        <>
        <header className='menu'>
            <div className='logo'>
              <h1>Logo</h1>
            </div>
            <div className='menu-list'>
                <Button colorScheme='blue'><NavLink to={'/'}>Home</NavLink> </Button>
                <Menu className="menu-desktop">
                  <MenuButton as={Button} color='#fff' rightIcon={<ChevronDownIcon />}>
                    Products
                  </MenuButton>
                  <MenuList>
                    <MenuItem><NavLink to={'/category/T-shirts'}>T-shirts</NavLink></MenuItem>
                    <MenuItem><NavLink to={'/category/Blouses'}>Blouses</NavLink></MenuItem>
                    <MenuItem><NavLink to={'/category/Shirts'}>Shirts</NavLink></MenuItem>
                    {/* <MenuItem><NavLink to={'/category/Pantalones'}>Pantalones</NavLink></MenuItem> */}
                  </MenuList>
                </Menu>
                <Button colorScheme='blue'><NavLink to={`/About`}>About</NavLink> </Button>
                <Button colorScheme='blue'><NavLink to={`/Contact`}>Contact</NavLink> </Button>
            </div>
            <div className="menu-mobile">
            <Menu display="flex" alignItems="center" justifyContent="flex-end"  >
              {({ isOpen }) => (
                <>
                  <MenuButton isActive={isOpen} as={Button} rightIcon={<ChevronDownIcon />}>
                    {isOpen ? <GiHamburgerMenu /> : <GiHamburgerMenu />}
                  </MenuButton>
                  <MenuList>
                    <MenuItem>
                      <NavLink to={'/'}>Home</NavLink>
                    </MenuItem>
                    <MenuItem>
                      <NavLink to={'/category/T-shirts'}>T-shirts</NavLink>
                    </MenuItem>
                    <MenuItem>
                      <NavLink to={'/category/Blouses'}>Blouses</NavLink>
                    </MenuItem>
                    <MenuItem>
                      <NavLink to={'/category/Shirts'}>Shirts</NavLink>
                    </MenuItem>
                    <MenuItem>
                      <NavLink to={'/category/About'}>About</NavLink>
                    </MenuItem>
                    <MenuItem>
                      <NavLink to={'/category/Contact'}>Contact</NavLink>
                    </MenuItem>
                    {/* <MenuItem><NavLink to={'/WishList'}><FcLike/></NavLink></MenuItem> */}
                    <MenuItem>{getQuantity()!==0 && 
                      <NavLink to={'/Cart'} className='cartBtn'><RiShoppingBagLine /><span className='cartQuantity'>{getQuantity()}</span></NavLink>}
                    </MenuItem>
                  </MenuList>
                </>
              )}
            </Menu>
            </div>
            <CartWidget />
        </header>
        </>
  );
};
