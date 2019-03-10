import React, {Component, lazy} from 'react';
import {connect} from 'react-redux';
import {Icon} from 'antd';
import {getUserInfo} from "../../actions";

const Header = lazy((props)=>import('../commons/Header/Header.js'));
import './Home'
@connect(state=>({
    userInfo:state.base.userInfo,
}),{
    getUserInfo,
})
class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            bool:false,
        };
        this.props.getUserInfo();
        this.getFlag=this.getFlag.bind(this);
    }

    getFlag(flag){
        this.setState({bool:flag})
    }
    render(){
        const {userInfo} = this.props;
        console.log(userInfo);
        const {bool} = this.state;
        return (
            <div className='home'>
                <Header show={this.getFlag}/>
                {
                    bool && (
                        <div className='side-nav'>
                            <div className='nav-head'>
                                <h2>天天生鮮，健康每一天</h2>
                                <small>官方自營 · 正品保障 · 一站購齊 · 快速送達</small>
                            </div>
                            <ul className='nav-body'>
                                <li><a href="#"><Icon type="home" className='icon' />首頁</a></li>
                                <li><a href="#"><Icon type="search" className='icon' />搜索</a></li>
                                <li><a href="#"><Icon type="bars" className='icon' />全部分類</a></li>
                            </ul>
                            <div className='nav-foot'><span>商品限購說明&資質證照</span></div>
                        </div>
                    )
                }

                <div className='search'>
                    <a href="#">
                        &nbsp;&nbsp;
                        <Icon className='icon' type="search" />
                        &nbsp;&nbsp;
                        <i>一站式服務,新鮮每一天...</i>
                    </a>
                </div>


            </div>
        );
    }
}
export default Home;
