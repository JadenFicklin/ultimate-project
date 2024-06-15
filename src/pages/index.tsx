import { FileSelect } from '~/components/FileSelect';

export default function Home() {
  return (
    <>
      <div className="bg-[#1F1F1F] w-full h-screen">
        <div className="border-b-[1px] h-11  border-b-white border-opacity-10"></div>
        <div className="w-full" style={{ height: 'calc(100% - 44px)' }}>
          <FileSelect />

          <div></div>
        </div>
      </div>
    </>
  );
}
