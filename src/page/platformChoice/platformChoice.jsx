import React, { Component } from 'react';
import './platformChoice.css';
import { Button } from 'zarm';


class PlatformChoice extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }


    jumpPage=(name)=>{
        console.log(name)
        this.props.history.push({pathname:"/priceChoose",state:{name:name}})
        
    }
    

    render() { //将里面的内容渲染到DOM
        return (
            // 以下为jsx语法
            //在jsx只能拥有一个根容器
            <div className="pageButton">
                <div className="buttonSet">
                    <div className="Choicebtn JShine" onClick={this.jumpPage.bind(this,'amd')}>AMD</div>
                    <div className="Choicebtn blue"  onClick={this.jumpPage.bind(this,'intel')}>英特尔</div>
                </div>
            </div>
        )
    }
}

export default PlatformChoice;