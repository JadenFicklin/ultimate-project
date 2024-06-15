import { LuFiles } from 'react-icons/lu';
import { IoIosSearch } from 'react-icons/io';
import { useState } from 'react';

export default function Home() {
  const [fileState, setFileState] = useState('explorer');

  return (
    <>
      <div className="bg-[#1F1F1F] w-full h-screen">
        <div className="border-b-[1px] h-11  border-b-white border-opacity-10"></div>
        <div className="w-full" style={{ height: 'calc(100% - 44px)' }}>
          <div className="bg-[#181818] max-w-[350px] h-full border-white border-r-[1px] border-opacity-10 ">
            <div className="w-[50px] h-full border-white border-r-[1px] border-opacity-10 pt-1">
              <div className="w-full h-12 grid place-content-center group cursor-pointer">
                <LuFiles className="text-white size-6 mx-auto opacity-40 group-hover:opacity-100" />
              </div>
              <div className="w-full h-12 grid place-content-center group cursor-pointer">
                <IoIosSearch className="text-white size-6 mx-auto opacity-50 transform scale-x-[-1] group-hover:opacity-100" />
              </div>
            </div>
            <div></div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
}
