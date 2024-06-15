import { LuFiles } from 'react-icons/lu';
import { IoIosSearch } from 'react-icons/io';
import { useState } from 'react';
import { cn } from '~/utils/cn';

export const FileSelect = () => {
  const [fileState, setFileState] = useState('explorer');
  return (
    <div className="bg-[#181818] max-w-[350px] h-full border-white border-r-[1px] border-opacity-10 flex flex-wrap">
      <div className="w-[50px] h-full border-white border-r-[1px] border-opacity-10 pt-1">
        <div
          className="w-full h-12 grid place-content-center group cursor-pointer"
          onClick={() => setFileState('explorer')}>
          <LuFiles
            className={cn(
              'text-white size-6 mx-auto opacity-40 group-hover:opacity-75',
              fileState === 'explorer' && 'opacity-75'
            )}
          />
        </div>
        <div
          className="w-full h-12 grid place-content-center group cursor-pointer"
          onClick={() => setFileState('search')}>
          <IoIosSearch
            className={cn(
              'text-white size-6 mx-auto opacity-50 transform scale-x-[-1] group-hover:opacity-100',
              fileState === 'search' && 'opacity-100'
            )}
          />
        </div>
      </div>
      <div
        className="text-white p-4 text-opacity-80 h-full"
        style={{ width: 'calc(100% - 50px)' }}>
        {fileState === 'explorer' && <div>Explorer</div>}
        {fileState === 'search' && <div>Search</div>}
      </div>
    </div>
  );
};
