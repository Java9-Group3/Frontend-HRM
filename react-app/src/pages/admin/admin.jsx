import { } from "../../api/Api";
import "./admin.css";
import AdminApproveComments from "./admin-approve-comment";
import AdminApproveManagers from "./admin-approve-manager";


export default function Admin({aktivePage}){
 
  return(
    <>
    { aktivePage==null && <h3>Hoş geldiniz! Lütfen yapmak istediğiniz işlemi sol taraftan seçiniz...</h3>}
    { aktivePage=="pending-managers" && <div><AdminApproveManagers/></div> }
    { aktivePage=="pending-comments" && <div><AdminApproveComments/></div> }
    </>
  )
}