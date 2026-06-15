import { ItemCouter } from "./shopping-card/ItemCouter";

/* Estructura que debe tener los productos del carrito */
interface ItemInCart {
    productName: string;
    quantity: number;
}

/* Array con los productos */
const itemsInCart: ItemInCart[] = [
    { productName: 'Nintendo Switch 2', quantity: 5 },
    { productName: 'Pro controller', quantity: 1 },
    { productName: 'Super Mario', quantity: 3 },
];

export function FirstStepApp() {
    return (
        <>
            <h1>Carrito de compras</h1>
            {/* Recorro todos lo  productos del array
            y creo un componente ItemCounter por cada uno */}
            {itemsInCart.map(({ productName, quantity }) => (
                <ItemCouter  key={productName} name={productName} quantity={quantity}></ItemCouter>))}

            {/* <ItemCouter name="Nier" quantity={10} ></ItemCouter>
            <ItemCouter name="Persona 5" quantity={3} ></ItemCouter>
            <ItemCouter name="Mass Effect" quantity={4}></ItemCouter> */}

        </>
    );
}