import React, { Component } from 'react';
import { connect } from "react-redux"
class Nav extends Component {
    newNote = (event) => {
        event.preventDefault();
        this.props.CHANGE_EDIT_STATUS()
    }
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-light bg-light">
                <a className="navbar-brand" href="/">Notes</a>
                <button className="navbar-toggler d-lg-none collapsed" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation"><i className="fa fa-bars" aria-hidden="true" /></button>
                <div className="navbar-collapse justify-content-end collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link" href="/newNote" onClick={(event) => this.newNote(event)}>Thêm mới ghi chú</a>
                        </li>
                    </ul>
                </div>
            </nav>

        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {}
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        CHANGE_EDIT_STATUS: () => {
            dispatch({ type: "CHANGE_EDIT_STATUS" })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Nav)