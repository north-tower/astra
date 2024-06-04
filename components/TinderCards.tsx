'use client'

import { useEffect, useState } from 'react';
import TinderCard from 'react-tinder-card';
import { XMarkIcon, ArrowPathIcon, StarIcon, HeartIcon , BoltIcon} from '@heroicons/react/24/solid';

export type People = {
  name: string;
  url: string;
};

async function fetchData() {
  try {
    const response = await fetch(`https://supreme-goggles-beta.vercel.app/api/v1/getPeople`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data: People[] = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch data:', error);
    return [];
  }
}

function TinderCards() {
  const [data, setData] = useState<People[]>([]);

  useEffect(() => {
    fetchData().then(setData);
  }, []);

  const onSwipe = (direction: string) => {
    console.log('You swiped: ' + direction);
  };

  const onCardLeftScreen = (myIdentifier: string) => {
    console.log(myIdentifier + ' left the screen');
  };

  return (
    <div className="flex justify-center items-center relative w-full h-[80vh]">
      {data.map((person, index) => (
        <TinderCard
          key={person.name}
          onSwipe={onSwipe}
          onCardLeftScreen={() => onCardLeftScreen(person.name)}
          preventSwipe={['right', 'left']}
          className="absolute w-[90%] h-[70%] max-w-sm"
          
        >
          <div
            style={{ backgroundImage: `url(${person.url})` }}
            className="bg-cover bg-center w-full h-full rounded-xl shadow-lg flex flex-col justify-end"
          >
            <div className="relative w-full h-full rounded-xl shadow-lg bg-cover bg-center" style={{ backgroundImage: `url(${person.url})` }}>
            <div className="absolute bottom-0 w-full text-center p-4 bg-black bg-opacity-50 rounded-b-xl">
              <h3 className="text-white text-lg">{person.name}</h3>
    
            </div>
          </div>
            
          </div>
        </TinderCard>
      ))}
        <div className="absolute bottom-0 w-full flex justify-center gap-6">
            <ArrowPathIcon className="h-10 w-10 text-blue-500" />

            <XMarkIcon className="h-12 w-12 text-blue-500" />
            <StarIcon className="h-12 w-12 text-blue-500" />
            <HeartIcon className="h-12 w-12 text-blue-500" />
            <BoltIcon className="h-12 w-12 text-blue-500" />




        </div>
        
    </div>
  );
}

export default TinderCards;
