import Feed from '@/components/Feed'
import TinderCards from '@/components/TinderCards'
import React from 'react'

function page() {
  return (
    <main>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-7xl mx-auto">
      <div className="hidden md:block">
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