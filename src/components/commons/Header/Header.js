import React,{Component} from 'react';
import {Icon} from 'antd';
import './Header.scss';
class Header extends Component{
    constructor(props){
        super(props);
        this.state={
            flag:false,
        }
    }
    giveToHome(){

        const {show} = this.props;
        this.setState({
            flag:!this.state.flag
        },()=>show(this.state.flag));
    }
    render(){
        return (
            <div className='header'>
                <a href="javascript:;"
                   className='navBar'
                   onClick={()=>this.giveToHome()}
                >
                    <Icon type="bars" />
                </a>
                <span>生鮮超市|上海<Icon type="caret-down" /></span>
                <a href="#" className='shopCar'>
                    <Icon type="shopping-cart" />
                </a>
            </div>
        );
    }
}
export default Header;