import { useLayoutEffect, useRef } from "react";

export const useIsSecondRender = <T>(fn: () => void, deps: T[]) => {
  const isFirstRender = useRef(true);

  useLayoutEffect(() => {
    if(isFirstRender.current){
      isFirstRender.current = false
    } else {
      fn()
    }
  }, deps)
}