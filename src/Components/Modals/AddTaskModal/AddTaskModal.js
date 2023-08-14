//#region Import Components
import React, { useState } from 'react'
import GeneralModal from '../GeneralModal/GeneralModal'
import StandardButton from '../../Buttons/StandardButton/StandardButton'
import StandardInputField from '../../InputFields/StandardInputField'
import StandardDropDown from '../../Dropdowns/StandardDropDown/StandardDropDown'
import TextAreaInputField from '../../InputFields/TextAreaInputField/TextAreaInputField'
import IconButton from '../../Buttons/IconButton/IconButton'
import { OPTIONS_DATA } from '../../../Global/Constants'
//#endregion

//#region Import Stylings
import '../../../Styles/Components/Modals/AddTaskModal.css'
//#endregion

//#region Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function AddTaskModal({open, OnClose}) {
    const dummyOption = []
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
                                    htmlFor='petProfileName' 
                                    id='petProfileName' 
                                    name='petProfileName' 
                                    title='Pet Name' 
                                    placeholder='' 
                                    options={dummyOption} 
                                    onChange={() => {}}/>

                        {/* Task Name Input Field */}
                        <StandardInputField className='AddTaskModal-inputFieldContainer' 
                                    inputClassName='' 
                                    htmlFor='taskName' 
                                    id='taskName' 
                                    name='taskName' 
                                    type='text' 
                                    title='Task Name' 
                                    onChange={() => {}} />

                        {/* Task Name Input Field */}
                        <StandardInputField className='AddTaskModal-lastLeftInputFieldContainer' 
                                    inputClassName='' 
                                    htmlFor='taskDescription' 
                                    id='taskDescription' 
                                    name='taskDescription' 
                                    type='text' 
                                    title='Description' 
                                    onChange={() => {}} />

                    </div>
                    {/* Buttons */}
                    <div className='AddTaskModal-leftButtonGroupContainer flexRowCenter'>
                        <StandardButton className='AddTaskModal-addButton' type='Primary' title='ADD' onClick={() => {}}/>
                        <StandardButton className='AddTaskModal-cancelButton' type='Secondary' title='CANCEL' onClick={OnClose}/>
                    </div>
                </div>
                {/* Right Panel */}
                <div className='AddTaskModal-rightContentPanel'>
                    <div className='AddTaskModal-rightInputGroupContainer'>
                        {/* Empty header to align all drop down in the same row */}
                        <h1 className='heading1 AddTaskModal-placeholderAddTaskHeader'></h1>
                        {/* Date Drop Down Group */}
                        <div className='AddTaskModal-dropDownGroup'>
                            {/* Pet Date of Birth Drop Downs Group */}
                            <div className='flexRowCenter'>
                                {/* Month DropDown */}
                                <StandardDropDown className='AddTaskModal-taskDateMonthDropDownContainer' 
                                                htmlFor='taskDateMonth' 
                                                id='taskDateMonth' 
                                                name='taskDateMonth' 
                                                title='Date' 
                                                placeholder='MM' 
                                                options={OPTIONS_DATA.monthOptions} 
                                                onChange={() => {}}/>

                                {/* Date DropDown */}
                                <StandardDropDown className='AddTaskModal-taskDateDayDropDownContainer' 
                                                htmlFor='taskDateDay' 
                                                id='taskDateDay' 
                                                name='taskDateDay' 
                                                title='' 
                                                placeholder='DD' 
                                                options={OPTIONS_DATA.dateOptions} 
                                                onChange={() => {}}/>

                                {/* Year DropDown */}
                                <StandardDropDown className='AddTaskModal-taskDateYearDropDownContainer' 
                                                inputClassName='AddTaskModal-taskDateYearDropDownContainer' 
                                                htmlFor='taskDateYear' 
                                                id='taskDateYear' 
                                                name='taskDateYear' 
                                                title='' 
                                                placeholder='YYYY' 
                                                options={OPTIONS_DATA.yearOptions} 
                                                onChange={() => {}}/>
                            </div>
                        </div>
                        {/* Time Drop Down Group */}
                        <div className='AddTaskModal-dropDownGroup'>
                            {/* Time Drop Downs Group */}
                            <div className='flexRowCenter'>
                                {/* Hour DropDown */}
                                <StandardDropDown className='AddTaskModal-taskTimeHourDropDownContainer' 
                                                htmlFor='taskTimeHour' 
                                                id='taskTimeHour' 
                                                name='taskTimeHour' 
                                                title='Time' 
                                                placeholder='HH' 
                                                options={OPTIONS_DATA.hourOptions} 
                                                onChange={() => {}}/>

                                {/* Minute DropDown */}
                                <StandardDropDown className='AddTaskModal-taskTimeMinuteDropDownContainer' 
                                                htmlFor='taskTimeMinute' 
                                                id='taskTimeMinute' 
                                                name='taskTimeMinute' 
                                                title='' 
                                                placeholder='MM' 
                                                options={OPTIONS_DATA.minuteOptions} 
                                                onChange={() => {}}/>

                                {/* AM/PM DropDown */}
                                <StandardDropDown className='AddTaskModal-taskTimeXMDropDownContainer' 
                                                inputClassName='AddTaskModal-taskTimeXMDropDownContainer' 
                                                htmlFor='taskTimeXM' 
                                                id='taskTimeXM' 
                                                name='taskTimeXM' 
                                                title='' 
                                                placeholder='XM' 
                                                options={OPTIONS_DATA.xmOptions} 
                                                onChange={() => {}}/>
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
                                    onChange={() => {}}/>
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