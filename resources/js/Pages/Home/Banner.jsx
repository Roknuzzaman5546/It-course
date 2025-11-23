import { Link } from "@inertiajs/react";

const Banner = () => {
    return (
        <section className="relative w-full h-[500px] md:h-[650px] flex items-center justify-center overflow-hidden rounded-2xl shadow-xl">
            <img
                src="/assets/home/banner.jpg"
                alt="Banner"
                className="absolute inset-0 w-full h-full object-cover scale-110 hover:scale-100 transition-all duration-700"
            />


            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/20"></div>


            <div className="relative z-10 text-center text-white px-6 max-w-2xl">
                <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight">
                    IT <span className="text-blue-500">Tech</span>
                </h1>
                <p className="text-lg opacity-90 mb-6 font-light">
                    The best platform to learn skills, build your career, and grow in the IT world.
                </p>


                <Link href={route("all.class")}>
                    <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-md hover:bg-blue-700 transition-all">
                        Explore Classes
                    </button>
                </Link>
            </div>
        </section>
    );
};

export default Banner;
