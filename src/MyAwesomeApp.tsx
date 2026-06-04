import type { CSSProperties } from "react";

export function MyAwesomeApp() {
    const firstName = 'Cristina';
    const lastName = 'Ruiz';
    const favoriteGames = ['Nier', 'Persona 5', 'Alan Wake', 'Resident evil'];
    const isActive = true;
    const address = {
        zipCode: 'ABC-123',
        country: 'Canada',
    };
    /* Pa usar css */
    const myStyles: CSSProperties = {
        backgroundColor: '#fafafa',
        borderRadius: 20,
        padding: 10,
        marginTop: 30,

    }
    return (
        <>
            <h1>{firstName}</h1>
            <h3>{lastName}</h3>
            <p>{favoriteGames.join(', ')}</p>

            <ul>
                <li>{favoriteGames[0]}</li>
                <li>{favoriteGames[1]}</li>
                <li>{favoriteGames[2]}</li>
            </ul>
            {/* Los valores booleanos no muestran nada */}
            <h1>{isActive}</h1>
            {/* Si quieres poner algo con el boolenano debes hacerlo asi */}
            <h1>{isActive ? 'Activo' : 'No activo'}</h1>
            {/* Los literales no deja */}
            {/*     <p>{address}</p> */}
            {/* Por lo que pra hacerlo tendremos que hacer esto */}
            <p style={myStyles}>{JSON.stringify(address)}</p>

        </>
    );

}