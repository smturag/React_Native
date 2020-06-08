import React, { Component } from 'react'
import {View,Text, Button, TextInput, TouchableOpacity} from 'react-native'
import { connect } from 'react-redux'
import {increment,decrement,idIncrement} from '../src/action/index'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types';
import Add_Num from './inputValue'
import { ADD_NUM } from '../src/action/type'

class FirstPage extends Component{
    static propTypes={
        increment: PropTypes.func.isRequired,
        decrement: PropTypes.func.isRequired,
        value: PropTypes.number,
        idIncrement: PropTypes.number
        
        
        
    }

    constructor(){
        super()
        this.state={
            value:0,
            time: '',
            idIncrement: 0
            
        }
    }


    static getDerivedStateFromProps(props, state) {    
        const val =  props.idInc  
        console.log(val) 
        
        return {
            value: props.values,
            time: props.nowTimes,
            idIncrement: props.idInc     
        };
      }
    componentDidMount(){
       setInterval(()=>{
           this.setState({times:new Date().toTimeString()})
       },1000)       
    }
    componentWillUnmount(){

    }

    shouldComponentUpdate(){
        return true
    }
    render(){
        return(
            <View>
                <Text>{this.state.value}</Text>

        <Text>{this.state.times}</Text>
               
                

                <Text>{this.state.time}</Text>

                <Button
                    title='Increment'
                    onPress={this.props.increment}
                />
                <Button
                    title='Decrement'
                    onPress={this.props.decrement}
                />
                <Text>{this.state.idIncrement}</Text>
                <TouchableOpacity
                    onPress={this.props.id}
                >
                    <Text>Id Increment</Text>
                </TouchableOpacity>

                <Add_Num/>

            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        values: state.number,
        nowTimes: state.newTimes,
        idInc: state.id
        
    }
}
  const mapDispatchToProps = dispatch => ({
      increment:()=> dispatch(increment()),
      decrement:()=> dispatch(decrement()),
      id:()=> dispatch(idIncrement())

   
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(FirstPage)