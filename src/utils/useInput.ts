'use client'
import { useState, useMemo } from "react";

const useInput = (initialVal?: null|string|number) => {
  const [inputVal, setInputVal] = useState<string|number>(initialVal || '');

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
     e.preventDefault();
     setInputVal(e.target.value);
  }
 
  return {inputVal, onChangeInput}
}

export default useInput;