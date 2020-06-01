import React, { Component } from 'react'
import {View,Text, Button, TextInput} from 'react-native'
import { connect } from 'react-redux'
import {increment,decrement} from '../src/action/index'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types';

class FirstPage extends Component{
    static propTypes={
        increment: PropTypes.func.isRequired,
        decrement: PropTypes.func.isRequired,
        value: PropTypes.number.isRequired,
        
        
    }

    constructor(){
        super()
        this.state={
            value:0,
            times: new Date().toTimeString()
            
        }
    }

    static getDerivedStateFromProps(props, state) {
        return {value: props.value,
            time: state.time
        
        };
      }
    componentDidMount(){
       setInterval(()=>{
           this.setState({times:new Date().toTimeString()})
       },1000)       
    }

    shouldComponentUpdate(){
        return true
    }
    render(){
        return(
            <View>
                <Text>{this.state.value}</Text>
        <Text>{this.state.times}</Text>
        <Text>I love you abbu ammu</Text>
        
        
                
                
                <Button
                    title='Increment'
                    onPress={this.props.increment}
                />
                <Button
                    title='Decrement'
                    onPress={this.props.decrement}
                />
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        value: state
        
    }
}
  const mapDispatchToProps = dispatch => ({
      increment:()=> dispatch(increment()),
      decrement:()=> dispatch(decrement())

   
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(FirstPage)