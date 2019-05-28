import React, {createRef} from 'react';
import ReactNotification from 'react-notification-system';

class Notification extends React.Component {
    notificationRef = createRef();

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (this.notificationRef && this.notificationRef.current) {
            this.notificationRef.current.addNotification({
                'message': this.props.obj.message || "",
                "level": this.props.obj.level || "",
                "title": this.props.obj.title || "",
                "position":'tc'
            });
        }
    }

    render() {
        return (
            <ReactNotification ref={this.notificationRef}/>
        )
    }
}

export default Notification;