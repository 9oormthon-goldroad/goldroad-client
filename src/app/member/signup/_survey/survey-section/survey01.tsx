import DefaultButton from '@/app/components/buttons/default-button';
import { Dispatch, SetStateAction } from 'react';
import ButtonLayout from '../../components/layout/button-layout';
import InputLayout from '../../components/layout/input-layout';
import { UserData } from '../../page';
import ChoiceBisection from '../choice-bisection/choice-bisection';
import ChoiceLayout from '../choice-layout';

interface Props {
  handleNext: () => void;
  userData: UserData;
  setUserData: Dispatch<SetStateAction<UserData>>;
}

function Survey01({ handleNext, userData, setUserData }: Props) {
  return (
    <ChoiceLayout title="성별을 선택해주세요">
      <InputLayout>
        <ChoiceBisection userData={userData} setUserData={setUserData} />
      </InputLayout>
      <ButtonLayout>
        <DefaultButton text="다음" onClick={handleNext} />
      </ButtonLayout>
    </ChoiceLayout>
  );
}

export default Survey01;
