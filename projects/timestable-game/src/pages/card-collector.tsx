import { DragOverlay, useDraggable, useDroppable } from "@dnd-kit/core";
import { cn } from "~/utils/className";

const CardCollector = () => {
    const { isOver, setNodeRef: setNodeRefDroppable } = useDroppable({
        id: "droppable",
    });

    const {
        attributes,
        listeners,
        setNodeRef: setNodeRefDraggable,
    } = useDraggable({
        id: "draggable",
    });

    return (
        <>
            <div></div>
            <div ref={setNodeRefDroppable} className={cn({ "bg-green-500": isOver })}>
                lmfao
            </div>
            <div ref={setNodeRefDraggable} {...listeners} {...attributes} className="bg-red-500 p-4">
                Drag me on me
            </div>
            <DragOverlay>
                <div className={cn({ "bg-blue-500": true })}>lmfao</div>
            </DragOverlay>
        </>
    );
};

export default CardCollector;
