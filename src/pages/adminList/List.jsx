import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import Datatable from "../../components/datatable/Datatable"

const List = ({columns}) => {
  return (
    <div>
      <Navbar/>
      <Header type={"list"} state= {'1'}/>
      <div className="list">
        <Sidebar/>
        <div className="listContainer">
          {/* <Navbar/> */}
          <Datatable columns={columns}/>
        </div>
      </div>
    </div>
  )
}

export default List