    import { Link } from "@inertiajs/react";


    const Classes = ({ item }) => {
        const { name, title, img, price, totalEnrolment, _id } = item;

        return (
            <div>
                <div className="card bg-gray-800 shadow-xl text-white cardC ">
                    <div>
                        <img className="h-44 relative w-full" src={img} alt="Shoes" />
                        <div className="absolute bottom-0 top-0 left-0 ml-2 mt-2">
                            <p className="bg-gray-700 text-white p-1 rounded-md text-xs">$ {price}</p>
                        </div>
                    </div>
                    <div className="mt-2 pl-3 pb-2  flex flex-col">
                        <h2 className=" text-sm font-bold line-clamp-1 mt-2">{name}</h2>
                        <p className="text-xs my-1">{title}</p>
                        <p className="text-xs">Total enroll: {totalEnrolment}</p>
                        <button className=" text-left text-sm justify-end">
                            Show Details
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    export default Classes;
