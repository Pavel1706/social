import React, { ChangeEvent } from 'react';
import p from './FaceInfo.module.css';

type ProfileStatusType = {
    status: string
    updateStatus: (value:string)=> void
}


export class ProfileStatus extends React.Component<ProfileStatusType, {}> {

    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
      this.props.updateStatus(this.state.status)
    }
    onStatusChange=(e:ChangeEvent<HTMLInputElement>)=> {

        this.setState({
            status: e.currentTarget.value
        })
    }
    componentDidUpdate(prevProps:{status:string}, prevState:{status:string}){
        console.log(prevProps)
        console.log(prevState)
        if(prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }

        console.log('I did it')
    }



    render() {
        return <>
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input  onChange={this.onStatusChange}
                           autoFocus={true}
                           onBlur={this.deactivateEditMode}
                           value={this.state.status}/>{}
                </div>
                }
            </div>
        </>
    }
}