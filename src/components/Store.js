import { dataNode } from "./firebaseConnect"
import { createStore } from "redux"


// dataNode.once("value").then((snapshot) => data = snapshot.val());

const checkInput = (dataCheck) => {
    switch (dataCheck) {
        case undefined:
            return 0;
        case null:
            return 0;
        case "":
            return 0;
        default:
            return 1;
    }
}
const NoteInitialState = {
    isEdit: false,
    alertShow: false,
    dataEdit: {}
}
const allReducer = (state = NoteInitialState, action) => {
    switch (action.type) {
        case "ADD_DATA":
            if (checkInput(action.data.ftitle) !== 0 && checkInput(action.data.fcontent)) {
                dataNode.push(action.data)
            }
            else {
                return { ...state, alertShow: true, alertContent: "Không thêm mới được gì...." }
            }
            return state;
        case "UPDATE_DATA":

            if (checkInput(action.data.ftitle) !== 0 && checkInput(action.data.fcontent)) {
                // dataNode.push(action.data)
                dataNode.child(action.data.id).update({
                    ftitle: action.data.ftitle,
                    fcontent: action.data.fcontent,
                    lastUpdate: action.data.lastUpdate,
                })
            }
            else {
                return { ...state, alertShow: true, alertContent: "Không thêm mới được gì...." }
            }
            return { ...state, dataEdit: action.data };
        case "CHANGE_EDIT_STATUS":
            return { ...state, isEdit: !state.isEdit }

        case "CHANGE_ALERT_ON":
            return { ...state, alertShow: true, alertContent: action.alertContent }
        case "CHANGE_ALERT_OFF":
            return { ...state, alertShow: false }

        case "SEND_DATA_EDIT_TO_STORE":
            return { ...state, dataEdit: action.dataEdit };

        case "DELETE_NOTE":
            dataNode.child(action.id).remove();
            // return { ...state, dataEdit: state.dataEdit.filter(x => x.id !== action.id) };
            return state

        default:
            return state
    }
}



const store = createStore(allReducer);
export default store;