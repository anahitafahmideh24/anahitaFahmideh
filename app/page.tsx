import Image from 'next/image';

import ana from '../public/images/ana.jpg';

export default function Home() {
  return (
    <div className="flex justify-center items-center bg-zinc-50 dark:bg-black min-h-screen font-sans">
  
            آناهیتا فهمیده 
            <Image alt="test" src={ana} width={500} height={500}/>
 
    </div>
  );
}
