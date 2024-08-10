import React from 'react'

const page = () => {
  return (
    <div className="flex flex-col items-center w-full h-full bg-gradient-to-br from-blue-100 to-blue-400 pb-[123px]">
      <h1 className="text-center p-10 font-bold text-4xl text-blue-800">Achievements</h1>
      <div className="bg-blue-100 text-center rounded-lg p-3 lg:mx-[300px]">
        <div className="text-blue-800 font-bold pb-2 text-lg">Long story short...</div>
        <p className="text-blue-700 ">Hehe, sorry to dissapoint! Aku belum ada achievement dalam lomba apapun pada saat kuliah. Dulu waktu SMA, sempat dapet juara 2 di provinsi waktu mengikuti Olimpiade Sains Nasional pada Bidang Fisika, but in college, I haven't joined any competitions yet. But I do hope to in the future! To me, having all the experiences I had during my first year in ITB is also a kind of Achievement in itself:)</p>
      </div>
    </div>
  )
}

export default page
