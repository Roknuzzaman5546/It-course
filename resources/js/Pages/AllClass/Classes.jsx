import { Link } from "@inertiajs/react";


const Classes = ({ item }) => {
    const { name, title, img, price, totalEnrolment, _id } = item;

    return (
        <div>
            <div className="card bg-gray-800 shadow-xl text-white">
                <div>
                    <img className="h-48 relative w-full" src={img} alt="Shoes" />
                    <div className="absolute bottom-0 top-0 left-0 ml-2 mt-2">
                        <p className="bg-gray-700 text-white p-1 rounded-md">$ {price}</p>
                    </div>
                </div>
                <div className="mt-5 space-y-2 flex-col items-center">
                    <h2 className=" text-2xl font-bold">{name}</h2>
                    <p>{title}</p>
                    <p>Total enroll: {totalEnrolment}</p>
                    <Link to={`/class/${_id}`}><button className="">Show details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Classes;
