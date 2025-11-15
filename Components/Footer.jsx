import React from 'react'

const Footer = () => {
  const productList = ["Market", "ERC20 Token", "Donation"];
  const contactList = [
    "support@cryptoking.com",
    "info@example.com",
    "Contact us",
  ]
  const usefullLink = ["Home", "About Us", "Company Bio"]
  
  return (
    <footer className='bg-white border-t border-gray-200'>
      <div className='mx-auto max-w-7xl px-4 py-12 md:py-16'>
        <div className='grid gap-8 md:gap-12 md:grid-cols-2 lg:grid-cols-4 mb-8'>
          {/* Brand section */}
          <div>
            <h6 className='text-lg font-semibold text-black mb-4'>
              Crypto King
            </h6>
            <p className='text-sm text-gray-600 leading-relaxed'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut labore in molestias!
            </p>
          </div>

          {/* Products section */}
          <div>
            <h6 className='text-sm font-semibold text-black uppercase tracking-wide mb-4'>
              Products
            </h6>
            <ul className='space-y-3'>
              {productList.map((el, i) => (
                <li key={i}>
                  <a href="#!" className='text-sm text-gray-600 hover:text-black transition-colors'>
                    {el}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful links section */}
          <div>
            <h6 className='text-sm font-semibold text-black uppercase tracking-wide mb-4'>
              Useful Links
            </h6>
            <ul className='space-y-3'>
              {usefullLink.map((el, i) => (
                <li key={i}>
                  <a href="#!" className='text-sm text-gray-600 hover:text-black transition-colors'>
                    {el}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact section */}
          <div>
            <h6 className='text-sm font-semibold text-black uppercase tracking-wide mb-4'>
              Contact
            </h6>
            <ul className='space-y-3'>
              {contactList.map((el, i) => (
                <li key={i}>
                  <a href="#!" className='text-sm text-gray-600 hover:text-black transition-colors'>
                    {el}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className='border-t border-gray-200 pt-8'>
          <p className='text-center text-sm text-gray-600'>
            <span>2025 Copyright:</span>
            <a href="#!" className='font-semibold text-black ml-1 hover:text-gray-700'>
              Crypto King
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
