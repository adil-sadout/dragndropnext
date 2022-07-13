import CryptoCoin from "./cryptoCoin"
import List from '@mui/material/List';
import {useEffect, useState} from "react"
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
function CryptoList({orderedList, setOrderedList}) {

    

    
    const RandomizeListOrder = (List)=>{
        const NewList= List.map(a =>({
            value:a, sort:Math.random()
        }))
        .sort((a,b) => a.sort - b.sort)
        .map(a => a.value)

        return NewList
    } 
    

    useEffect(() => {
        setOrderedList(RandomizeListOrder(orderedList))
    },[])
    

    
  return (
    <>
        <Droppable droppableId="cryptocoins">
            {(provided)=>(

                <ul className="cryptocoins" {...provided.droppableProps}  ref={provided.innerRef}>
                {
                    orderedList.map((coin, index) =>{
                        
                        return(

                            <>
                                <CryptoCoin coin={coin} index={index}/>
                            </>
                        )
                    })
                }
                {provided.placeholder}

                </ul>
            )}
            
        </Droppable>
    </>
  )
  
}

export default CryptoList