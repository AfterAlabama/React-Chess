import { useLayoutEffect, useRef } from "react";


export const useIsSecondRender = (fn: Function, deps: any[]) => {
  const isFirstRender = useRef(true);

  useLayoutEffect(() => {
    if(isFirstRender.current){
      isFirstRender.current = false
    } else {
      fn()
    }
  }, deps)
}