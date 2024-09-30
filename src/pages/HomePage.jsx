import React from 'react'
import Poster  from "../assets/gift-poster.jpg"
import Poster2 from "../assets/gift-poster-2.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import {Button, ProductCard, Container, FeaturedCard} from "../components/index";
import { Navigation, Autoplay } from "swiper/modules";


import "swiper/css/bundle";




const HomePage = () => {

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
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Featured Gifts
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-8">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
      <section className="bg-red-50 py-16">
        <Container>
          <h2 className="text-3xl text-red-400 font-bold mb-8 text-center">
            Shop by Occasion
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeaturedCard
              image="https://images.pexels.com/photos/20016145/pexels-photo-20016145/free-photo-of-light-bulbs-over-happy-birthday-text-on-wall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              title="Birthday"
            />
            <FeaturedCard
              image="https://images.pexels.com/photos/17834/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              title="Wedding"
            />
            <FeaturedCard
              image="https://images.pexels.com/photos/2072175/pexels-photo-2072175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              title="Anniversary"
            />
            <FeaturedCard
              image="https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              title="Graduation"
            />
          </div>
        </Container>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Customer Satisfaction
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/*  {testimonials.map((testimonial) => (
              <Card
                key={testimonial.id}
                className="flex flex-col justify-between"
              >
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {Array.from({ length: testimonial.rating }).map(
                      (_, index) => (
                        <Star
                          key={index}
                          className="w-5 h-5 fill-primary text-primary"
                        />
                      )
                    )}
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "{testimonial.comment}"
                  </p>
                </CardContent>
                <CardFooter>
                  <p className="font-semibold">- {testimonial.name}</p>
                </CardFooter>
              </Card>
            {/* ))} */}
          </div>
        </div>
      </section>

      {/* <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">
              Gift Ideas for Every Budget
            </h2>
            <p className="mb-8">
              Find the perfect present, no matter your price range
            </p>
            <Tabs defaultValue="under25" className="max-w-2xl mx-auto">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="under25">Under $25</TabsTrigger>
                <TabsTrigger value="under50">Under $50</TabsTrigger>
                <TabsTrigger value="under100">Under $100</TabsTrigger>
                <TabsTrigger value="luxury">Luxury</TabsTrigger>
              </TabsList>
              <TabsContent value="under25" className="mt-4">
                <Card>
                  <CardContent className="pt-6">
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Scented Candles</li>
                      <li>Artisanal Chocolates</li>
                      <li>Novelty Socks</li>
                      <li>Desk Plants</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="under50" className="mt-4">
                <Card>
                  <CardContent className="pt-6">
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Personalized Jewelry</li>
                      <li>Gourmet Food Baskets</li>
                      <li>Craft Beer Sets</li>
                      <li>Aromatherapy Diffusers</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="under100" className="mt-4">
                <Card>
                  <CardContent className="pt-6">
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Wireless Earbuds</li>
                      <li>Leather Accessories</li>
                      <li>Spa Day Packages</li>
                      <li>Gourmet Coffee Machines</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="luxury" className="mt-4">
                <Card>
                  <CardContent className="pt-6">
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Designer Watches</li>
                      <li>Fine Jewelry</li>
                      <li>Premium Tech Gadgets</li>
                      <li>Luxury Experiences</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      */}
    </main>
  );
}

export default HomePage