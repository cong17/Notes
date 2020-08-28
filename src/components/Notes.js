import React, { Component } from 'react';
import { connect } from "react-redux"
class Notes extends Component {

    whenClickToEdit = () => {
        this.props.changeDisplayFromEdit();//thay doi trang thai display
        this.props.sendDataEditToStore(this.props.value);
    }
    whenClickToDelete = () => {
        this.props.sendDataDeleteToStore(this.props.value.id);
        this.props.changeDisplayAlert("Xóa thành công")
    }
    render() {
        return (
            <div className="card mb-2">
                <div className="card-header" role="tab" id={"section1HeaderId" + this.props.value.id}>
                    <h5 className="mb-0">
                        <a data-toggle="collapse" data-parent="#NoteList" href={"#noteContent1" + this.props.value.id} aria-expanded="false" aria-controls={"noteContent1" + this.props.value.id} className="collapsed title-fit">
                            {this.props.value.ftitle} </a>
                    </h5>
                </div>
                <div id={"noteContent1" + this.props.value.id} className="in collapse" role="tabpanel" style={{}}>
                    <div className="card border-primary">
                        <div className="card-body">
                            <p className="title-p title-fit">{this.props.value.ftitle}</p>
                            <div className="btn btn-group float-right m-0 p-0">
                                <button onClick={() => { this.whenClickToEdit() }} className="btn btn-outline-info">Sửa</button>
                                <button onClick={() => { this.whenClickToDelete() }} disabled className="btn btn-outline-warning">Xóa</button>
                            </div>
                            <div>
                                {this.props.value.fcontent}
                            </div>
                            <div className="last-update">
                                {"Cập nhật lần cuối - " + this.props.value.lastUpdate}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        isEdit: state.isEdit
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeDisplayFromEdit: () => {
            dispatch({ type: "CHANGE_EDIT_STATUS" })
        },
        sendDataEditToStore: (dataEdit) => {
            dispatch({ type: "SEND_DATA_EDIT_TO_STORE", dataEdit })
        },
        sendDataDeleteToStore: (id) => {
            dispatch({ type: "DELETE_NOTE", id })
        },
        changeDisplayAlert: (alertContent) => {
            dispatch({ type: "CHANGE_ALERT_ON", alertContent })
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Notes)
