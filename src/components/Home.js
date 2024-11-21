import React, { useEffect } from 'react'
import Footer from './Footer'
import Menu from './Menu'
import service1 from '../assets/service1.png';
import service2 from '../assets/service2.png';
import service3 from '../assets/service3.png';
import service4 from '../assets/service4.png';
import service5 from '../assets/service5.png';
import choose1 from '../assets/choose1.png';
import choose2 from '../assets/choose2.png';
import choose3 from '../assets/choose3.png';
import choose4 from '../assets/choose4.png';
import client1 from '../assets/client1.png';
import client2 from '../assets/client2.png';
import client3 from '../assets/client3.png';
import top from '../assets/top.png';
import Accordion from './Accordion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Particle from './Particle';


export default function Home() {

    useEffect(() => {
        AOS.init({
            duration: 500,
        });
    }, [])

    const accordionData = [
        {
            title: 'What is OTCFusion?',
            content: `OTC (Over-The-Counter) trading is a method of buying and selling assets directly between two parties, outside of public exchanges. It offers price stability and privacy, especially for large-volume transactions.`
        },
        {
            title: ' Why Choose OTC Trading?',
            content: `OTC trading prevents price slippage, helps connect with strategic investors, and ensures transactions are completed quickly and efficiently.`
        },
        {
            title: 'How Does OTCFusion Facilitate Transactions?',
            content: `OTCFusion connects buyers and sellers within a trusted network, streamlines the negotiation process, and helps ensure deals are completed smoothly.`
        },
        {
            title: 'Is OTC Trading Safe?',
            content: `Yes, OTC trading is safe. OTCFusion ensures security by working with verified parties and transparent transaction processes to build trust.`
        },
        {
            title: 'How Can My Project Benefit from OTC Trading?',
            content: `OTC trading helps increase your project's liquidity and establish partnerships with long-term investors. It also allows you to raise funds without creating market volatility.`
        }
    ];

    return (
        <div className="bg-black-100 font-poppins overflow-hidden text-white-100">

            {/* top section */}

            {/* <div className='py-32'>
                <Background />
            </div> */}

            <div className="lg:px-20 px-5 bg-top">
                <div className='container mx-auto'>
                    <Menu />
                    <div className="flex flex-col py-12">

                        <div data-aos="fade-right" data-aos-delay="400" className="lg:w-1/2 lg:mb-0 mb-12 z-20">
                            <h1 className='md:text-5xl text-3xl lg:leading-loose leading-relaxed font-montserat font-extrabold text-white-100 capitalize'>
                                the future of crypto Connectivity.
                            </h1>

                            <p className='text-white-70 font-inter lg:w-1/3 lg:leading-loose lg:pt-0 pt-5 pb-6'>
                                ridging the gap between cryptocurrency projects and strategic investor
                            </p>

                            <div className="flex items-center gap-8 font-montserat">

                                <a href="/">
                                    <button className="rounded-2xl btn-gradient px-5 py-3 font-semibold">
                                        Contact Us
                                    </button>
                                </a>

                                <a href="/">
                                    <button className="border-2 border-white-100 py-2.5 px-5 font-semibold rounded-2xl ">
                                        Learn More
                                    </button>
                                </a>
                            </div>

                        </div>

                        <div data-aos="zoom-in" className="lg:-mt-56">
                            <img src={top} alt="Logo" className='flex mx-auto rotate' />
                        </div>

                        <div data-aos="fade-left" className="lg:flex mt-8">
                            <div className='w-1/2'>

                            </div>
                            <p className='md:text-4xl text-2xl lg:leading-loose font-montserat font-semibold text-white-100 lg:w-1/2 text-right'>
                                Seemless<br></br>
                                Connection, Trusted Deals.
                            </p>
                        </div>
                    </div>

                </div>

                <svg className='flex mx-auto w-8' width="64" height="54" viewBox="0 0 64 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M32 54L0.823085 -1.7566e-06L63.1769 -7.20775e-06L32 54Z" fill="white" />
                </svg>
            </div>


            {/* about us section */}

            <div id='about' className="lg:px-20 px-5 lg:py-20 py-6">
                <div className='container mx-auto'>

                    <div className="lg:flex block justify-between items-start gap-x-28 lg:space-y-0 space-y-8">

                        <div className='lg:w-1/2 space-y-8'>
                            <div>
                                <h2 data-aos="slide-down" className='md:text-5xl text-2xl font-montserat font-extrabold capitalize pb-2'>
                                    About us
                                </h2>

                                <svg width="192" height="8" viewBox="0 0 192 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 5.62219C63.8333 -0.377808 151.5 2.12219 189.5 5.62221" stroke="white" stroke-width="4" stroke-linecap="round" />
                                </svg>
                            </div>

                            <p data-aos="fade-in" data-aos-delay='50' className='lg:leading-loose text-white-70'>
                                At OTCFusion, we are dedicated to bridging the gap between cryptocurrency projects and strategic investors in the Over-The-Counter (OTC) market. Our mission is to create a trusted, efficient, and secure platform for facilitating high-volume transactions, enabling projects to grow and investors to access exclusive opportunities.
                            </p>

                            <p data-aos="fade-in" data-aos-delay='150' className='lg:leading-loose text-white-70'>
                                With a focus on professionalism and transparency, we provide tailored solutions to meet the unique needs of each project and investor. Whether you're seeking to raise capital, increase liquidity, or connect with long-term partners, OTCFusion is here to simplify the process and deliver results.
                            </p>
                        </div>

                        <div className='lg:w-1/2 space-y-8'>
                            <p data-aos="fade-in" data-aos-delay='50' className='lg:leading-loose text-white-70'>
                                At OTCFusion, we are dedicated to bridging the gap between cryptocurrency projects and strategic investors in the Over-The-Counter (OTC) market. Our mission is to create a trusted, efficient, and secure platform for facilitating high-volume transactions, enabling projects to grow and investors to access exclusive opportunities.
                            </p>

                            <div>
                                <h3 data-aos="slide-down" className='md:text-5xl text-2xl font-montserat font-extrabold capitalize pb-2'>
                                    What is OTCFusion?
                                </h3>

                                <svg width="139" height="17" viewBox="0 0 139 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 15C2 15 6.46296 2 15.7328 2C25.0026 2 29.7388 15 39.0086 15C48.2784 15 53.0147 2 62.2845 2C71.5543 2 76.2905 15 85.5603 15C94.8302 15 93.4741 2 108.836 2C124.198 2 137 10.2105 137 10.2105" stroke="white" stroke-width="4" stroke-linecap="round" />
                                </svg>

                            </div>

                            <p data-aos="fade-in" data-aos-delay='150' className='lg:leading-loose text-white-70'>
                                With a focus on professionalism and transparency, we provide tailored solutions to meet the unique needs of each project and investor. Whether you're seeking to raise capital, increase liquidity, or connect with long-term partners, OTCFusion is here to simplify the process and deliver results.
                            </p>
                        </div>


                    </div>

                </div>
            </div>

            {/* services section */}

            <div id='services' className="">

                <div className="lg:py-20 py-5 lg:px-20 px-5 container mx-auto">

                    <div className='lg:flex items-center gap-8 lg:space-y-0 space-y-6'>
                        <div className='lg:w-4/12 space-y-12'>
                            <h2 data-aos="slide-down" className='md:text-5xl text-2xl font-montserat font-extrabold capitalize lg:leading-relaxed'>
                                Our <br></br>
                                Services
                            </h2>


                            <div data-aos="flip-right" className='animate-border md:p-8 p-5 flex flex-col items-center justify-center text-center gap-y-5'>
                                <img src={service1} alt='services'></img>

                                <h5 className='md:text-xl text-lg font-semibold'>
                                    Private Sale Support
                                </h5>

                                <p className='text-white-70 lg:leading-relaxed'>
                                    Managing token private sale processes, including pricing strategies and connecting with potential investors.
                                </p>
                            </div>
                        </div>

                        <div className='grid lg:grid-cols-2 grid-cols-1 lg:grid-rows-2 grid-rows-1 justify-center items-start mdLgap-8 gap-6 lg:w-8/12'>

                            <div data-aos="flip-right" data-aos-delay='100' className='animate-border md:p-8 p-5 flex flex-col items-center justify-center text-center gap-y-5'>
                                <img src={service2} alt='services'></img>

                                <h5 className='md:text-xl text-lg font-semibold'>
                                    Investor Matching
                                </h5>

                                <p className='text-white-70 lg:leading-relaxed'>
                                    Bridging crypto projects with verified and reliable investors to establish valuable partnerships.
                                </p>
                            </div>

                            <div data-aos="flip-left" data-aos-delay='200' className='animate-border md:p-8 p-5 flex flex-col items-center justify-center text-center gap-y-5'>
                                <img src={service4} alt='services'></img>

                                <h5 className='md:text-xl text-lg font-semibold'>
                                    Liquidity Solutions
                                </h5>

                                <p className='text-white-70 lg:leading-relaxed'>
                                    Providing tailored liquidity solutions to enhance token value and build investor confidence for your projects.
                                </p>
                            </div>

                            <div data-aos="flip-right" data-aos-delay='250' className='animate-border md:p-8 p-5 flex flex-col items-center justify-center text-center gap-y-5'>
                                <img src={service3} alt='services'></img>

                                <h5 className='md:text-xl text-lg font-semibold'>
                                    Compliance Assistance
                                </h5>

                                <p className='text-white-70 lg:leading-relaxed'>
                                    Managing KYC/AML processes to ensure that transactions comply with regulations and operate in a secure environment.
                                </p>
                            </div>

                            <div data-aos="flip-left" data-aos-delay='250' className='animate-border md:p-8 p-5 flex flex-col items-center justify-center text-center gap-y-5'>
                                <img src={service5} alt='services'></img>

                                <h5 className='md:text-xl text-lg font-semibold'>
                                    Secure OTC Deals
                                </h5>

                                <p className='text-white-70 lg:leading-relaxed'>
                                    Facilitating high-volume cryptocurrency transactions by connecting buyers and sellers in a secure and confidential environment.
                                </p>
                            </div>

                        </div>


                    </div>

                </div>

            </div>

            {/* why choose us */}

            <div id='choose' className="">

                <div className="lg:py-20 py-5 lg:px-20 px-5 container mx-auto">

                    <div className='space-y-6 text-center md:pb-16 pb-6'>
                        <h3 data-aos="slide-down" className='md:text-5xl text-2xl font-montserat font-extrabold capitalize'>
                            Why Choose Us?
                        </h3>

                        <p className='text-white-70 lg:leading-relaxed lg:w-1/2 flex mx-auto'>
                            OTCFusion simplifies the process, enabling secure and seamless OTC transactions that add value for both projects and investors.
                        </p>
                    </div>

                    <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-center items-start gap-8'>

                        <div data-aos="fade-up" className=' md:p-8 p-5 flex flex-col items-center justify-center text-center gap-y-5 animate-border'>
                            <img src={choose1} alt='services'></img>

                            <h5 className='md:text-xl text-lg font-semibold'>
                                Access to Strategic Investors
                            </h5>

                            <p className='text-white-70 lg:leading-relaxed'>
                                OTC connects your project with long-term investors who provide not only funding but also reputation, networking, and strategic guidance.
                            </p>
                        </div>

                        <div data-aos="fade-up" data-aos-delay='100' className='md:p-8 p-5 flex flex-col items-center justify-center text-center gap-y-5 animate-border'>
                            <img src={choose2} alt='services'></img>

                            <h5 className='md:text-xl text-lg font-semibold'>
                                Price Stability
                            </h5>

                            <p className='text-white-70 lg:leading-relaxed'>
                                OTC deals allow you to raise liquidity discreetly without impacting token prices on public exchanges.
                            </p>
                        </div>

                        <div data-aos="fade-up" data-aos-delay='200' className='md:p-8 p-5 flex flex-col items-center justify-center text-center gap-y-5 animate-border'>
                            <img src={choose3} alt='services'></img>

                            <h5 className='md:text-xl text-lg font-semibold'>
                                Fast and Efficient Transactions
                            </h5>

                            <p className='text-white-70 lg:leading-relaxed'>
                                OTC transactions enable large-volume deals to be completed quickly, requiring fewer resources compared to public token sales.
                            </p>
                        </div>

                        <div data-aos="fade-up" data-aos-delay='300' className='md:p-8 p-5 flex flex-col items-center justify-center text-center gap-y-5 animate-border'>
                            <img src={choose4} alt='services'></img>

                            <h5 className='md:text-xl text-lg font-semibold'>
                                Private Transactions
                            </h5>

                            <p className='text-white-70 lg:leading-relaxed'>
                                OTC ensures privacy, keeping financial details confidential between the involved parties.
                            </p>
                        </div>

                    </div>
                </div>

            </div>

            {/* our clients section */}

            <div id='clients' className="">

                <div className="lg:py-20 py-5 lg:px-20 px-5 container mx-auto">

                    <div className='space-y-6 text-center md:pb-20 pb-6'>
                        <h3 data-aos="slide-down" className='md:text-5xl text-2xl font-montserat font-extrabold capitalize'>
                            Our Clients
                        </h3>
                    </div>

                    <div className='space-y-12'>
                        <img src={client1} alt='client' className='flex mx-auto'></img>
                        <img src={client2} alt='client' className='flex mx-auto'></img>
                        <img src={client3} alt='client' className='flex mx-auto'></img>
                    </div>
                </div>

            </div>

            {/* faq section */}

            <div id='faq' className="">
                <div className="lg:px-20 px-5 lg:py-20 py-6 container mx-auto">

                    <div className='space-y-6 text-center lg:pb-20 pb-6'>
                        <h3 data-aos="slide-down" className='md:text-4xl text-2xl capitalize font-semibold'>
                            Have any <span className='text-white-70'>Question?</span>
                        </h3>

                        <p className='text-white-70'>
                            Join the industry leaders to discuss where the markets are heading. We accept token payments.
                        </p>
                    </div>

                    <div data-aos="fade-up" data-aos-delay="350" className='lg:w-8/12 flex flex-col mx-auto'>
                        <div data-aos-delay="350" className="accordion space-y-5 py-12">
                            {accordionData.map(({ title, content }) => (
                                <Accordion title={title} content={content} />
                            ))}
                        </div>

                    </div>

                </div>

            </div>

            <Footer />
        </div>
    )
}
