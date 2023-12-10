import { currentUser } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

export const Header: React.FC = async () => {
  const user = await currentUser();
  return (
    <div className='p-4 flex gap-4'>
      <Image
        src={user?.imageUrl}
        alt='User profile picture'
        width={64}
        height={64}
        className='rounded-full'
      />
      <div className="flex flex-col">
        <p className='text-3xl text-gray-800'>{user?.firstName}</p>
        <p className='text-sm text-gray-400'>
          {user?.emailAddresses[0].emailAddress}
        </p>
      </div>
    </div>
  );
};
