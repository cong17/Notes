import React, { Component } from 'react';
import { connect } from "react-redux"
class NewNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ftitle: "",
            fcontent: "",
            time: ""
        }
    }
    componentWillMount() {
        if (this.props.dataEdit.id) {
            this.setState({
                ftitle: this.props.dataEdit.ftitle,
                fcontent: this.props.dataEdit.fcontent,
                id: this.props.dataEdit.id
            })
        }
    }
    // kiem tra thay doi o form 
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }
    //new note moi
    addNote = () => {
        this.props.addDataStore(this.state)
        this.setState({
            ftitle: "",
            fcontent: ""
        })
    }
    updateDataOrAddnew = (event) => {
        const lastUpdate = new Date();
        var time = lastUpdate.toLocaleString();
        this.setState({ time: time })
        if (this.state.id) {
            //update data
            const item = {
                id: this.state.id,
                ftitle: this.state.ftitle,
                fcontent: this.state.fcontent,
                lastUpdate: time
            }
            this.props.changeDisplayAlert("Sửa thành công")
            this.props.updateDataStore(item)
            this.props.changeDisplayFormEdit();

        }
        else {
            //them moi du lieu
            const item = {
                ftitle: this.state.ftitle,
                fcontent: this.state.ftitle,
                lastUpdate: time
            }
            this.props.changeDisplayAlert("Thêm thành công")
            this.props.addDataStore(item);
            this.props.changeDisplayFormEdit();//dong form

        }
    }

    render() {
        return (
            <div className="sangtrai col-sm col-xs-12">
                <form>
                    <div className="card ">
                        <h4 className="card-header">{this.state.id ? 'Sửa ghi chú ' : 'Thêm ghi chú'}</h4>
                        <div className="form-group m-2">
                            <label> {this.state.id ? 'Sửa tiêu đề ' : 'Thêm tiêu đề'}</label>
                            <input onChange={(event) => this.isChange(event)} type="text" className="form-control" name="ftitle" placeholder="Tiêu để notes" defaultValue={this.props.dataEdit.ftitle}
                                disabled={this.state.id ? 'disabled' : ''} />
                        </div>
                        <div className="form-group m-2">
                            <label>Điền nội dung vào đây</label>
                            <textarea onChange={(event) => this.isChange(event)} type="text" className="form-control" name="fcontent" placeholder="Tiêu để notes" style={{ height: '30vh' }} defaultValue={this.props.dataEdit.fcontent}>
                            </textarea>
                        </div>
                    </div>
                    <button type="reset" name="fsave" id="fsave"
                        onClick={(event) => this.updateDataOrAddnew(event)} className="btn btn-primary btn-lg btn-block">{this.state.id ? 'Cập nhật ' : 'Thêm mới'}</button>
                </form>
            </div >

        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        dataEdit: state.dataEdit

    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addDataStore: (data) => {
            dispatch({ type: "ADD_DATA", data: data })
        },
        updateDataStore: (data) => {
            dispatch({ type: "UPDATE_DATA", data: data })
        },
        changeDisplayFormEdit: () => {
            dispatch({ type: "CHANGE_EDIT_STATUS" })
        },
        changeDisplayAlert: (alertContent) => {
            dispatch({ type: "CHANGE_ALERT_ON", alertContent })
        },

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NewNote)