"use client"
import React, { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

import media1 from '@/public/images/recycle.jpeg';
import media2 from '@/public/images/real/StockCake-Colorful Battery Collection_1720800956.jpg';
import media3 from '@/public/images/real/StockCake-Electric Car Charging_1720801156.jpg';
import media4 from '@/public/images/real/StockCake-Charging Electric Vehicle_1720801074.jpg';
import media5 from '@/public/images/recycle3.jpg'

const Page = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration
            easing: 'ease-in-out', // Easing function
        });
    }, []);

    return (
        <div>
            <div className="flex justify-center">
                <div className="w-[80%]">
                    <Image data-aos="fade-up" src={media1} alt="recycle" />
                </div>
            </div>
            <div className="m-auto w-[80%] mt-16">
                <div className="mb-8">
                    <h1 className="text-6xl font-semibold">Recycling</h1>
                </div>
                <div>
                    <p className="text-xl font-extralight leading-9 mb-3">
                        Our core strength lies in our innovation and technological prowess <span className="text-green-700 font-bold">that gives an unprecedented edge to our recycling operations.</span> Our recycling technology aims <span className="text-green-700 font-bold">to take today’s waste and turn it into conflict-free, sustainable resources for tomorrow.</span> End of life electronics is recycled <span className="text-green-00">at our state-of-the-art recycling plant, using disruptive technology, to extract reusable materials.</span> Developed in house, at our R&D facility, our recycling technology ensures <span className="text-green-700 font-bold">that e-Waste is processed in an environmentally friendly manner, with high efficiency and lowered carbon footprint.</span>
                    </p>

                    <p className="text-xl font-extralight leading-9 mb-3">
                        <span className="text-green-700 font-bold">With the right technology, recycling can offer a potent resource for our planet,</span> transforming millions of tons of e-Waste <span className="text-green-700 font-bold">into reusable material.</span> Our high-tech recycling <span className="text-green-800">with rare earth elements and other reusable materials and minerals,</span> from electronic waste, efficiently <span className="text-green-700 font-bold">in a sustainable and environmentally responsible manner.</span>
                    </p>

                    <p className="text-xl font-extralight leading-9">
                        Taking into consideration <span className="text-green-700 font-bold">our depleting natural resources,</span> this urban mining approach offers quite <span className="text-green-0">a few benefits - it provides a substantial secondary resource,</span> which is highly suitable for direct use, while also <span className="text-green-700 font-bold">ensuring that the environment is kept free from harmful toxins in e-Waste.</span> This results <span className="text-green-700 font-bold">in increased energy efficiency and lowers the demand for mining of new materials.</span>
                    </p>

                    <p className="text-xl font-extralight leading-9">
                        Powered with this sustainable recycling technology, <span className="text-green-700 font-bold">we offer an easy and hassle-free solution for organizations</span> to manage their electronic assets <span className="text-green-00">and e-waste more efficiently and effectively,</span> while also <span className="text-green-700 font-bold">safeguarding them from legal and environmental risks associated with e-waste disposal.</span>
                    </p>
                </div>
            </div>

            <div>
                <section>
                    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                            <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
                                <Image
                                    data-aos="fade-up"
                                    alt=""
                                    src={media2}
                                    className="absolute inset-0 h-full w-full object-cover"
                                />
                            </div>
                            <div className="lg:py-16">
                                <h2 className="text-green-800 text-3xl font-bold sm:text-4xl">
                                    EV battery Recycling
                                </h2>
                                <article className="space-y-4 text-gray-600">
                                    <div className="mt-4">
                                        <ul className="list-disc list-inside">
                                            <li className="mb-2">
                                                Reduces the need for new mining by recovering valuable materials like lithium, cobalt, and nickel.
                                            </li>
                                            <li className="mb-2">
                                                Prevents soil and water contamination by keeping hazardous waste out of landfills.
                                            </li>
                                            <li className="mb-2">
                                                Lowers the cost of raw materials by reusing recovered components.
                                            </li>
                                            <li className="mb-2">
                                                Creates new job opportunities in the recycling and technology sectors.
                                            </li>
                                            <li className="mb-2">
                                                Enhances the overall environmental benefits of electric vehicles.
                                            </li>
                                            <li className="mb-2">
                                                Promotes a circular economy by ensuring materials are reused and not wasted.
                                            </li>
                                            <li className="mb-2">
                                                Encourages the development of more efficient and advanced recycling technologies.
                                            </li>

                                        </ul>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                        <div className="max-w-3xl">
                            <h2 className="text-green-800 text-3xl font-bold sm:text-4xl">
                                EV's are sustainable
                            </h2>
                        </div>

                        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                            <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full lg:order-last">
                                <Image
                                    data-aos="fade-up"
                                    alt=""
                                    src={media3}
                                    className="absolute inset-0 h-full w-full object-cover"
                                />
                            </div>

                            <div className="lg:py-16 lg:order-first">
                                <article className="space-y-4 text-gray-600">
                                    <div className="mt-4">
                                        <ul className="list-disc list-inside">
                                            <li className="mb-2">
                                                Electric vehicles produce zero tailpipe emissions, reducing air pollution.
                                            </li>
                                            <li className="mb-2">
                                                EVs can be powered by renewable energy sources, further reducing their carbon footprint.
                                            </li>
                                            <li className="mb-2">
                                                The efficiency of electric motors leads to lower overall energy consumption compared to internal combustion engines.
                                            </li>
                                            <li className="mb-2">
                                                EVs contribute to energy independence by reducing reliance on fossil fuels.
                                            </li>
                                            <li className="mb-2">
                                                The advancement of battery technology is leading to longer-lasting and more sustainable batteries.
                                            </li>
                                            <li className="mb-2">
                                                Governments and organizations are investing in EV infrastructure, making them more accessible and convenient.
                                            </li>
                                            <li className="mb-2">
                                                EV adoption promotes technological innovation and economic growth.
                                            </li>

                                        </ul>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                            <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
                                <Image
                                    data-aos="fade-up"
                                    alt=""
                                    src={media4}
                                    className="absolute inset-0 h-full w-full object-cover"
                                />
                            </div>
                            <div className="lg:py-16">
                                <h2 className="text-green-800 text-3xl font-bold sm:text-4xl">
                                    Electric Vehical
                                </h2>
                                <article className="space-y-4 text-gray-600">
                                    <div className="mt-4">
                                        <ul className="list-disc list-inside">
                                            <li className="mb-2">
                                                Electric vehicles (EVs) utilize electric motors powered by rechargeable battery packs.
                                            </li>
                                            <li className="mb-2">
                                                EVs offer significant reductions in greenhouse gas emissions compared to traditional gasoline vehicles.
                                            </li>
                                            <li className="mb-2">
                                                They require less maintenance due to fewer moving parts in the drivetrain.
                                            </li>
                                            <li className="mb-2">
                                                EVs can be charged at home, providing convenience and reducing the need for frequent refueling stops.
                                            </li>
                                            <li className="mb-2">
                                                Many countries offer incentives and subsidies to promote EV adoption, making them more affordable.
                                            </li>
                                            <li className="mb-2">
                                                EVs contribute to reduced noise pollution in urban areas.
                                            </li>
                                            <li className="mb-2">
                                                The increasing range of EVs makes them suitable for a wider variety of driving needs.
                                            </li>

                                        </ul>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </section>


                <section>
                    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                        <div className="max-w-3xl">
                            <h2 className="text-green-800 text-3xl font-bold sm:text-4xl">
                            IT Goods Recycling
                            </h2>
                        </div>

                        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                            <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full lg:order-last">
                                <Image
                                    data-aos="fade-up"
                                    alt=""
                                    src={media5}
                                    className="absolute inset-0 h-full w-full object-cover"
                                />
                            </div>

                            <div className="lg:py-16 lg:order-first">
                                <article className="space-y-4 text-gray-600">
                                    <div className="mt-4">
                                        <ul className="list-disc list-inside">
                                        <li className="mb-2">
                                                I.T. goods include various electronics ranging from desktops, laptops, and servers to printers, scanners, and copiers.
                                            </li>
                                            <li className="mb-2">
                                                Once these electronics items are received at our processing plant they are checked to determine whether they should be recycled or refurbished.
                                            </li>
                                            <li className="mb-2">
                                                After segregating the units suitable for refurbishing they are forwarded to our refurbishing section, while the remaining units are sent for recycling.
                                            </li>
                                            <li className="mb-2">
                                                The electronics sent for recycling are first segregated and then dismantled. During dismantling, the wire and cable components in the devices are taken out and sent for recycling.
                                            </li>
                                            <li className="mb-2">
                                                Next, the components like LCD, PCB, RAM, SMPS and plastic parts are segregated and recycled separately. The remaining components are sent for processing to the mechanical shredder, following which they are sent to the magnetic separator.
                                            </li>
                                            <li className="mb-2">
                                                The magnetic separator separates the ferrous components from which iron is extracted. The remainder is then passed through the Eddy Current separator, which separates non-ferrous metals like copper and aluminum.
                                            </li>
                                            <li className="mb-2">
                                                These metals are then smelted and purified. The plastic components are forwarded for plastic recycling at Attero’s plant.
                                            </li>

                                        </ul>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <section>
                    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                            <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
                                <Image
                                    data-aos="fade-up"
                                    alt=""
                                    src={media5}
                                    className="absolute inset-0 h-full w-full object-cover"
                                />
                            </div>
                            <div className="lg:py-16">
                                <h2 className="text-green-800 text-3xl font-bold sm:text-4xl">
                                    IT Goods Recycling
                                </h2>
                                <article className="space-y-4 text-gray-600">
                                    <div className="mt-4">
                                        <ul className="list-disc list-inside">
                                            <li className="mb-2">
                                                I.T. goods include various electronics ranging from desktops, laptops, and servers to printers, scanners, and copiers.
                                            </li>
                                            <li className="mb-2">
                                                Once these electronics items are received at our processing plant they are checked to determine whether they should be recycled or refurbished.
                                            </li>
                                            <li className="mb-2">
                                                After segregating the units suitable for refurbishing they are forwarded to our refurbishing section, while the remaining units are sent for recycling.
                                            </li>
                                            <li className="mb-2">
                                                The electronics sent for recycling are first segregated and then dismantled. During dismantling, the wire and cable components in the devices are taken out and sent for recycling.
                                            </li>
                                            <li className="mb-2">
                                                Next, the components like LCD, PCB, RAM, SMPS and plastic parts are segregated and recycled separately. The remaining components are sent for processing to the mechanical shredder, following which they are sent to the magnetic separator.
                                            </li>
                                            <li className="mb-2">
                                                The magnetic separator separates the ferrous components from which iron is extracted. The remainder is then passed through the Eddy Current separator, which separates non-ferrous metals like copper and aluminum.
                                            </li>
                                            <li className="mb-2">
                                                These metals are then smelted and purified. The plastic components are forwarded for plastic recycling at Attero’s plant.
                                            </li>
                                        </ul>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </section> */}
            </div>
        </div>
    );
};

export default Page;
