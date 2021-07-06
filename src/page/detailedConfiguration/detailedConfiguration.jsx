import React, { Component } from 'react';
import './detailedConfiguration.css';
import { Cell, Icon } from 'zarm';
import { NavBar } from 'zarm';



class DetailedConfiguration extends Component {
    constructor(props) {
        super(props);

        this.state = {
            info: props.location.state.info,
        }
    }

    
    

    render() { //将里面的内容渲染到DOM
        return (
            // 以下为jsx语法
            //在jsx只能拥有一个根容器
        <div>
            <NavBar
                    left={<Icon type="arrow-left" theme="primary" onClick={() => window.history.back()} />}
                    title="详细清单"
                />
            <List Info={this.state.info}/>
        </div>
        )
    }
}


function List(e){
    let configuration =  e.Info
    let configurationItem = configuration.detailedConfiguration
    let configurationItemAry = [];
    for (const item in configurationItem) {
        configurationItemAry.push(configurationItem[item])
    }
    var str = configurationItemAry.map((item, index) => {
        let title = `${item.name} : ${item.productName}` 
        let description = item.price
        let link = item.link
        console.log(link)
        return <Cell hasArrow title={title} description={description} onClick={() => {window.open(link); }} key={item.name} />
    })

    return (
        <>
        {str}
        <Cell title={`合计:${configuration.aggregate}`} />
        <Cell title={`更新日期:${configuration.creationTime}`} />
        </>
    );
}


export default DetailedConfiguration;