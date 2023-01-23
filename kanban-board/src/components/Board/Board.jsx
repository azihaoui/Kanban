import React from 'react'
import './Board.scss'
import Ticket from '../Ticket/Ticket'

function Board() {
  return (
    <div className='board'>
        <div className='board-column'>
            <div className='board-title'>
                <div className='board-title-icon'></div>
                <h4>Todo</h4>
            </div>
            <Ticket item={{id:'1', 
                    title: 'This is a title',
                    description: 'This is a description',
                    tasks: ['Hoppa 3 gånger', 'Rasta hunden'],
                    }}/>
            
        </div>
        <div className='board-column'>
        <div className='board-title'>
                <div className='board-title-icon'></div>
                <h4>Doing</h4>
            </div>
            
        </div>
        <div className='board-column'>
        <div className='board-title'>
                <div className='board-title-icon'></div>
                <h4>Done</h4>
           
            </div>
           
        </div>
    </div>
  )
}

export default Board