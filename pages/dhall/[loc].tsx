import { useRouter } from "next/router";
import FoodList from "../../components/FoodList";

function HallFood() {
    const router = useRouter()
    const loc : string = router.query.loc as string

    return (
        <div className="d-flex align-items-center justify-content-center mt-3">
            <FoodList location={ loc }/>
        </div>
    );
}

export default HallFood;