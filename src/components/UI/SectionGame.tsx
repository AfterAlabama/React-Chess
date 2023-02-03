import { Link } from "react-router-dom";


const SectionGame = ({classes, image, route}:any) => {
  return (
    <div className = {classes.game} >
      <div 
        className = {image}
      ></div>
      <Link 
        className = {classes.bigBtn} to = {route}>
        Play
      </Link>
    </div>
  )
}

export default SectionGame
