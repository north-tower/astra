import React from 'react'
import { authOptions } from '@/auth'
import { getDocs } from 'firebase/firestore'
import { getServerSession } from 'next-auth'
// import { chatMembersCollectionGroupRef } from '@/lib/converters/ChatMembers';
// import ChatListRows from './ChatListRows';

async function ChatList() {
    const session = await getServerSession(authOptions);

    // const chatsSnapshot = await getDocs(
    //   chatMembersCollectionGroupRef(session?.user.id!)
    // )

    // const initialChats = chatsSnapshot.docs.map((doc) => ({
    //   ...doc.data(),
    // }));

  return (
    <div>ChatList</div>
  )
}

export default ChatList