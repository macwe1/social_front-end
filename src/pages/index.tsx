import { SideBarContainers } from '@containers/sideBar/sideBar'
import {useDispatch, useSelector} from "react-redux";
import { increment } from '@store/counter/counterActions'
import Link from 'next/link'
// import { ProfileContainers } from '@containers/profile/profile'

/**
 * Homepage
 */
const HomePage: React.FC = () => {
  const counter = useSelector(state => state.counter.count);
  const dispatch = useDispatch()
  console.log(counter)
  return (
    <>
      <SideBarContainers />
      <Link href='login'>
        <a>login</a>
      </Link>
      <button>-</button>
      <div>counter: {counter}</div>
      <button onClick={() => dispatch(increment)}>+</button>
       {/*<ProfileContainers />*/}
    </>
  )
}

export default HomePage
