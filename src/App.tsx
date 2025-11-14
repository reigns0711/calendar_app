import React from 'react';
import Calendar from './components/Calendar';

export default function App(){
  // example date: 3 Oct 2022
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <Calendar date={new Date(2022,9,3)} />
    </div>
  )
}
