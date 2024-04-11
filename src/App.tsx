import styles from './App.module.css'
import Header from './components/Header';
import Empty from './components/List/Empty';
import ListHeader from './components/List/Header';
import Task from './components/Task'

import {PlusCircle} from '@phosphor-icons/react'
import { ChangeEvent, FormEvent, InputHTMLAttributes, InvalidEvent, useState } from 'react';

export interface iTask{
  id: number,
  descriptionTask: string,
  checkedTask: boolean
}

function App() {
  const [task, setTask] = useState<iTask[]>([])
  const [newTask, setNewTask] = useState('');

  const [countCreateTask, setCountCreateTask] = useState(0);
  const [countCompleteTask, setCountCompleteTask] = useState(0);

  function handleCreateNewTask(event: FormEvent){
    event.preventDefault()

    const auxNewTask: iTask = {
      id: new Date().getTime(),
      descriptionTask: newTask,
      checkedTask: false
    }

    setTask((task) => [...task, auxNewTask])
    setNewTask('')

    setCountCreateTask(countCreateTask + 1);
  }

  function handleNewCommentChange(event: ChangeEvent<InputHTMLAttributes>){
    event.target.setCustomValidity('')
    setNewTask(event.target.value)
  }

  function handleNewCommentInvalid(event: InvalidEvent<InputHTMLAttributes>){
    event.target.setCustomValidity('Este campo é obrigatório!')
  }

  function deleteTask(taskToDelete: number){
    const tasksWithoutDeleteOne = task.filter(task => {
        if (task.checkedTask === true){
          setCountCompleteTask(countCompleteTask-1)
        }
        return task.id != taskToDelete
    })

    setTask(tasksWithoutDeleteOne)
    setCountCreateTask(countCreateTask - 1)
  }

  function alterCheckTask({idTaskUpdate, completedTask}: {idTaskUpdate: number; completedTask: boolean}){
    completedTask === true? setCountCompleteTask(countCompleteTask + 1) : setCountCompleteTask(countCompleteTask - 1)

    const alterCheck = task.map((t) => {
      if (t.id === idTaskUpdate){
        return { ...t, checkedTask: completedTask }
      } 
      return { ...t }
    })

    setTask(alterCheck)
    console.log(alterCheck)
  }
  
  return (
      <main>
        <Header />
        <section className={styles.content}>
          <div className={styles.taskContent}>
            <form onSubmit={handleCreateNewTask} className={styles.taskContent}>
              <input className={styles.contentInput}
                    type="text" 
                    placeholder="Digite uma nova tarefa" 
                    value={newTask}
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required>
              </input>
              <button className={styles.contentButton} type="submit">Criar <PlusCircle/></button>
            </form>
          </div>

          <div className={styles.taskList}>
            <ListHeader 
              key={task.length}
              countCreatedTasks={countCreateTask}
              countCompletedTasks={countCompleteTask}
            />
            {
              task.length > 0? task.map(task => {
                return (
                    <Task 
                      key={task.id}
                      task={task}
                      onDeleteTask={deleteTask}
                      onAlterCheckTask={alterCheckTask}
                    />
                )
              }) : <Empty />
            }
          </div>
        </section>
      </main>
  )
}

export default App
