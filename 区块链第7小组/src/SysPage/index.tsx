import Sidebar from "./Sidebar"
import MyTitle from "./MyTitle"


const SysPage = () => {

    // 定义左侧栏的标题和内容
    const sidebarTitle: string = "左侧栏标题";
    const sidebarContent: string = "这里是左侧栏的内容，显示一些信息。";

    return (
        <>
            <MyTitle />
            <Sidebar title={sidebarTitle} content={sidebarContent} />
        </>
    )
}

export default SysPage;