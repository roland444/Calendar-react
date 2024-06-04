import type {Dispatch, SetStateAction} from 'react'

export const onTestClick = (count: number, setCount: Dispatch<SetStateAction<number>>) => {
  console.log('fesfs')
  setCount(7)
  console.log(count)
  //...
}

