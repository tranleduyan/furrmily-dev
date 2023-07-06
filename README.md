# Components Documentation / Guidelines 
## Using `StandardInputField`

### Structure: 
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
