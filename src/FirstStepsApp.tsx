import { ItemCouter } from "./shopping-card/ItemCouter";


export function FirstStepApp() {
    return (
        <>
            <h1>Carrito de compras</h1>

            <ItemCouter name="Nier" quantity={10} ></ItemCouter>
            <ItemCouter name="Persona 5" quantity={3} ></ItemCouter>
            <ItemCouter name="Mass Effect" quantity={4}></ItemCouter>

        </>
    );
}