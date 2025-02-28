import Sidebar from "../Components/Sidebar"

const Dashboard = () => {
    return(
        <div className="flex flex-row ">
            <div className="w-full max-w-[343px] h-screen ">
                <Sidebar/>
            </div>
            <div className="w-full bg-white">
                <h1>Dashboard</h1>
            </div>
        </div>
    )
}
export default Dashboard;