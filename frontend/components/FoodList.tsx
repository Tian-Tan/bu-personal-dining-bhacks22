import Food from "./Food";

interface Props {
    location: string
    foodList: any
    time: string
}

interface food {
    name: string,
    calories: string
}

// Parse the list of foods to get the data we need
function getList(foodList : any, time : string) {
    const fList : Array<any> = foodList[time]["food"]
    let parsedList : food[] = []

    fList.forEach((element : any) => {
        parsedList.push({name : element.name, calories : element.calories})
    });

    return parsedList
}

// Create a foodlist by mapping the data to Food components
function FoodList({ location, foodList, time} : Props) {
    const finalList = getList(foodList, time)
    return (
        <div>
            {finalList.length ?
                finalList.map(({name, calories} : food) => 
                    <Food key={name} name={name} calories={calories}/>) :
                <p>No Food Found</p>
            } 
        </div>
    );
}

export default FoodList;