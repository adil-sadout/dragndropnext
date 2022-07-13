import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import { Draggable } from 'react-beautiful-dnd';

function CryptoCoin({coin, index}) {
    
  return (
    <Draggable key={`${coin.id}-key`} draggableId={`${coin.id}-id`} index={index}>

        {
            (provided)=>(


                <li  className="draggable" key={coin.id} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                    <p>{index}</p>
                    <p>{coin.name}</p>
                    <ListItemIcon>
                        <DragHandleIcon />
                    </ListItemIcon>
                </li>
            )
        }
        
    
    </Draggable>
  )
}

export default CryptoCoin