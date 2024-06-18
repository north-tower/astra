import ChatPermissionError from '@/components/ChatPermissionError';
import Feed from '@/components/Feed'
import TinderCards from '@/components/TinderCards'
import React from 'react'

type Props = { 
  params: {};
  searchParams: {
    error: string;
  }
}

function page({ searchParams: {error} } : Props) {
  return (
    <main>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-7xl mx-auto">
   
    
    
      <div className="hidden md:block">
      <div>
      {error && (
        <div className='m-2'>
          <ChatPermissionError />
          </div>
      )}
    </div>
        <Feed />
      </div>
      <div>
        <TinderCards />
      </div>
    </div>
  </main>
  )
}

export default page