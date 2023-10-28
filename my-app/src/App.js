import './App.css';
import AppHeader from './components/header/';
import { Navbar } from './components/navbar/Navbar';
import './App.css';
import { Input ,Button, Space} from "antd";
import React ,{useState} from 'react';
import ToDoElement from './toDoElement';
// import { Sidebar } from './components/sidebar/Sidebar';
// import { Newsbox } from './components/newsbox/Newsbox';
// import { Footer } from './components/footer/Footer';
// import { Content } from './components/content/Content';
import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect, useLayoutEffect } from 'react';

export const App = () => {

  const navigate = useNavigate();
  const [todos,setTodods]= React.useState([])
  const [newTodoName,setNewTodoName]= React.useState()
  const [newTodoDescription,setNewTodoDescription]= React.useState()

  const handleAddNewTodo = (event) =>{
     setTodods(
      (previous) =>{
        return [...previous,{
          name :newTodoName,
          description :newTodoDescription
        }];
      }
     )
     setNewTodoName("")
     setNewTodoDescription("")
  }
  const handleOnChange = (event)=>{
     setNewTodoName(event.target.value)
  }
  
  useEffect(() => {
    navigate('/home')
  }, [])

  return (
    <div className="App">
          <AppHeader />
          <Navbar />
          
          
      
         
      
           
            <div>
              <Space direction='vertical' style={{width: '100%'}}>
              <Input onChange={handleOnChange} value={newTodoName} placeholder="Add new ToDo task"/>
              <Input onChange={(e)=>{ setNewTodoDescription(e.target.value)}} value={newTodoDescription} placeholder="Props"/>
              <Button onClick={handleAddNewTodo} 
              type="primary"
               shape="defoult" 
               size="large">
                Add ToDo
                </Button>
                {todos.map((element)=>{
                  return <ToDoElement name={element.name} description={element.description}></ToDoElement>
                })}
                </Space>
            </div>
            </div>
  );
}



export default App;


export default App;

