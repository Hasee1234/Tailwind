import React from 'react'

const Grid = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-2'>
      <div className="bg-red-300 col-span-2 p-10 border border-red-700"></div>
      <div className="bg-red-400 p-10 border border-red-700"></div>
      <div className="bg-red-500 p-10 border border-red-700"></div>
      <div className="bg-red-600 p-10 border border-red-700"></div>
      <div className="bg-red-700 p-10 border border-red-700"></div>
      <div className="bg-red-800 row-span-3 p-10 border border-red-700"></div>
      <div className="bg-red-900 p-10 border border-red-700"></div>
      <div className="bg-red-950 p-10 border border-red-700"></div>
      <div className="bg-red-300 p-10 border border-red-700"></div>
      <div className="bg-red-400 p-10 border border-red-700"></div>
      <div className="bg-red-500 p-10 border border-red-700"></div>
      <div className="bg-red-600 p-10 border border-red-700"></div>
      <div className="bg-red-700 p-10 border border-red-700"></div>
      <div className="bg-red-800 p-10 border border-red-700"></div>
      <div className="bg-red-900 p-10 border border-red-700"></div>
      <div className="bg-red-950 p-10 border border-red-700"></div>
      {/* col-span-2 in a div to give more space of divs like wise col-span-3 for 3 divs space  */}
      {/* row-span-2 in a div to give more space of divs like wise row-span-3 for 3 divs space  */}
      {/* if yoou want in mobile view it show 2 columns do grid-col-1 and for big screen do md:grid-cols-4  and for large screen do lg:grid-cols-6  and for extra large screen do xl:grid-cols-8  and for extra extra large screen do 2xl:grid-cols-12  */}
    </div>
  )
}

export default Grid
