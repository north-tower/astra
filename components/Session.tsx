import { authOptions } from '@/auth';
import { getServerSession } from 'next-auth';
import React from 'react'

async function Session() {
    const session = await getServerSession(authOptions);
    console.log(session);

  return (
    <div>Session</div>
  )
}

export default Session