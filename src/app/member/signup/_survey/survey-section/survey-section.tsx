import { Dispatch, SetStateAction } from 'react';
import { UserData } from '../../page';
import Survey01 from './survey01';
import Survey02 from './survey02';
import Survey03 from './survey03';
import Survey04 from './survey04';
import Survey05 from './survey05';
import Survey06 from './survey06';

interface Props {
  page: number;
  handleNext: () => void;
  userData: UserData;
  setUserData: Dispatch<SetStateAction<UserData>>;
}

function SurveySection({ page, handleNext, userData, setUserData }: Props) {
  if (page === 1)
    return <Survey01 handleNext={handleNext} userData={userData} setUserData={setUserData} />;
  if (page === 2)
    return <Survey02 handleNext={handleNext} userData={userData} setUserData={setUserData} />;
  if (page === 3) return <Survey03 handleNext={handleNext} setUserData={setUserData} />;
  if (page === 4)
    return <Survey04 handleNext={handleNext} userData={userData} setUserData={setUserData} />;
  if (page === 5)
    return <Survey05 handleNext={handleNext} userData={userData} setUserData={setUserData} />;
  if (page === 6)
    return <Survey06 handleNext={handleNext} userData={userData} setUserData={setUserData} />;
}

export default SurveySection;
