export default function Score() {
    return <div className="flex justify-center flex-col">
        <p className="font-medium text-lg flex self-center mb-4">Best streaks</p>
        <div className="flex justify-evenly">
            <span>Pedro Umido</span>
            <span>50</span>
        </div>
        <div className="flex justify-evenly">
            <span>Pedro Umido</span>
            <span>40</span>
        </div>
        <div className="flex justify-evenly">
            <span>Pedro Umido</span>
            <span>30</span>
        </div>
        {/* hacer un map con una variable que tenga todos los resultados
            poner una condicion que pregunte si el indice es menor a 5, si es igual, poner un break
            HACER UN ESTADO DE REDUX CON 5 USUARIOS FALSOS*/}
    </div>
}