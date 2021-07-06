import React, { Component } from 'react';
import './home.css';



class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false,
            userName: "",
            pas: "",
            status: ""
        }
    }

    login = () => {
        console.log('用户名:' + this.state.userName)
        console.log('密码:' + this.state.pas)


        if (this.state.userName == '15875298568' && this.state.pas == '123456') {
            this.setState({
                status: '登录成功!'
            })
            
            this.props.history.push({pathname:"/platformChoice"})
        } else {
            this.setState({
                status: '用户名或者密码错误!'
            })


        }

    }

    userName_handleChange = (e) => { 
        this.setState({ userName: e.target.value });
    }

    pas_handleChange = (e) => {
        this.setState({ pas: e.target.value });
    }



    render() { //将里面的内容渲染到DOM
        return (
            // 以下为jsx语法
            //在jsx只能拥有一个根容器
            <div className="login" >
                <div>
                    <p className="title"> 欢迎进入个人小站,请登录~</p>
                    <Username Name={this.state.userName} userNameChange={this.userName_handleChange} />
                    <Password Pas={this.state.pas} pasChange={this.pas_handleChange} />
                    <div className="btn"  onClick={this.login}>登录</div>
                    <p>{this.state.status}</p>
                </div>
          
            </div>
        );
    }
}

function Username(params) {
    let userName = params.Name
    return (
        <div className='item'>
            <div className='itemName'>用户名:</div>
            <div className='inputDiv'>
                <input type="text" value={userName} onChange={params.userNameChange} />
            </div>
        </div>
    );
}

function Password(params) {
    let Pas = params.Pas
    return (
        <div className='item'>
            <div className='itemName'>密码:</div>
            <div className='inputDiv'>
                <input type="password" value={Pas} onChange={params.pasChange} />
            </div>
        </div>
    );
}

export default Home;