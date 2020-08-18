import React from 'react'
export default function TeamForm(props){
    const {values, update, submit} = props;
    
    const onChange = evt =>{
        const {name, value} = evt.target;
        update(name,value);
    }

    const onSubmit = evt =>{
        evt.preventDefault();
        submit();
    }
    return(
        <form className ="form container" onSubmit={onSubmit}>
            <div className= 'form submit'>
                <h2>Add a Teammate</h2>
                <button disabled={!values.username || !values.email || !values.role ? true : false }>submit</button>
            </div>
            <div className='form inputs'>
        <h4>General information</h4>
        <label>Username:&nbsp;
            <input
            value={values.username}
            onChange={onChange}
            name='username'
            placeholder='type username'
            maxLength='20'
            type='text'
            />
        </label>
        <label>Email:&nbsp;
          <input
            value={values.email}
            onChange={onChange}
            name='email'
            placeholder='type email'
            maxLength='30'
            type='email'
            />
        </label>
        <label>Role:&nbsp;
            <select onChange={onChange} value={values.role} name='role'>
              <option value="">Select a Role</option>
              <option value="frontend">HTML/CSS</option>
              <option value="ui_Developer">UI Developer</option>
              <option value="team_member">Team member</option>
              <option value="team_lead">Team Lead</option>
            </select>
        </label>
        </div>
        </form>
    )
}