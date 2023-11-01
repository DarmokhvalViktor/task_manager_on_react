import React from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {submitValidator} from "../../../validators/submitValidator";

const Form = () => {

    // function submitTask() {
    //     let task = inputTask.value;
    //     let dayAndTime = inputDayAndTime.value;
    //     let transformedDateArray = dayAndTime.split(/\W/);
    //     console.log(transformedDateArray)
    //     let dateAndTimeObject = {
    //         day : transformedDateArray[0],
    //         month: transformedDateArray[1],
    //         year : transformedDateArray[2],
    //         hours : transformedDateArray[3],
    //         minutes : transformedDateArray[4]
    //     }
    //     let taskPriority =
    //         {priorityNumber: parseInt(inputTaskImportance.options[inputTaskImportance.selectedIndex].value),
    //             priorityText: inputTaskImportance.options[inputTaskImportance.selectedIndex].text};
    //
    //     if(task) {
    //         createH2ElementIfNotPresent();
    //
    //         createDivs( task, taskPriority, dateAndTimeObject);
    //
    //         tasksFromLocalStorage.push({task: task, priority: taskPriority, dayTimeObject: dateAndTimeObject});
    //         localStorage.setItem("tasks", JSON.stringify(tasksFromLocalStorage));
    //
    //         inputTask.value = "";
    //         inputDayAndTime.value = "";
    //         inputTaskImportance.value = "";
    //     }
    // }

    const {reset, register, handleSubmit, setValue, formState: {errors, isValid}} = useForm({
        mode: "all",
        resolver:joiResolver(submitValidator)
    });


    return (
        <div>
            <form>
                <input type={"text"} placeholder={"task"} {...register("task")}/>
                <button disabled={!isValid}>Save task</button>
            </form>
            {errors.task && <div>task: {errors.task.message}</div>}
        </div>
    );
};

export {Form};