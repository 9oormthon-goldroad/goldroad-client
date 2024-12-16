'use client';

import DefaultButton from '@/app/components/buttons/default-button';
import Input from '@/app/components/Input';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import ButtonLayout from '../../components/layout/button-layout';
import InputLayout from '../../components/layout/input-layout';
import { UserData } from '../../page';

interface Props {
  userData: UserData;
  setUserData: Dispatch<SetStateAction<UserData>>;
  handleNext: () => void;
}

function Signup({ handleNext, userData, setUserData }: Props) {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  useEffect(() => {
    const { email, password, nickname } = userData;
    if (email && password && nickname) {
      setIsButtonDisabled(false);
    }
  }, [userData]);
  return (
    <div>
      <InputLayout>
        <Input label="이메일" value={userData.email} type="email" setValue={setUserData} />
        <Input label="비밀번호" value={userData.password} type="password" setValue={setUserData} />
        <Input label="닉네임" value={userData.nickname} type="nickname" setValue={setUserData} />
      </InputLayout>
      <ButtonLayout>
        <DefaultButton text="시작하기" onClick={handleNext} disabled={isButtonDisabled} />
      </ButtonLayout>
    </div>
  );
}

export default Signup;
