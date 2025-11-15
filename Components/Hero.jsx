import React, { useState } from 'react'
import { Icon } from './index';

const Hero = ({ titleData, createCampaign }) => {
  const [campaign, setCampaign] = useState({
    title: "",
    description: "",
    amount: "",
    deadline: ""
  })

  const createNewCampaign = async (e) => {
    e.preventDefault();
    try {
      console.log(campaign);
      const data = await createCampaign(campaign);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='relative w-full'>
      <div className='absolute inset-0 bg-gradient-to-b from-black to-gray-900 opacity-95'></div>
      <img 
        src="https://images.pexels.com/photos/3228766/pexels-photo-3228766.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
        className="absolute inset-0 object-cover w-full h-full opacity-20" 
        alt="background" 
      />

      <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-24">
        {/* <Icon /> */}
        
        <div className='flex flex-col items-center justify-between gap-8 xl:flex-row xl:gap-16'>
          {/* Left content section */}
          <div className='w-full max-w-xl xl:w-5/12'>
            <h2 className='text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight'>
              Crowdfy <br className='hidden md:block' />
              Crowdfunding
            </h2>
            
            <p className='text-base md:text-lg text-gray-300 mb-6 leading-relaxed max-w-lg'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione molestiae at repellat voluptas blanditiis error odit ducimus, amet reiciendis eaque! Excepturi, iste odio dolore dolor nulla blanditiis totam repellat voluptatem.
            </p>
            
            <a 
              href="/"
              className='inline-flex items-center text-sm font-semibold text-white hover:text-gray-300 transition-colors group'
            >
              Learn More
              <svg
                className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform"
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
              </svg>
            </a>
          </div>

          {/* Right form section */}
          <div className='w-full max-w-xl xl:w-5/12'>
            <div className='bg-white rounded-lg shadow-2xl p-8 sm:p-10'>
              <h3 className='text-2xl sm:text-3xl font-bold text-black mb-8'>
                Create Campaign
              </h3>

              <form onSubmit={createNewCampaign}>
                {/* Title input */}
                <div className='mb-6'>
                  <label htmlFor="title" className='block text-sm font-medium text-black mb-2'>
                    Campaign Title
                  </label>
                  <input
                    onChange={(e) => setCampaign({
                      ...campaign,
                      title: e.target.value
                    })}
                    placeholder='Enter campaign title'
                    required
                    type='text'
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition'
                    id='title'
                    name='title'
                  />
                </div>

                {/* Description input */}
                <div className='mb-6'>
                  <label htmlFor="description" className='block text-sm font-medium text-black mb-2'>
                    Description
                  </label>
                  <input
                    onChange={(e) => setCampaign({
                      ...campaign,
                      description: e.target.value
                    })}
                    placeholder='Describe your campaign'
                    required
                    type='text'
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition'
                    id='description'
                    name='description'
                  />
                </div>

                {/* Amount input */}
                <div className='mb-6'>
                  <label htmlFor="amount" className='block text-sm font-medium text-black mb-2'>
                    Target Amount
                  </label>
                  <input
                    onChange={(e) => setCampaign({
                      ...campaign,
                      amount: e.target.value
                    })}
                    placeholder='Enter target amount'
                    required
                    type='text'
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition'
                    id='amount'
                    name='amount'
                  />
                </div>

                {/* Deadline input */}
                <div className='mb-8'>
                  <label htmlFor="deadline" className='block text-sm font-medium text-black mb-2'>
                    Deadline
                  </label>
                  <input
                    onChange={(e) => setCampaign({
                      ...campaign,
                      deadline: e.target.value
                    })}
                    placeholder='Select deadline'
                    required
                    type='date'
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition'
                    id='deadline'
                    name='deadline'
                  />
                </div>

                {/* Submit button */}
                <button
                  type='submit'
                  className='w-full bg-black text-white font-semibold py-3 px-4 rounded-lg hover:bg-gray-900 transition duration-200 mb-3'
                >
                  Create Campaign
                </button>

                <p className='text-xs text-gray-500 text-center'>
                  Create your campaign to raise funds for your project
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
