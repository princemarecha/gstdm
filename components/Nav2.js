import React, { useContext, useEffect } from 'react'
import { useRouter } from 'next/router';
import { Fragment, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, ShoppingCartIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Badge } from '@mui/material';
import Link from 'next/link';
import { cartNum } from '../Helper/Context';

const Nav2 = () => {
   
    const [cartItems,setCartItems] = useState([]);
  useEffect(() =>{
   
    if (localStorage.getItem("cart"))
    {setCartNumber(  JSON.parse(localStorage.getItem("cart")).length);}
    else
    {
      setCartNumber(0);
    }
  }
    
    ,[])
    
    const [home, setHome] = useState(false);
    const [about, setAbout] = useState(false);
    const [cart, setCart] = useState(false);
    const [terms, setTerms] = useState(false);
    
    const {cartNumber, setCartNumber} = useContext(cartNum);



    const navigation = [
    { name: 'Home', href: '/', current: home },
    { name: 'About', href: '/about', current: about },
    { name: 'Terms', href: '/terms', current: terms },
    { name: 'Cart', href: '/cart', current: cart },
  ]

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  const router = useRouter();

  if (router.pathname == "/"){
    if (!home)setHome(true);
  }
  else if (router.pathname == "/about"){
    if (!about)setAbout(true);
  }
  else if (router.pathname == "/terms"){
    if (!terms)setTerms(true);
  }
  else if (router.pathname == "/cart"){
    if (!cart)setCart(true);
  }


  return (
    <div>
<p>{cartNumber.length}</p>
<Disclosure as="nav" className="bg-white shadow-xl">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-8 w-10 lg:hidden"
                    src="../images/GSTDMLogo.png"
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-8 w-10 lg:block"
                    src="../images/GSTDMLogo.png"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-black hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="sr-only">View notifications</span>
                  <Link href="/cart">
                    <Badge badgeContent={JSON.stringify(cartNumber)} color='primary'>
                    <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
                    </Badge>
                    </Link>
                </button>

       
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-black hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
    </div>
  )
}

export default Nav2