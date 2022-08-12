import { useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import HomeLeft from "../../components/home/HomeLeft";
export default function Home() {
  //user
  const { user } = useSelector((user) => ({ ...user }))
  return <div>
<Header/>
    <HomeLeft user={user} />
</div>;
}
