import { Select, Input, Button, Grid, Header, Icon } from "semantic-ui-react"
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const options = [
    {key: "deporte", text:"Deporte", value: "deporte"},
    {key: "casa", text:"Casa", value: "casa"},
    {key: "oficina", text:"Oficina", value: "oficina"},
    {key: "otra", text:"Otra", value: "otra"},
];

export function InputTask(props){

    const { createTask } = props;
    const [task, setTask] = useState({
        idTask: "",
        taskName: "",
        categoryTask: "",
    });
    const  [error, setError] = useState(false);

    const onChangeTask = (e) =>{
        setTask({
            ...task,
            [e.target.name]: e.target.value
        });
    }
    const onChangeCategoryTask = (e, data) => {
        setTask({
            ...task,
            [data.name]: data.value
        });
    }
    const onSubmitTask = (e) => {
        if(task.taskName.trim() === "" || task.categoryTask.trim() === ""){
            setError(true);
            return;
        }
        setError(false);

        task.idTask = uuidv4();

        createTask(task);
        setTask({
            idTask: "",
            taskName: "",
            categoryTask: "",
        });

    }

    return (
        <>
            <Grid centered columns={2}>
                <Input type="action" action>
                    <Input onChange={onChangeTask} value={task.taskName} size="small" icon="add" placeholder="Escribe una tarea.." iconPosition="left" name="taskName" />
                    <Select onChange={onChangeCategoryTask} value={task.categoryTask} compact options={options} className="select-form-task" name="categoryTask" placeholder="Categoria" />
                    <Button type="submit" color="violet" onClick={onSubmitTask}>Añadir tarea</Button>
                </Input>
            </Grid>
            {error && (
                <Grid centered>
                    <Header as="h4" color="red" className="alert-error-form">
                        <Icon name="close" />
                        <Header.Content>La tarea es obligatoria</Header.Content>
                        <Icon name="close" />
                    </Header>
                </Grid>
            )}
        </>
    ); 
}