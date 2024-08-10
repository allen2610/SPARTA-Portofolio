import Image from "next/image";
import Allen from '@/public/gambardiri.jpeg'


export default function Home() {
  return (
    <main className="flex flex-col items-center w-full h-full bg-gradient-to-br pb-5 from-blue-100 to-blue-400 ">
      <h1 className="text-center p-10 font-bold text-4xl text-blue-800">Allen's Portofolio</h1>
      <Image src={Allen} alt='Image' width={200} className="flex items-center rounded-xl border-[3px] border-blue-800"/>
      <div>
        <div className="bg-blue-100 text-center rounded-lg p-3 m-10 lg:mx-[300px]">
          <div className="text-blue-800 font-bold pb-2 text-lg">Short Description</div>
          <p className="text-blue-700 ">Hi there! Namaku Jessica Allen, people call me Allen. Sekarang, aku sedang menjalani SPARTA sebagai mahasiswi Teknik Informatika di ITB!</p>
          <p className="text-blue-700">Sedikit tentang diriku sendiri, aku orangnya kepoan, suka nyoba hal baru, dan ngga gampang nyerah, kecuali disuruh berhadapan dengan kecoak, ehehe, salam kenal!</p>
        </div>
        <div className="flex">
          <div className="bg-blue-100 text-center rounded-lg p-3 mb-10 mr-10 lg:ml-[300px]">
            <div className="text-blue-800 font-bold pb-2 text-lg">Minat</div>
            <p className="text-blue-700 ">Minatku ada di Cyber Security dan Software Engineering. Saya ingin menjadi seorang Cyber Securitist yang dapat diandalkan di masa depan, tetapi juga ingin memiliki karir "safety net" sebagai Software Engineer karena menurut saya bidang tersebut juga cukup menarik.</p>
          </div>
          <div className="bg-blue-100 text-center rounded-lg p-3 mb-10 ml-10 lg:mr-[300px]">
            <div className="text-blue-800 font-bold pb-2 text-lg">Bakat</div>
            <p className="text-blue-700 ">Saya juga mampu untuk bekerja secara profesional dan merupakan orang yang hard-worker. Saya bukanlah orang yang pada dasarnya berbakat pada bidang keinformatikaan, tetapi saya percaya dengan kerja keras dan dedikasi, saya dapat memperoleh ilmu yang bermanfaat pada bidang ini.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
