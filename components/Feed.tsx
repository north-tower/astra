import React from 'react'
import ChatList from './ChatList'

function Feed() {
  return (
    <div>
        <div className="mx-auto my-10 max-w-lg rounded-xl border border-gray-100 px-4 py-8 shadow-lg">
          <div className="mb-4 flex justify-between border-b pb-3">
            <p className="text-xl font-bold text-gray-700">Activity feed</p>
            <button className="text-sm font-medium text-blue-700 focus:outline-none focus:ring-1">Notification Settings</button>
          </div>
        <div>
       
        <ChatList />
     
  </div>
</div>

    </div>
  )
}

export default Feed