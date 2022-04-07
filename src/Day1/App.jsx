import {Buttons} from './common';
import './app.css';
export const ButtonsBoard=()=>{
return (
    <div className='buttonsboard'>
        <div className='left_Content'>
        <div><Buttons backgroundColor={"#4a95c1"} name={"JOINUS"} /></div>
        <div><Buttons backgroundColor={"#ee9b27"} name={"LOGIN"} /></div>
        <div><Buttons backgroundColor={"#7dae3b"} name={"SEARCH"} /></div>
        <div><Buttons backgroundColor={"#cb3771"} name={"HOME"} /></div>
        </div>
        <div className="right_content">
        <div><Buttons backgroundColor={"#648e9c"} name={"SETTING"} /></div>
        <div><Buttons backgroundColor={"#d12932"} name={"CONTACT US"} /></div>
        <div><Buttons backgroundColor={"#56508c"} name={"HELP"} /></div>
        <div><Buttons backgroundColor={"#a98a3a"} name={"DOWNLOAD"} /></div>

        </div>
    </div>
)
}