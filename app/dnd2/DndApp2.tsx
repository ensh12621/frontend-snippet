"use client"

import { DragDropProvider } from "@dnd-kit/react";
import Draggable from "./Draggable";
import Droppable from "./Droppable";
import { useState } from "react";

export default function DndApp2() {


    const [selectedDroppableIdx, setSelectedDroppableIdx] = useState<number | null>(null);

    return (
        <DragDropProvider
            onDragEnd={(event) => {
                if(event.canceled) return;

                const {target} = event.operation;
                
                if(target){
                    
                    setSelectedDroppableIdx(target.id as number);
                }else{
                    setSelectedDroppableIdx(null);
                }
                
                
            }}>
            <div>
                <h1>DND APP 2</h1>

                <div className="flex gap-50">
                    <Droppable id={1}>
                        {selectedDroppableIdx === 1 && <Draggable id={1} />}
                    </Droppable>
                        

                    <Droppable id={2}>
                        {selectedDroppableIdx === 2 && <Draggable id={1} />}
                    </Droppable>
                </div>

                <div className="border-t-5 border-purple-600">
                    {selectedDroppableIdx === null && <Draggable id={1} />}
                    
                </div>
            </div>
        </DragDropProvider>
    );
}