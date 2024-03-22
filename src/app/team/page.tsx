import Hero from "@/components/hero";


import { getTeam } from '@/lib/team'
import Image from 'next/image'
import React from 'react'


export default async function Team() {
const member = await getTeam()
//console.log(member.results[0].name.last);

  return (
    <div>
      
        <div className='flex justify-center bg-xblack'>
          <div className='flex max-md:flex-col justify-start md:justify-center w-[90vw] xl:w-[70vw] flex-wrap gap-10 py-10'>
            <div className='flex-1'>
              <div className='flex flex-col md:sticky md:top-40 py-5 md:min-w-96'>
                  <h1 className="text-4xl md:text-5xl font-bold text-orange-400 mb-5 max-md:text-center">
                    Our Team
                  </h1>
                  <h3 className="text-xwhite text-xl md:text-2xl font-light max-md:text-center">
                  Striving for Excellence Through Collaborative Innovation and Unwavering Dedication
                  </h3>
              </div>
            </div>         
            <div className='flex flex-col items-center'>
                {member.results.map((user: any) => {
                  return (
                    <div key={user.id.value} className='flex justify-center sm:justify-start items-center bg-blue1 rounded-3xl max-sm:py-2 my-5 gap-5 sm:gap-10 max-sm:max-w-[300px] max-sm:w-full sm:w-[500px] overflow-hidden'>
                      <div className='flex shadow-[-12px_0px_15px_15px_rgba(0,0,0,0.5)] overflow-hidden max-sm:hidden'>
                          <Image src={`${user.picture.large}`} alt='user' width={100} height={100} className='rounded-l-3xl sm:min-w-32 sm:min-h-32 overflow-hidden ' />                
                      </div>
                      <div className='text-xwhite flex flex-col'>
                        <p className="flex items-center gap-3 max-sm:text-sm sm:text-xl">{user.name.first} {user.name.last} </p>
                        <p className="flex items-center gap-4 max-sm:text-sm sm:text-base font-bold"> {user.location.city} </p>
                        <p className="flex items-center gap-4 max-sm:text-sm sm:text-base">{user.email}</p>
    
                      </div>
                      
                    
                    </div>
                  )
                })}
            </div>
          </div>
        </div>
        
    </div>
  )
}