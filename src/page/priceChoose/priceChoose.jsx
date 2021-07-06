import React, { Component } from 'react';
import './priceChoose.css';
import { useState } from 'react';
import { Tabs } from 'zarm';

import { NavBar, Icon } from 'zarm';
const { Panel } = Tabs;

var that = ""

class PriceChoose extends Component {
    constructor(props) {
        super(props);
       

        this.state = {
            value: 0,
            type: props.location.state.name,
        }

        that = this;
       
    }
    componentDidMount(){
        let value = sessionStorage.getItem('value')
        value = Number(value)
        this.setValue(value)
     
    }



    setValue = (e) => {
        this.setState({
            value: e
        })

    }



    render() { //将里面的内容渲染到DOM

        return (
            <div className="pages">
                <NavBar
                    left={<Icon type="arrow-left" theme="primary" onClick={() => {
                        window.history.back()
                        sessionStorage.removeItem('value')
                    }} />}
                    title="价位选择"
                />
                <div className="panels">
                    <PanelS Type={this.state.type} Value={this.state.value} SetValue={this.setValue} />
                </div>
            </div>
        );
    }
}


function detailedConfiguration(e, value) {
    console.log(e)
    that.props.history.push({ pathname: "/detailedConfiguration", state: { info: e } })
    sessionStorage.setItem("value", value)
}

function PanelS(params) {
    let Price = [];
    let Sheet = [];

    if (params.Type === 'amd') {
        Price = AMDPriceData;
        Sheet = AMDProfileSheet;
    } else {
        Price = IntelPriceData;
        Sheet = IntelProfileSheet;
    }


    var str = Price.map((item, index) => {
        return (
            <Panel title={item.name} key={item.name}>
                <div className="content">
                    {
                        Sheet.map(function (Sheet, index) {
                            if (Sheet.name === item.name) {
                                //return <p key={Sheet.name}> {Sheet.name}</p>
                                let configuration = Sheet.configuration
                                if (configuration.length !== 0) {
                                    for (let configurationItem in configuration) {
                                        return <div className="item" onClick={detailedConfiguration.bind(this, configuration[configurationItem], params.Value)} key={configuration[configurationItem].configurationName}> {configuration[configurationItem].configurationName}</div>
                                    }
                                } else {
                                    return <p className="noneItem" key={index}>暂无此价位的配置</p>
                                }
                                return ''
                            } else {
                                return ''
                            }

                        })
                    }
                </div>
            </Panel>
        )

    })


    return (
        <Tabs

            scrollable
            value={params.Value}
            onChange={params.SetValue}
            direction="vertical"
            className="custom-height"
        >
            {str}
        </Tabs>
    );

}




export default PriceChoose;

