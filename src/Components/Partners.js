import React from 'react'
import mailChimp from '../Images/mailchimp.png'
import shopify from '../Images/Shopify.png'
import tiktok from '../Images/tiktok.png'
import instagram from '../Images/instagram.png'
import slack from '../Images/slack.png'
import dropBox from '../Images/dropbox.png'

const Partners = () => {
  return (
    <section class="dark:bg-gray-900">
    <div class="py-8 lg:py-8 mx-auto max-w-screen-xl px-4">
        <p class="mb-8 lg:mb-10 text-sm tracking-tight leading-tight text-center text-[#475569] font-bold  md:text-[16px]">Trusted by most popular players in the tech.</p>
        <div class="grid grid-cols-2 gap-8 text-gray-500 sm:gap-6 md:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
            <a href="https://www.shopify.com/" class="flex shadow-md justify-center items-center w-[75px] h-[75px] rounded-full bg-white">
            <img src={shopify} alt='shopify img' className='w-[50%] h-[50%]'/>                       
            </a>
            <a href="https://www.dropbox.com/" class="flex shadow-md justify-center items-center w-[75px] h-[75px] rounded-full bg-white">
            <img src={dropBox} alt='drop box img' className='w-[50%] h-[50%]'/>                                              
            </a>
            <a href="https://mailchimp.com/" class="flex shadow-md justify-center items-center w-[75px] h-[75px] rounded-full bg-white">
               <img src={mailChimp} alt='mailchimp img' className='w-[50%] h-[50%]'/>                                                         
            </a>

            <a href="https://slack.com/" class="flex shadow-md justify-center items-center w-[75px] h-[75px] rounded-full bg-white">
            <img src={slack} alt='slack img' className='w-[50%] h-[50%]'/>                                                                          
            </a>
            <a href="https://instagram.com/" class="flex shadow-md justify-center items-center w-[75px] h-[75px] rounded-full bg-white">
            <img src={instagram} alt='insta img' className='w-[50%] h-[50%]'/>                                         
            </a>
            <a href="https://tiktok.com/" class="flex shadow-md justify-center items-center w-[75px] h-[75px] rounded-full bg-white">    
            <img src={tiktok} alt='tiktok img'className='w-[50%] h-[50%]'/>                                                                              
            </a>
        </div>
    </div>
</section>
  )
}

export default Partners
