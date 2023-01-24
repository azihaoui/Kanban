import React from 'react'
import './CreateTicket.scss'

function CreateTicket() {
  return (
    <div className='modal'>
        <div className='modal-card'>
            <h3 className='heading-l'>Add New Task</h3>

            <div className="modal-input-group">
                <label htmlFor='title' className='body-m'>
                    Title
                </label>
                <input type="text" 
                id='title' 
                placeholder='e.g Take StarWars break' />
            </div>

            <div className="modal-input-group">
                <label htmlFor='description' className='body-m'>
                    Title
                </label>
                <textarea 
                    type="text" 
                    id='description' 
                    placeholder='e.g get a good opinion for once' 
                />
            </div>
        </div>
    </div>
  )
}

export default CreateTicket