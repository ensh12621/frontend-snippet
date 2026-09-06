"use client"

import { useDraggable } from "@dnd-kit/react";

interface DraggableProps {
    id: number;
}

export default function Draggable({id} : DraggableProps){

    const {ref} = useDraggable({
        id: id
    });
 
    return (
        <button 
            ref={ref}
            className="border-1 p-3">
            Draggable
        </button>
    );
}