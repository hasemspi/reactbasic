import React, { Component } from 'react'
import HomePage from './HomePage';
import LogInPage from './LogInPage';



class Conditional extends Component {

constructor (props){
    super(props)
    this.state ={
        IsLoggedIn : true
    }
}

    render () {

const {IsLoggedIn} = this.state;

// if(this.state.IsLoggedIn){
//     return <HomePage/>
// }else{
//     return <LogInPage/>
// }
// if(IsLoggedIn){
//     element = <HomePage/>
// }else{
//     element = <LogInPage/>
// }
return <div>
    {IsLoggedIn ? <HomePage/> : <LogInPage/>}
</div>

    }
}

export default Conditional;