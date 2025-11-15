import React from 'react'
import { useState, useEffect } from 'react'

const Popup = ({ setOpenModel, donate, donateFunction, getDonations }) => {
  const [amount, setAmount] = useState("")
  const [allDonationData, setallDonationData] = useState()

  const createDonation = async () => {
    try {
      const data = await donateFunction(donate.pId, amount)
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const donationsListData = getDonations(donate.pId)
    return async () => {
      const donationsData = await donationsListData
      setallDonationData(donationsData)
    }
  }, [])

  return (
    <>
      <div className='flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
        <div className='relative w-full max-w-2xl mx-4 my-6'>
          <div className='border border-gray-200 rounded-lg shadow-xl flex flex-col w-full bg-white outline-none focus:outline-none'>
            
            {/* Header */}
            <div className='flex items-start justify-between p-6 border-b border-gray-200'>
              <h3 className='text-2xl sm:text-3xl font-bold text-black'>
                {donate.title}
              </h3>
              <button
                className='p-1 ml-auto bg-transparent border-0 text-gray-400 hover:text-black transition-colors text-2xl leading-none font-semibold outline-none focus:outline-none'
                onClick={() => setOpenModel(false)}
                aria-label="Close modal"
              >
                <span className='bg-transparent text-gray-400 hover:text-black h-6 w-6 text-2xl block outline-none focus:outline-none'>
                  ×
                </span>
              </button>
            </div>

            {/* Content */}
            <div className='relative p-6 flex-auto max-h-96 overflow-y-auto'>
              <p className='text-base text-gray-700 leading-relaxed mb-6'>
                {donate.description}
              </p>

              {/* Donation input */}
              <div className='mb-6'>
                <label className='block text-sm font-medium text-black mb-2'>
                  Donation Amount
                </label>
                <input
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder='Enter amount'
                  required
                  type='text'
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition'
                  id='donationAmount'
                  name='donationAmount'
                />
              </div>

              {/* Donations list */}
              <div>
                <h4 className='text-sm font-semibold text-black mb-4 uppercase tracking-wide'>
                  Recent Donations
                </h4>
                <div className='space-y-3'>
                  {allDonationData?.map((item, i) => (
                    <div key={i} className='flex justify-between items-center text-sm text-gray-600 pb-3 border-b border-gray-100 last:border-b-0'>
                      <span className='text-gray-500'>#{i + 1}</span>
                      <span className='font-medium text-black'>{item.donation}</span>
                      <span className='truncate text-gray-500 max-w-xs'>
                        {item.donator.slice(0, 35)}...
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className='flex items-center justify-end gap-3 p-6 border-t border-gray-200'>
              <button
                className='px-6 py-2 text-sm font-medium text-gray-600 hover:text-black hover:bg-gray-50 rounded-lg transition'
                type='button'
                onClick={() => setOpenModel(false)}
              >
                Close
              </button>
              <button
                className='px-6 py-2 text-sm font-semibold text-white bg-black hover:bg-gray-900 rounded-lg transition'
                type='button'
                onClick={() => createDonation()}
              >
                Donate
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      <div 
        className='opacity-30 fixed inset-0 z-40 bg-black' 
        onClick={() => setOpenModel(false)}
      ></div>
    </>
  )
}

export default Popup
