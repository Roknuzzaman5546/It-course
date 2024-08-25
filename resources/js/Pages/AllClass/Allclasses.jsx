import { Head } from "@inertiajs/react";
import Classes from "./Classes";
import { useEffect, useState } from "react";
import Main from "@/Layouts/Main";


const Allclasses = ({auth}) => {
    const [classes, setClasses] = useState([])
    useEffect(() => {
        fetch('class.json')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])


    return (
        <Main auth={auth}>
            <div className="w-11/12 mx-auto mb-20">
                <Head title="All class">
                </Head>
                <div className=" grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mt-10">
                    {
                        classes.map(item => <Classes
                            key={item.id}
                            item={item}
                        ></Classes>)
                    }
                </div>
            </div>
        </Main>
    );
};

export default Allclasses;
