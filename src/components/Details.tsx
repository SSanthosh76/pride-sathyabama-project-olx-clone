import { useLocation } from "react-router-dom"

const Details = () => {

    const location = useLocation();
    const conversionRate = 83; // Conversion rate from USD to INR

    return (
    
        <div className="flex p-4">
            <img src={location?.state?.data?.image} alt="Product" />
        <div>
                <h1 className="text-bold text-3xl">₹{(location?.state?.data?.price * conversionRate).toFixed(2)}</h1>
                <h1 className="mt-5"><span className="font-semibold">Title</span> : {location?.state?.data?.title}</h1>
                <h1 className="mt-5"><span className="font-semibold">Category</span> : {location?.state?.data?.category}</h1>
                <h1 className="mt-5"><span className="font-semibold">Description</span> : {location?.state?.data?.description}</h1>
            </div></div>
    );
}

export default Details;
