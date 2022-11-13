import Food from "./Food";

interface Props {
    location: string
}

interface food {
    name: string,
    calories: number
}
function FoodList({ location } : Props) {
    
    // Test code for foods
    const foods = [
        { name: "test1", calories: 1},
        { name: "test2", calories: 2},
        { name: "test2", calories: 3}
    ]

    return (
        <div>
            {foods.length ?
                foods.map(({name, calories} : food) => 
                    <Food key={name} name={name} calories={calories}/>) :
                <p>No Food Found</p>
            } 
        </div>
    );
}

export default FoodList;