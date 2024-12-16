import { UserLoginData } from '@/app/member/login/page';
import { Dispatch, SetStateAction } from 'react';

type Props = {
  label: string;
  value: string;
  setValue: Dispatch<SetStateAction<UserLoginData>>;
  type: string;
  errorMessage?: string;
};

const LoginInput = ({ label, errorMessage, value, setValue, type }: Props) => {
  return (
    <div className="flex flex-col">
      <label className="text-text-disabled font-medium text-[20px]">{label}</label>
      <input
        value={value}
        type={type === 'password' ? 'password' : 'text'}
        onChange={(e) =>
          setValue((prev) => ({
            ...prev,
            [type]: e.target.value,
          }))
        }
        className="h-[52px] border-b-[2px] border-solid border-[#e9ebed] outline-none font-medium text-[22px] focus:border-primary"
      />
      {errorMessage && <p className="font-medium text-red-500 mt-[8px]">{errorMessage}</p>}
    </div>
  );
};

export default LoginInput;
