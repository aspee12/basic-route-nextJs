import Image from "next/image";
import { ReactNode } from 'react';

interface CommonDataType {
    imageUrl: string;
    imageAlt: string;
    titile: string;
    children?: ReactNode;
}

export default function SharedComponent(data: CommonDataType) {
    return (
      <div className="relative h-screen">
        <div className="absolute -z-10 inset-0">
          <Image
            src={data.imageUrl}
            alt={data.imageAlt}
            fill
            style={{ objectFit: "cover" }}
          />
          <div className='absolute inset-0 bg-gradient-to-r from-slate-900' />
        </div>
        <div className='pt-48 flex justify-center  items-center'>
            <h1 className='text-white text-[40px] font-bolder'>
                {data.titile}
            </h1>
        </div>
        <div className="w-full">{data.children}</div>
      </div>
    );
}