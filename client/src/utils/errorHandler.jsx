import React from 'react';
import NotFound from '../Components/molecules/notFound'
class ErrorBoundary extends React.Component{
    constructor(props){
        super(props);
        this.state={
            hasError:false
        }
    }
    componentDidCatch(error, errorInfo) {
        this.setState({hasError:true});
    }


    render(){
        if(this.state.hasError) {
            return <NotFound/>
        }else{
            return this.props.children
        }
    }
}
export default ErrorBoundary;