import React, { Component } from 'react';
import { Alert, AlertContainer } from "react-bs-notifier";
import { connect } from "react-redux"
class AlertInfo extends Component {
    handleDismiss = () => {
        this.props.CHANGE_ALERT_OFF();
    }
    render() {
        if (!this.props.alertShow) return null;
        return (
            <AlertContainer>
                <Alert type="success" headline="Thông báo" onDismiss={() => this.handleDismiss()} timeout={2000}>{this.props.alertContent}</Alert>
            </AlertContainer>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        alertShow: state.alertShow,
        alertContent: state.alertContent
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        CHANGE_ALERT_OFF: () => {
            dispatch({ type: "CHANGE_ALERT_OFF" })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AlertInfo)
