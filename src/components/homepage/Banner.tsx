// import Image from "next/image";
// import bannerImg from '@/assets/hero_img.jpg'

// const Banner = () => {
//     return (
//         <section className="py-20">
//             <div className="container mx-auto grid grid-cols-2 gap-4 items-center bg-slate-300 rounded-4xl p-4">
//                 {/* left */}
//                 <div className="space-y-4">
//                     <h2 className="font-bold text-5xl">Books to freshen up <br /> your bookshelf</h2>

//                     <button className="btn btn-success">View The List</button>
//                 </div>

//                 {/* right */}
//                 <div>
//                     <Image src={bannerImg} alt="banner" />
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Banner;



import Image from "next/image";
import bannerImg from "@/assets/hero_img.jpg";

const Banner = () => {
    return (
        <section className="py-12 md:py-20">
            <div className="container mx-auto px-4">
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-50 via-white to-emerald-100 px-6 py-10 shadow-sm md:px-12 md:py-16">
                    
                    {/* Decorative background */}
                    <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-200/40 blur-3xl" />
                    <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-teal-200/30 blur-3xl" />

                    <div className="relative grid items-center gap-10 md:grid-cols-2">
                        
                        {/* Left Content */}
                        <div className="space-y-6">
                            <span className="inline-block rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
                                Discover Your Next Favorite Book
                            </span>

                            <h1 className="text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl lg:text-6xl">
                                Books to freshen up{" "}
                                <span className="text-emerald-600">
                                    your bookshelf
                                </span>
                            </h1>

                            <p className="max-w-lg text-base leading-7 text-slate-600 md:text-lg">
                                Explore our carefully curated collection and
                                discover stories, ideas, and knowledge worth
                                keeping on your bookshelf.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <button className="btn border-0 bg-emerald-600 px-6 text-white shadow-lg shadow-emerald-600/20 hover:bg-emerald-700">
                                    View The List
                                </button>

                                <button className="btn btn-outline border-slate-300 px-6 text-slate-700 hover:border-emerald-600 hover:bg-emerald-50 hover:text-emerald-700">
                                    Explore Books
                                </button>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="relative mx-auto w-full max-w-md">
                            <div className="absolute inset-4 rotate-3 rounded-3xl bg-emerald-200/60" />

                            <div className="relative overflow-hidden rounded-3xl bg-white p-3 shadow-2xl">
                                <Image
                                    src={bannerImg}
                                    alt="A collection of books"
                                    className="h-auto w-full rounded-2xl object-cover"
                                    priority
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;