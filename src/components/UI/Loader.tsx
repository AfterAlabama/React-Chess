import { ReactNode } from 'react'
import cl from './Loader.module.scss'

const Loader = (
  {children}: {children: ReactNode}
) => {
  return (
    <div className = {cl.container}>
      {children}
      <div className={cl.loader}></div>
    </div>
  )
}

export default Loader
