import { useEffect, useState } from "react"
import Button from "../Button/Button"
import Input from "../Input/Input"
import List from "../List/List"


const Todo = () => {
    const[item,setItem]=useState("");
    const[list,setList]=useState([]);
    const btnClickHandler=()=>{
        if(item.trim().length){
        // const items=[...list];
        // items.push(item);
        // setList(items);
        setList([...list,{item,editingItem:item,isDone:false,isEditing:false}])
        setItem("");
        } 
    }
    
    useEffect(()=>{
        const items=JSON.parse(localStorage.getItem("todo")) || [];
        setList(items);
    },[])

    useEffect(()=>{
        localStorage.setItem("todo",JSON.stringify(list));
    },[list])

    const swapItem=(initIndex,finalIndex)=>{
        const items=[...list]
        const temp=items[initIndex];
        items[initIndex]=items[finalIndex];
        items[finalIndex]=temp;
        setList(items);

    }
    const doneBtnHandler=(index)=>{
        const items=[...list];
        items[index].isDone=true;
        setList(items);
    }
    const deleteBtnHandler=(index)=>{
        const items=[...list];
        items.splice(index,1);
        setList(items);
    }
    const editBtnHandler=(index)=>{
        const items=[...list];
        items[index].isEditing=true;
        setList(items);
    }
    const cancelBtnHandler=(index)=>{
        const items=[...list];
        items[index].isEditing=false;
        items[index].editingItem=items[index].item;
        setList(items);
    }
    const changeInputEditHandler=(index,data)=>{
        const items=[...list]
        items[index].editingItem=data;
        setList(items);

    }
    const saveBtnHandler=(index)=>{
        const items=[...list];
        items[index].isEditing=false;
        items[index].item=items[index].editingItem;
        setList(items);
    }
    const removeDoneItems=()=>{
        const todos= list.filter(item=>!item.isDone);
        setList(todos)
    }
    const clearAllHandler=()=>{
        setList([]);
    }
  return (
    <div className="mt-4">
    <Input changeHandler={(data)=>setItem(data)} value={item} enterKeyHandler={btnClickHandler}/>
    <Button clickHandler={btnClickHandler} disabled={!item.trim().length} btnLabel="Add to the list"/>
    <Button btnLabel="Clear All" clickHandler={clearAllHandler} disabled={!list.length}/>
    <Button btnLabel="Remove done item" clickHandler={removeDoneItems} disabled={!list.length}/>
    <div>
    <List items={list} swapItem={swapItem} doneBtnHandler={doneBtnHandler} deleteBtnHandler={deleteBtnHandler} editBtnHandler={editBtnHandler} cancelBtnHandler={cancelBtnHandler} changeInputEditHandler={changeInputEditHandler} saveBtnHandler={saveBtnHandler}/>
    </div>
    </div>
  )
}

export default Todo