//#region Import Components
import React, { useState } from 'react'
import GeneralModal from '../GeneralModal/GeneralModal'
import StandardButton from '../../Buttons/StandardButton/StandardButton'
import StandardInputField from '../../InputFields/StandardInputField'
import StandardDropDown from '../../Dropdowns/StandardDropDown/StandardDropDown'
import { OPTIONS_DATA } from '../../../Global/Constants'
import { UITEXT } from '../../../Global/Constants'
import Message from '../../Message/Message'
import { Helpers } from '../../../Global/Helpers'
//#endregion

//#region Import Stylings
import '../../../Styles/Components/Modals/AddTaskModal.css'
//#endregion

function AddTaskModal({open, OnClose}) {
    
    //#region Variables
    
    /* dummyOption for dropdown options placeholder */
    const dummyOption = [];

    /* Error Handler Variables */
    const [errorMessage, setErrorMessage] = useState('');
    const [isError, setIsError] = useState(false);
    const [taskNameError, setTaskNameError] = useState(false);
    const [petProfileError, setPetProfileError] = useState(false);
    const [taskDescriptionError, setTaskDescriptionError] = useState(false);
    const [taskDueDateError, setTaskDueDateError] = useState(false);
    const [taskAssigneeError, setTaskAssigneeError] = useState(false);

    /* taskInformation for input gathering - used for OnAddTask and are updated using HandleInputChange */
    const [taskInformation, setTaskInformation] = useState({
        ppId: '',
        taskName: '',
        taskDescription: '',
        taskDueDay: '',
        taskDueMonth: '',
        taskDueYear: '',
        taskDueHour: '',
        taskDueMinute: '',
        taskDueXM: '',
        taskAssignee: '',
    });
    
    /* requestBody for API upon adding */
    const requestBody = {
        ppID: '',
        taskName: '',
        taskDescription: '',
        taskDueDate: '',
    }
    //#endregion

    //#region Functions

    /* HandleInputChange - takes the propertyName of the input to update taskInformation object with the input value */
    const HandleInputChange = (propertyName, inputValue) => {
        if(isError) {
            setTaskDueDateError(false);
            setTaskNameError(false);
            setPetProfileError(false);
            setTaskDescriptionError(false);
            setTaskAssigneeError(false);
            setIsError(false);
            setErrorMessage('');
        }
        setTaskInformation({...taskInformation, [propertyName]: inputValue});
    }

    /* IsValid - Check for required fields */
    const IsValid = () => {
        let isValid = true;

        if(!taskInformation.ppId){
            setPetProfileError(true);
            setErrorMessage(UITEXT.EMPTY_FIELD_ERROR);
            isValid = false;
        }

        if(!taskInformation.taskName){
            setTaskNameError(true);
            setErrorMessage(UITEXT.EMPTY_FIELD_ERROR);
            isValid = false;
        }

        if(!taskInformation.taskDueDay || !taskInformation.taskDueMonth || !taskInformation.taskDueYear
            || !taskInformation.taskDueHour || !taskInformation.taskDueMinute || !taskInformation.taskDueXM){
                setTaskDueDateError(true);
                setErrorMessage(UITEXT.EMPTY_FIELD_ERROR);
                isValid = false;
        }
        
        else if(!Helpers.IsValidDate(taskInformation.taskDueMonth, taskInformation.taskDueDay, taskInformation.taskDueYear)){
            setTaskDueDateError(true);
            setTaskNameError(false);
            setPetProfileError(false);
            setTaskDescriptionError(false);
            setTaskAssigneeError(false);
            setIsError(true);
            setErrorMessage(UITEXT.INVALID_DATE);
            return false;
        }

        if(!taskInformation.taskDescription){
            setTaskDescriptionError(true);
            setErrorMessage(UITEXT.EMPTY_FIELD_ERROR);
            isValid = false;
        }

        if(!taskInformation.taskAssignee){
            setTaskAssigneeError(true);
            setErrorMessage(UITEXT.EMPTY_FIELD_ERROR);
            isValid = false;
        }

        if(taskInformation.taskName.length > 30){
            setTaskNameError(true);
            setPetProfileError(false);
            setTaskDueDateError(false);
            setTaskDescriptionError(false);
            setTaskAssigneeError(false);
            setErrorMessage(UITEXT.LONG_TASKNAME_ERROR);
            isValid = false;
        }

        setIsError(!isValid);

        return isValid;
    }
    /* OnAddTask - TODO: Add Task using all the input information and then reload page*/
    const OnAddTask = () => {
        console.log('TODO: ADD TASK IMPLEMENTATION - ', taskInformation);
        if(!IsValid()){
            return;
        }
    }

    /* OnCloseModal - if there is error, set error to false and clear error message, close the modal. */
    const OnCloseModal = () => {
        if(isError) {
            setTaskDueDateError(false);
            setTaskNameError(false);
            setPetProfileError(false);
            setTaskDescriptionError(false);
            setTaskAssigneeError(false);
            setIsError(false);
            setErrorMessage('');
        }
        OnClose();
    }

    //#endregion
    return (
        <GeneralModal open={open}>
            <div className='flexRowCenter AddTaskModal-container'>
                {/* Left Panel */}
                <div className='AddTaskModal-leftContentPanel'>
                    <h1 className='heading1 AddTaskModal-addTaskHeader'>
                        Add Task
                    </h1>
                    <div className='AddTaskModal-leftInputGroupContainer'>
                        {/* Pet Name Dropdown Field */}
                        <StandardDropDown className='AddTaskModal-petNameDropDownContainer' 
                                    htmlFor='ppId' 
                                    id='ppId' 
                                    name='ppId' 
                                    title='Pet Name' 
                                    placeholder='' 
                                    options={dummyOption} 
                                    onChange={HandleInputChange}
                                    error={petProfileError}/>

                        {/* Task Name Input Field */}
                        <StandardInputField className='AddTaskModal-inputFieldContainer' 
                                    inputClassName='' 
                                    htmlFor='taskName' 
                                    id='taskName' 
                                    name='taskName' 
                                    type='text' 
                                    title='Task Name' 
                                    onChange={HandleInputChange}
                                    error={taskNameError} />

                        {/* Task Description Input Field */}
                        <StandardInputField className='AddTaskModal-lastLeftInputFieldContainer' 
                                    inputClassName='' 
                                    htmlFor='taskDescription' 
                                    id='taskDescription' 
                                    name='taskDescription' 
                                    type='text' 
                                    title='Description' 
                                    onChange={HandleInputChange} 
                                    error={taskDescriptionError}/>

                    </div>
                    <Message className='' messageType='error' visibility={isError} content={errorMessage}/>
                    {/* Buttons */}
                    <div className='AddTaskModal-leftButtonGroupContainer flexRowCenter'>
                        <StandardButton className='AddTaskModal-addButton' type='Primary' title='ADD' onClick={OnAddTask}/>
                        <StandardButton className='AddTaskModal-cancelButton' type='Secondary' title='CANCEL' onClick={OnCloseModal}/>
                    </div>
                </div>
                {/* Right Panel */}
                <div className='AddTaskModal-rightContentPanel'>
                    <div className='AddTaskModal-rightInputGroupContainer'>
                        {/* Empty header to align all drop down in the same row */}
                        <h1 className='heading1 AddTaskModal-placeholderAddTaskHeader'>{''}</h1>
                        {/* Date Drop Down Group */}
                        <div className='AddTaskModal-dropDownGroup'>
                            {/*Task Date Drop Downs Group */}
                            <div className='flexRowCenter'>
                                {/* Month DropDown */}
                                <StandardDropDown className='AddTaskModal-taskDateMonthDropDownContainer' 
                                                htmlFor='taskDueMonth' 
                                                id='taskDueMonth' 
                                                name='taskDueMonth' 
                                                title='Date' 
                                                placeholder='MM' 
                                                options={OPTIONS_DATA.monthOptions} 
                                                onChange={HandleInputChange}
                                                error={taskDueDateError}/>

                                {/* Date DropDown */}
                                <StandardDropDown className='AddTaskModal-taskDateDayDropDownContainer' 
                                                htmlFor='taskDueDay' 
                                                id='taskDueDay' 
                                                name='taskDueDay' 
                                                title='' 
                                                placeholder='DD' 
                                                options={OPTIONS_DATA.dateOptions} 
                                                onChange={HandleInputChange}
                                                error={taskDueDateError}/>

                                {/* Year DropDown */}
                                <StandardDropDown className='AddTaskModal-taskDateYearDropDownContainer' 
                                                inputClassName='AddTaskModal-taskDateYearDropDownContainer' 
                                                htmlFor='taskDueYear' 
                                                id='taskDueYear' 
                                                name='taskDueYear' 
                                                title='' 
                                                placeholder='YYYY' 
                                                options={OPTIONS_DATA.yearOptions} 
                                                onChange={HandleInputChange}
                                                error={taskDueDateError}/>
                            </div>
                        </div>
                        {/* Task Time Drop Down Group */}
                        <div className='AddTaskModal-dropDownGroup'>
                            {/* Time Drop Downs Group */}
                            <div className='flexRowCenter'>
                                {/* Hour DropDown */}
                                <StandardDropDown className='AddTaskModal-taskTimeHourDropDownContainer' 
                                                htmlFor='taskDueHour' 
                                                id='taskDueHour' 
                                                name='taskDueHour' 
                                                title='Time' 
                                                placeholder='HH' 
                                                options={OPTIONS_DATA.hourOptions} 
                                                onChange={HandleInputChange}
                                                error={taskDueDateError}/>

                                {/* Minute DropDown */}
                                <StandardDropDown className='AddTaskModal-taskTimeMinuteDropDownContainer' 
                                                htmlFor='taskDueMinute' 
                                                id='taskDueMinute' 
                                                name='taskDueMinute' 
                                                title='' 
                                                placeholder='MM' 
                                                options={OPTIONS_DATA.minuteOptions} 
                                                onChange={HandleInputChange}
                                                error={taskDueDateError}/>

                                {/* AM/PM DropDown */}
                                <StandardDropDown className='AddTaskModal-taskTimeXMDropDownContainer' 
                                                inputClassName='AddTaskModal-taskTimeXMDropDownContainer' 
                                                htmlFor='taskDueXM' 
                                                id='taskDueXM' 
                                                name='taskDueXM' 
                                                title='' 
                                                placeholder='XM' 
                                                options={OPTIONS_DATA.xmOptions} 
                                                onChange={HandleInputChange}
                                                error={taskDueDateError}/>
                            </div>
                        </div>
                         {/* Task Assignee Dropdown Field */}
                         <StandardDropDown className='AddTaskModal-taskAssigneeDropDownContainer' 
                                    htmlFor='taskAssignee' 
                                    id='taskAssignee' 
                                    name='taskAssignee' 
                                    title='Assignee' 
                                    placeholder='' 
                                    options={dummyOption} 
                                    onChange={() => {}}
                                    error={taskAssigneeError}/>
                        {/* Task Status Dropdown Field */}
                        <StandardDropDown className='AddTaskModal-taskStatusDropDownContainer' 
                                    htmlFor='taskStatus' 
                                    id='taskStatus' 
                                    name='taskStatus' 
                                    title='Status' 
                                    placeholder={OPTIONS_DATA.taskStatusOptions[0].label} 
                                    options={OPTIONS_DATA.taskStatusOptions} 
                                    value = {OPTIONS_DATA.taskStatusOptions[0].value}
                                    isDisabled={true}/>
                    </div>
                </div>
            </div>
        </GeneralModal>
    )
}

export default AddTaskModal;