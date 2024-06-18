import ChatPermissionError from '@/components/ChatPermissionError';
import Feed from '@/components/Feed';
import TinderCards from '@/components/TinderCards';
import React from 'react';

type Props = {
  params: {};
  searchParams: {
    error: string;
  }
}

function Page({ searchParams: { error } }: Props) {
  return (
    <main>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-7xl mx-auto">
        <div>
          {error && (
            <div className='m-2'>
              <ChatPermissionError />
            </div>
          )}
          <TinderCards />
          {/* Feed component will be shown below TinderCards on mobile view */}
          <div className="block md:hidden mt-4">
            <Feed />
          </div>
        </div>
        {/* Feed component will be shown on the left side on desktop view */}
        <div className="hidden md:block">
          <Feed />
        </div>
      </div>
    </main>
  );
}

export default Page;
