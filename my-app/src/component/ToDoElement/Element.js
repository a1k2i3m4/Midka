import { Card } from "antd";
import React from "react";

const ToDoElement = (props)=>{
    const{
        name,
        description
    }=props
    return  <Card title={name}>
              <p>{description}</p>
    </Card>
    
}
export default ToDoElement;