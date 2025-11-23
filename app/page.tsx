import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex justify-center items-center bg-zinc-50 dark:bg-black min-h-screen font-sans">
  
            آناهیتا فهمیده 
            <Image alt="test" src="https://avatars.githubusercontent.com/u/245649825?u=3efafc2da30737b2c4829b97262b516d251e4e2e&v=4" width={500} height={500}/>
 
    </div>
  );
}
