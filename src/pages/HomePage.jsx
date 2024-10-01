import React from 'react'
import Poster  from "../assets/gift-poster.jpg"
import Poster2 from "../assets/gift-poster-2.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import {Button, Container, FeaturedCard, Input} from "../components/index";
import { Navigation, Autoplay } from "swiper/modules";


import "swiper/css/bundle";




const HomePage = () => {
   const [activeTab, setActiveTab] = React.useState("Under $25");

   const tabs = ["Under $25", "Under $50", "Under $100", "Luxury"];
   const giftIdeas = {
     "Under $25": [
       "Scented Candles",
       "Artisanal Chocolates",
       "Novelty Socks",
       "Desk Plants",
     ],
     "Under $50": [
       "Wireless Earbuds",
       "Portable Chargers",
       "Smartphone Stands",
       "Mini Projector",
     ],
     "Under $100": [
       "Smart Speakers",
       "Fitness Trackers",
       "Instant Cameras",
       "Designer Wallets",
     ],
     Luxury: [
       "Smart Watches",
       "High-End Headphones",
       "Luxury Perfumes",
       "Gourmet Hampers",
     ],
   };
  
const product = {
  image: "https://via.placeholder.com/300",
  title: "Elegant Wristwatch",
  description:
    "A luxury wristwatch with a sleek design and high-quality materials.",
  price: 149.99,
};
  const Images = [
    Poster,
    Poster2
  ]
  return (
    <main className="flex-grow">
      <section className="relative">
        <div className="">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={50}
            slidesPerView="auto"
            autoplay={{ delay: 4000, disableOnInteraction: false }}
          >
            {Images.map((img, i) => (
              <SwiperSlide key={i}>
                <img
                  src={img}
                  alt="Festive gift arrangement"
                  className="w-full h-[60vh] object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="absolute inset-0 bg-red-400 bg-opacity-35 flex items-center justify-center z-10">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Find the Perfect Gift
            </h2>
            <p className="text-xl text-white mb-8">
              Discover unique presents for every occasion
            </p>
            <div className=" flex items-center justify-center">
              <Button
                className="text-white p-2"
                children="Shop Now"
                color="bg-red-500"
                shape="rounded"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 w-full">
        <Container>
          <h2 className="text-3xl font-bold mb-8 text-center">
            Featured Gifts
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-fit mx-auto">
            <FeaturedCard
              image={product.image}
              price={product.price}
              description={product.description}
            />
            <FeaturedCard
              image={product.image}
              price={product.price}
              description={product.description}
            />
            <FeaturedCard
              image={product.image}
              price={product.price}
              description={product.description}
            />
            <FeaturedCard
              image={product.image}
              price={product.price}
              description={product.description}
            />
          </div>
        </Container>
      </section>
      <section className="bg-red-50 py-16">
        <Container>
          <h2 className="text-3xl text-red-400 font-bold mb-8 text-center">
            Shop by Occasion
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-fit mx-auto">
            <FeaturedCard
              image="https://images.pexels.com/photos/20016145/pexels-photo-20016145/free-photo-of-light-bulbs-over-happy-birthday-text-on-wall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              title="Birthday"
              type="expo"
            />
            <FeaturedCard
              image="https://images.pexels.com/photos/17834/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              title="Wedding"
              type="expo"
            />
            <FeaturedCard
              image="https://images.pexels.com/photos/2072175/pexels-photo-2072175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              title="Anniversary"
              type="expo"
            />
            <FeaturedCard
              image="https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              title="Graduation"
              type="expo"
            />
          </div>
        </Container>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Customer Satisfaction
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center w-full">
            <FeaturedCard
              ratting="w-5 h-5 fill-primary text-primary"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              type="expo"
            />
            <FeaturedCard
              ratting="w-5 h-5 fill-primary text-primary"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              type="expo"
            />
            <FeaturedCard
              ratting="w-5 h-5 fill-primary text-primary"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              type="expo"
            />
          </div>
        </div>
      </section>
      <section className="py-16">
        <Container>
          <div className="min-h-[80vh] flex justify-center items-center bg-gray-900 p-2">
            <div className="text-center">
              {/* Title Section */}
              <h1 className="text-4xl font-bold text-white">
                Gift Ideas for Every Budget
              </h1>
              <p className="text-gray-300 mt-2">
                Find the perfect present, no matter your price range
              </p>

              {/* Tab Section */}
              <div className="mt-6 flex justify-center space-x-4">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 text-sm font-medium rounded-md focus:outline-none ${
                      activeTab === tab
                        ? "bg-white text-black shadow-lg"
                        : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Gift List Section */}
              <div className="mt-8 bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
                <ul className="list-disc list-inside space-y-2 text-left text-black">
                  {giftIdeas[activeTab].map((item, index) => (
                    <li key={index} className="text-lg font-medium">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="sm:py-16 py-8 w-full bg-gray-900 text-white">
        <Container>
          <div className="bg-muted rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Newsletter</h2>
            <p className="mb-6">
              Get exclusive offers and gift ideas delivered to your inbox
            </p>
            <div className="flex justify-center">
              <Input
                className="w-full max-w-sm mr-2"
                placeholder="Enter your email"
                size="p-2 w-[440px]"
                type="email"
                
              />
              <Button children="Subscribe" color="bg-red-400 text-white" size="p-2" shape="rounded" />

            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

export default HomePage