'use client';

import DefaultButton from '@/app/components/buttons/default-button';
import { Dispatch, SetStateAction, useState } from 'react';
import ButtonLayout from '../../components/layout/button-layout';
import InputLayout from '../../components/layout/input-layout';
import { UserData } from '../../page';
import ChoiceLayout from '../choice-layout';
import ChoiceCard from '../choice-section/choice-card';

interface Props {
  handleNext: () => void;
  userData: UserData;
  setUserData: Dispatch<SetStateAction<UserData>>;
}

function Survey04({ handleNext, setUserData }: Props) {
  const [selected, setSelected] = useState<number>(0);
  const choices = ['평일 오전', '평일 오후', '주말 오전', '주말 오후'];
  const handleSelect = (index: number) => {
    setSelected(index);
    setUserData((prev) => ({ ...prev, preferredTime: choices[index] }));
  };
  return (
    <ChoiceLayout title="선호하는 모임 시간대를 선택해주세요">
      <InputLayout>
        <div className="grid grid-cols-2 gap-4">
          {choices.map((choice, index) => (
            <ChoiceCard
              key={choice}
              choice={choice}
              isSelected={index === selected}
              index={index}
              handleSelect={handleSelect}
            />
          ))}
        </div>
      </InputLayout>
      <ButtonLayout>
        <DefaultButton text="다음" onClick={handleNext} />
      </ButtonLayout>
    </ChoiceLayout>
  );
}

export default Survey04;
