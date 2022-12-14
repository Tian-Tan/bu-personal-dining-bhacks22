import Food from "./Food";

interface Props {
    location: string
    foodList: any
    time: string
}

interface food {
    name: string,
    calories: string
    description: string
    id: number
}

// Parse the list of foods to get the data we need
function getList(foodList : any, time : string) {
    const fList : Array<any> = foodList[time]["food"]
    let parsedList : food[] = []
    let nameSet = new Set<string>() 

    fList.forEach((element : any) => {
        if (!nameSet.has(element.name)) {
            nameSet.add(element.name)
            parsedList.push({   
                name : element.name, 
                calories : element.calories, 
                description : element.description,
                id : element.id
            })
        }
    });

    return parsedList
}

// Create a foodlist by mapping the data to Food components
function FoodList({ location, foodList, time} : Props) {
    const finalList = getList(foodList, time)
    return (
        <div>
            <h1 className="d-flex align-items-center justify-content-center">
                {location.toLocaleUpperCase()}</h1>
            {finalList.length ?
                finalList.map(({name, calories, description, id} : food) => 
                    <Food key={id} name={name} calories={calories} description={description}/>) :
                <p>No Food Found</p>
            } 
        </div>
    );
}

export default FoodList;