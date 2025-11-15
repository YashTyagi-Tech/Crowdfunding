import React from 'react'

const Card = ({ allcampaign, setOpenModel, setDonate, title }) => {
  const daysLeft = (deadline) => {
    const difference = new Date(deadline).getTime() - Date.now()
    const remainingDays = difference / (1000 * 3600 * 24)
    return remainingDays.toFixed(0)
  }

  return (
    <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <p className='py-16 text-3xl font-bold text-black mb-12'>{title}</p>
      
      <div className='grid gap-6 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full'>
        {allcampaign?.map((campaign, i) => (
          <div
            onClick={() => (setDonate(campaign), setOpenModel(true))}
            key={i + 1}
            className='cursor-pointer bg-white border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-black rounded-sm group'
          >
            <div className='relative overflow-hidden bg-gray-100 h-64'>
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=500&q=60"
                className='object-cover w-full h-full group-hover:scale-105 transition-transform duration-300'
                alt={campaign.title}
              />
            </div>

            <div className='p-6 space-y-4'>
              <div className='flex items-center justify-between'>
                <p className='text-xs font-semibold text-gray-500 uppercase tracking-wide'>
                  Days Left
                </p>
                <span className='text-sm font-bold text-black bg-gray-100 px-3 py-1 rounded-full'>
                  {daysLeft(campaign.deadline)}
                </span>
              </div>

              <div className='space-y-2'>
                <a
                  href="/"
                  aria-label='Campaign'
                  className='inline-block text-black transition-colors duration-200 hover:text-gray-600'
                >
                  <p className='text-xl font-bold leading-tight'>{campaign.title}</p>
                </a>
                <p className='text-sm text-gray-600 line-clamp-2'>{campaign.description}</p>
              </div>

              <div className='pt-4 border-t border-gray-200 space-y-3'>
                <div className='flex justify-between items-center'>
                  <span className='text-xs font-semibold text-gray-500 uppercase'>Target</span>
                  <span className='text-sm font-bold text-black'>{campaign.target} ETH</span>
                </div>
                <div className='flex justify-between items-center'>
                  <span className='text-xs font-semibold text-gray-500 uppercase'>Raised</span>
                  <span className='text-sm font-bold text-black'>{campaign.amountCollected}</span>
                </div>

                <div className='mt-4 h-1 bg-gray-200 rounded-full overflow-hidden'>
                  <div
                    className='h-full bg-black transition-all duration-500'
                    style={{
                      width: `${Math.min(
                        (parseFloat(campaign.amountCollected) / parseFloat(campaign.target)) * 100,
                        100
                      )}%`,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Card
