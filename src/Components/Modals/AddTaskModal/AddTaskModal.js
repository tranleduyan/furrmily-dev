//#region Import Components
import React, { useState } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import GeneralModal from '../GeneralModal/GeneralModal'
import StandardButton from '../../Buttons/StandardButton/StandardButton'
import StandardInputField from '../../InputFields/StandardInputField'
import StandardDropDown from '../../Dropdowns/StandardDropDown/StandardDropDown'
import { API, OPTIONS_DATA } from '../../../Global/Constants'
import { UITEXT } from '../../../Global/Constants'
import Message from '../../Message/Message'
import { Converters, Helpers } from '../../../Global/Helpers'
//#endregion

//#region Import Stylings
import '../../../Styles/Components/Modals/AddTaskModal.css'
//#endregion

function AddTaskModal({open, OnClose, petProfiles}) {
    
    //#region Variables

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
        taskAssigneeIds: [],
    });
    
    /* requestBody for API upon adding */
    let requestBody = {
        ppID: '',
        taskName: '',
        taskDescription: '',
        taskDueDate: '',
        taskAssignees: [],
    }

    //#endregion

    //#region Options for Dropdowns
    
    /* petProfileAssignees pool for populating petProfileAssineeOptions - This will be updated upon HandlePetProfileInputChange */
    const [petProfileAssignees, setPetProfileAssignees] = useState([]);

    /* State Value for Assignee DropDown (Object type) - To access and mofify, change this will only change the value of the dropdown, and it is not update the petInformation, you will need to set petInformation useState to update 'petInformation. */
    const [selectedPetProfileAssignee, setSelectedPetProfileAssignee] = useState({});

    /* Options for pet name/profile dropdown */
    const petProfilesOptions = petProfiles ? petProfiles.map(petProfile => ({
        value: petProfile.ppId,
        label: petProfile.petName,
    })) : [];

    /* Options for assignee dropdown - based on the assignees array that is updated upon HandlePetProfileInputChange */
    const petProfileAssigneeOptions = petProfileAssignees ? petProfileAssignees.map(petProfileAssignee => ({
        value: petProfileAssignee.memberUserId,
        label: petProfileAssignee.memberFirstName,
    })) : [];

    //#endregion

    //#region Functions

    /* HandleInputChange - takes the propertyName of the input to update taskInformation object with the input value */
    const HandleInputChange = (propertyName, inputValue) => {
        if(isError) {
            ClearError();
        }
        setTaskInformation({...taskInformation, [propertyName]: inputValue});
    }

    //TODO: Handle push, pop assignee for task's multiple assignee
    /* HandleInputPetProfileChange - takes the inputValue, use it to find the currPetProfile object within petProfiles, set it's petProfileMembers property to
    petProfileAssinees, then, set selectedPetProfileAssignee (Assignee's Dropdown value) to be the first value of that petProfileMembers list.
    Then, set the property with the inputValue and taskInformation's taskAssigneeIds to be the array of that petProfileMembers' memberUserId*/
    const HandleInputPetProfileChange = (propertyName, inputValue) => {
        if(isError) {
            ClearError();
        }
        if(inputValue){
            const currPetProfile = petProfiles.find(petProfile => petProfile.ppId === inputValue);
            setPetProfileAssignees(currPetProfile.petProfileMembers);
            setSelectedPetProfileAssignee(currPetProfile.petProfileMembers[0]);

            setTaskInformation({
                ...taskInformation,
                [propertyName]: inputValue,
                taskAssigneeIds: [currPetProfile.petProfileMembers[0].memberUserId],
            });
        }
    }

    //TODO: Handle push, pop assignee for task's multiple assignee
    /* HandleInputAssigneeChange - takes the inputValue and set it to selectedPetProfileAssignee (Assignee's Dropdown value), then, update taskInformation's propertyName (Which is taskAssigneeIds) to the array of that inputValue */
    const HandleInputAssigneeChange = (propertyName, inputValue) => {
        if(isError) {
            ClearError();
        }
        if(inputValue){
            setSelectedPetProfileAssignee(inputValue);
            setTaskInformation({...taskInformation, [propertyName]: inputValue});
        }
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

        if(!taskInformation.taskAssigneeIds || taskInformation.taskAssigneeIds.length === 0){
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

    /* OnAddTask - Update Request Body to the taskInformation values, then post it to API and reload upon success */
    const OnAddTask = () => {
        if(!IsValid()){
            return;
        }
        requestBody = {
            ppId: taskInformation.ppId,
            taskName: taskInformation.taskName,
            taskDescription: taskInformation.taskDescription,
            taskDueDate: Converters.DateTimeConverter(
                                    Converters.DateTimeStringConverter(
                                               taskInformation.taskDueYear, 
                                               taskInformation.taskDueMonth, 
                                               taskInformation.taskDueDay, 
                                               taskInformation.taskDueHour, 
                                               taskInformation.taskDueMinute, 
                                               taskInformation.taskDueXM)),
            taskAssignees: taskInformation.taskAssigneeIds,
        }
        axios
            .post(API.createTaskURL, requestBody, {
                headers:{
                    'X-API-KEY': API.key,
                }
            })
            .then(response => {
                window.location.reload();
            })
            .catch(error => {
                console.log(error);
            });
    }

    /* OnCloseModal - if there is error, set error to false and clear error message, close the modal. */
    const OnCloseModal = () => {
        if(isError) {
            ClearError();
        }
        ClearTaskInformation();
        OnClose();
    }

    /* ClearError - set all error properties to false */
    const ClearError = () => {
        setTaskDueDateError(false);
        setTaskNameError(false);
        setPetProfileError(false);
        setTaskDescriptionError(false);
        setTaskAssigneeError(false);
        setIsError(false);
        setErrorMessage('');
    }

    /* ClearTaskInformation - reset all taskInformation related variables to empty */
    const ClearTaskInformation = () => {
        setTaskInformation({
            ppId: '',
            taskName: '',
            taskDescription: '',
            taskDueDay: '',
            taskDueMonth: '',
            taskDueYear: '',
            taskDueHour: '',
            taskDueMinute: '',
            taskDueXM: '',
            taskAssigneeIds: [],
        })
        setSelectedPetProfileAssignee([]);
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
                                    options={petProfilesOptions} 
                                    onChange={HandleInputPetProfileChange}
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
                                    htmlFor='taskAssigneeIds' 
                                    id='taskAssigneeIds' 
                                    name='taskAssigneeIds' 
                                    title='Assignee' 
                                    value={selectedPetProfileAssignee.memberUserId}
                                    options={petProfileAssigneeOptions} 
                                    onChange={HandleInputAssigneeChange}
                                    error={taskAssigneeError}
                                    isMulti={true}/>
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

const mapStateToProps = state => ({
    petProfiles: state.petProfiles.data,
  });

export default connect(mapStateToProps)(AddTaskModal);