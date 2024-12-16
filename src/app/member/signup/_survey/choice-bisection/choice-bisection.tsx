'use client';

import { Dispatch, SetStateAction, useState } from 'react';
import { UserData } from '../../page';
import BisectionCard from './bisection-card';

interface Props {
  userData: UserData;
  setUserData: Dispatch<SetStateAction<UserData>>;
}
function ChoiceBisection({ userData, setUserData }: Props) {
  const [isMan, setIsMan] = useState(userData.genderType === '남성');
  const handleClick = (text: string) => {
    setIsMan(text === '남성');
    setUserData((prev) => ({ ...prev, genderType: text }));
  };
  return (
    <div className="flex justify-center items-center w-full gap-6">
      <BisectionCard iconName="man" text="남성" isChoosed={isMan} onClick={handleClick} />
      <BisectionCard iconName="woman" text="여성" isChoosed={!isMan} onClick={handleClick} />
    </div>
  );
}

export default ChoiceBisection;
