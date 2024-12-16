interface Props {
  num: number;
  setNum: (num: number) => void;
  index: number;
}
function Button05({ num, setNum, index }: Props) {
  return <button onClick={() => setNum(index * 25)}>{num}명</button>;
}

export default Button05;
