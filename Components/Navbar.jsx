import React from 'react'
import { useState, useContext } from 'react'
import { CrowdFundingContext } from '../Context/CrowdFunding'
import { Close, Logo, Menu } from './index'

const Navbar = () => {
  const { currentAccount, connectWallet } = useContext(CrowdFundingContext)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuList = ["White Paper", "Project", "Donation", "Members"]

  return (
    <nav className='bg-white border-b border-gray-200'>
      <div className='px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
        <div className='relative flex items-center justify-between'>
          {/* Logo Section */}
          <div className='flex items-center gap-3'>
            <a
              href="/"
              aria-label='Company'
              className='inline-flex items-center'
            >
              <Logo color="text-black" />
              <span className='ml-2 text-lg font-semibold tracking-tight text-black uppercase'>
                Crowdfy
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className='hidden lg:flex items-center gap-8'>
            <ul className='flex items-center gap-8'>
              {menuList.map((el, i) => (
                <li key={i + 1}>
                  <a
                    href="/"
                    aria-label={el}
                    className='text-sm font-medium text-gray-700 transition-colors duration-200 hover:text-black'
                  >
                    {el}
                  </a>
                </li>
              ))}
            </ul>

            {/* Connect Wallet Button */}
            {!currentAccount && (
              <button
                onClick={() => connectWallet()}
                className='px-6 py-2 text-sm font-medium text-white bg-black rounded transition-all duration-200 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2'
                aria-label='Connect Wallet'
                title='Connect Wallet'
              >
                Connect Wallet
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className='lg:hidden'>
            <button
              aria-label='Open Menu'
              title='Open Menu'
              className='p-2 text-black transition-colors duration-200 hover:bg-gray-100 rounded'
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu />
            </button>

            {/* Mobile Menu Panel */}
            {isMenuOpen && (
              <div className='fixed inset-0 z-50 bg-black bg-opacity-50'>
                <div className='absolute top-0 right-0 w-full max-w-xs h-full bg-white shadow-lg'>
                  <div className='p-6'>
                    {/* Mobile Menu Header */}
                    <div className='flex items-center justify-between mb-8'>
                      <a href="/" aria-label='Company' className='inline-flex items-center'>
                        <Logo color="text-black" />
                        <span className='ml-2 text-lg font-semibold text-black uppercase'>Company</span>
                      </a>
                      <button
                        aria-label='Close Menu'
                        title='Close Menu'
                        className='p-2 text-black transition-colors duration-200 hover:bg-gray-100 rounded'
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <Close />
                      </button>
                    </div>

                    {/* Mobile Menu Items */}
                    <nav>
                      <ul className='space-y-4 mb-6'>
                        {menuList.map((el, i) => (
                          <li key={i + 1}>
                            <a
                              href="/"
                              aria-label={el}
                              className='block text-base font-medium text-gray-700 transition-colors duration-200 hover:text-black'
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {el}
                            </a>
                          </li>
                        ))}
                      </ul>

                      {/* Mobile Connect Button */}
                      {!currentAccount && (
                        <button
                          onClick={() => {
                            connectWallet()
                            setIsMenuOpen(false)
                          }}
                          className='w-full px-6 py-3 text-sm font-medium text-white bg-black rounded transition-all duration-200 hover:bg-gray-800'
                          aria-label='Connect Wallet'
                          title='Connect Wallet'
                        >
                          Connect Wallet
                        </button>
                      )}
                    </nav>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
