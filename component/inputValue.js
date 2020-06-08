import React,{Component} from 'react'
import {View,Text, TextInput,TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'
import { ADD_NUM } from '../src/action/type'
import {addNum} from '../src/action/index'
export class Add_Num extends Component{
    constructor(){
        super()
        this.state={
            value:'',

        }
    }

    changeState=()=>{
        this.props.dispatch(addNum(this.state.value))
    }

    

    render(){
        // this.props.changeState({type:ADD_NUM,
        //     Texto: this.state.value})  
                
                     
        
        return(
            <View>
                <Text>{this.props.MyInput}</Text>
                <TextInput
                    onChangeText={text=>this.setState({value:text})}
                    placeholder={this.state.value}
                    value= {this.state.value}
                />

                <TouchableOpacity
                    onPress={this.changeState}
                >
                    <Text>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        MyInput: state.InputNum
    }
}

 
export default connect(mapStateToProps)(Add_Num)