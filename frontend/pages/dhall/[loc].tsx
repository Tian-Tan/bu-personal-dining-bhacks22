import { useRouter } from "next/router";
import FoodList from "../../components/FoodList";
import type { GetServerSidePropsContext } from "next"


// Get and check the current time with the dining hall's
// Processing required due to constrants on the API
// Whole process could be entrusted to the backend
function checkTime() {
    const date = new Date()

    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()

    const hour = date.getHours()

    let meal = "Closed"

    if (Math.abs(hour) - 10 <= 1) {
        meal = "Breakfast"
    } else if (Math.abs(hour) - 14 <= 3){
        meal = "Lunch"
    } else {
        meal = "Dinner"
    }
   
    return {d : `${year}-${month}-${day}`, m : meal}
}


// Generate data for page on run time 
// For efficiency this can later be statically cached since the food will not change
// Currently not an optimized build due to time constraints
export const getServerSideProps =  async (context : GetServerSidePropsContext) => {

    const location : string = context.query.loc as string

    const time = checkTime();

    const res = await fetch(`http://127.0.0.1:5000/api/${location}/2022-11-12/${time.m}`)

    // Website at this point will throw an error if backend utils have not been ran
    const foodList = await res.json()

    return {
        props: { foodList, time }
    }
}

function HallFood({ foodList, time } : any) {
    const router = useRouter()
    const loc : string = router.query.loc as string

    return (
        <div className="d-flex align-items-center justify-content-center mt-3">
            <FoodList location={ loc } foodList={ foodList } time={ time.m }/>
        </div>
    );
}

export default HallFood