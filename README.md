# Components Documentation / Guidelines 
## Using `StandardInputField`
- Its usage is to take in users' inputs.

### Suggested Import Syntax
> import StandardInputField from '../../Components/InputFields/StandardInputField/StandardInputField'

### Component's Structure Definition: 
```
<div className={className}>
    <label htmlFor={props.htmlFor} className='heading3'>{props.title}</label>
    <input type={props.type} name={props.name} id={props.id} className={inputClassName}
           value={inputValue} onChange={handleInputChange} required/>
</div>
```

### Props:
1. **className**: Add extra stylings to the **_input field container_**, which is the wrapper of <label> and <input>.
2. **inputClassName**: Add extra stylings to the **_input field_**.
3. **htmlFor**: The **htmlFor** attribute of the **_label_** of the input field.
4. **id**: The **id** attribute of the **_input field_**.
5. **name**: The **name** attribute of the **_input field_**.
6. **type**: The **type** attribute of the **_input field_**.
7. **title**: The **title** (also known as the label) for the **_input field_**.

### Usage Examples:
```
{/* Username Input Field */}
<StandardInputField className='' inputClassName=''
                    htmlFor='username' id='username' name='username' type='text' title='USERNAME'/>

{/* Password Input Field */}
<StandardInputField className='SignInPage-passwordInputField' inputClassName=''
                    htmlFor='password' id='password' name='password' type='password' title='PASSWORD'/>
```

### _NOTES_: The **input field** has a height but does not come with width styling. The width will be based on its **parent** container!

## Using `StandardButton`
- Its usage is to perform actions as users hit the button.

### Suggested Import Syntax
> import StandardButton from '../../Components/Buttons/StandardButton/StandardButton'

### Component's Structure Definition:
```
<button type='button' className={className}>
    <p className='button'>{props.title}</p>
</button>
```

### Props:
1. **className**: Add extra stylings to the _button_.
2. **buttonSize (Required)**: Indicates the stylings of the _button_ (either large or small). 
3. **title**: Indicates the title of the _button_.

### Usage Examples:
```
{/* Large Button */}
<StandardButton className='' buttonSize='large' title='SIGN IN'/>

{/* Small Button(not in used right now) */}
<StandardButton className='' buttonSize='small' title='CANCEL'/>
```

### _NOTES_: **buttonSize** is essential as it is used to decide which stylings the button should have!

## Using `Message`
- Its usage is to show the message to the users (errors, warnings, instructions, etc.).

### Suggested Import Syntax
> import Message from '../../Components/Message/Message'

### Component's Structure Definition:
```
<div className={className}>
    <BsFillExclamationCircleFill className='paragraph1 errorIcon'/>
    <p className='paragraph2'>{props.content}</p>
</div>
```

### Props:
1. **className**: Add extra stylings to the **message**.
2. **content**: The content of the **message**.

### Usage Examples:
```
{/* Type of Message (error, warning, regular) will not be in use right now */}
<Message className='' content='INCORRECT USERNAME/PASSWORD'/>
```

### _NOTES_: It only supports error messages for now. 
