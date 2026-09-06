"use client"

import { useDroppable } from "@dnd-kit/react";
import React from "react";


interface DroppableProps{
    id: number;
    children?: React.ReactNode
}

export default function Droppable({id, children} : DroppableProps){

    const {ref} = useDroppable({
        id:id
    });

    return (
        <div
            ref={ref}
            className="border-1 border-gray-600 p-5 w-40 h-100">
            {children}

        </div>
    );
}