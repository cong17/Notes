import React, { Component } from 'react';
import { dataNode } from "./firebaseConnect"
import Notes from './Notes';
import Nothing from './Nothing';
class ListNotes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datafireBase: []
        }
    }

    componentDidMount() {
        dataNode.on("value", (values) => {
            const arrData = []
            values.forEach(ele => {
                const key = ele.key;
                const noteTitle = ele.val().ftitle;
                const notefcontent = ele.val().fcontent;
                const lastUpdate = ele.val().lastUpdate;
                arrData.push({
                    id: key,
                    ftitle: noteTitle,
                    fcontent: notefcontent,
                    lastUpdate: lastUpdate
                })

            });
            this.setState({ datafireBase: arrData })

        })
    }

    getData = () => {
        if (this.state.datafireBase) {
            if (!this.state.datafireBase.length)
                return <Nothing />
            else
                return this.state.datafireBase.map((value, key) => {
                    return (
                        <Notes key={key} value={value} />
                    )
                })
        }
    }
    render() {
        return (

            < div className="col-sm col-xs-12 sangphai">
                <div id="NoteList" role="tablist" aria-multiselectable="true">
                    {this.getData()}

                </div >
            </div >

        );
    }
}

export default ListNotes;