import Button from "../Button/Button";
import Input from "../Input/Input";
import styles from "./List.module.css";

// eslint-disable-next-line react/prop-types
 const List = ({items,swapItem,doneBtnHandler,deleteBtnHandler,editBtnHandler,cancelBtnHandler,changeInputEditHandler,saveBtnHandler}) => {
    // eslint-disable-next-line react/prop-types
    const users =items.map((task,index)=><li key={index} className={task.isDone?`p-2 bg-gradient-primary`:`p-2`} className={styles.me}> {!task.isEditing && ( <>{task.item} <Button btnLabel="Edit" btnClassName={styles.btns} disabled={task.isDone} clickHandler={()=>editBtnHandler(index)}/></>)} {task.isEditing && ( <><Input  className={styles.listName} value={task.editingItem} changeHandler={(data)=>changeInputEditHandler(index,data)}/> <Button btnLabel="Save" btnClassName={styles.btns} clickHandler={()=>saveBtnHandler(index)} disabled={!task.editingItem.trim().length}/> <Button btnLabel="Cancel" btnClassName={styles.btns} clickHandler={()=>cancelBtnHandler(index)}/></>)} <Button btnLabel="UP" btnClassName={styles.btns} clickHandler={()=>swapItem(index,index-1)} disabled={index==0}/> <Button btnLabel="DOWN" btnStyle={{backgroundColor:"lightgreen"}} clickHandler={()=>swapItem(index,index+1)} disabled={index==items.length-1} btnClassName={styles.btns}/> {task.isDone && <Button btnLabel="Delete" btnClassName={styles.btns} clickHandler={()=>deleteBtnHandler(index)}/>} {!task.isDone &&<Button btnLabel="Done" btnClassName={styles.btns} clickHandler={()=>doneBtnHandler(index)} disabled={task.isEditing}/>} </li>)
  return (
    <ul className={styles.list}>
    {users}
    </ul>
  )
}

export default List;