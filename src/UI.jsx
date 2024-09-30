import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Gift,
  Search,
  ShoppingBag,
  Menu,
  X,
  Heart,
  Star,
  ChevronRight,
} from "lucide-react";

const featuredProducts = [
  {
    id: 1,
    name: "Handcrafted Mug",
    price: 24.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 2,
    name: "Scented Candle Set",
    price: 39.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 3,
    name: "Personalized Photo Frame",
    price: 29.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 4,
    name: "Gourmet Chocolate Box",
    price: 34.99,
    image: "/placeholder.svg?height=200&width=200",
  },
];

const occasions = [
  { id: 1, name: "Birthday", image: "/placeholder.svg?height=300&width=400" },
  { id: 2, name: "Wedding", image: "/placeholder.svg?height=300&width=400" },
  {
    id: 3,
    name: "Anniversary",
    image: "/placeholder.svg?height=300&width=400",
  },
  { id: 4, name: "Graduation", image: "/placeholder.svg?height=300&width=400" },
];

const testimonials = [
  {
    id: 1,
    name: "Sarah L.",
    comment:
      "The perfect gift for my best friend's wedding. Excellent service!",
    rating: 5,
  },
  {
    id: 2,
    name: "John D.",
    comment:
      "Quick delivery and beautiful packaging. Will definitely order again!",
    rating: 5,
  },
  {
    id: 3,
    name: "Emma W.",
    comment:
      "Great selection of unique gifts. Found exactly what I was looking for.",
    rating: 4,
  },
];

export default function GiftShopHome() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="sticky top-0 z-10 bg-background border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <Gift className="h-8 w-8 text-primary mr-2" />
            <h1 className="text-2xl font-bold text-primary">GiftHaven</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-primary font-medium">
              Home
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary">
              Shop
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary">
              Occasions
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary">
              About
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary">
              Contact
            </a>
          </nav>
          <div className="flex items-center">
            <Button variant="ghost" size="icon" className="mr-2">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
            <Button variant="ghost" size="icon" className="mr-2">
              <ShoppingBag className="h-5 w-5" />
              <span className="sr-only">Cart</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
              <span className="sr-only">Menu</span>
            </Button>
          </div>
        </div>
        {mobileMenuOpen && (
          <nav className="md:hidden bg-background py-2">
            <a href="#" className="block px-4 py-2 text-primary font-medium">
              Home
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-muted-foreground hover:text-primary"
            >
              Shop
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-muted-foreground hover:text-primary"
            >
              Occasions
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-muted-foreground hover:text-primary"
            >
              About
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-muted-foreground hover:text-primary"
            >
              Contact
            </a>
          </nav>
        )}
      </header>

      <main className="flex-grow">
        <section className="relative">
          <img
            src="/placeholder.svg?height=600&width=1600"
            alt="Festive gift arrangement"
            className="w-full h-[60vh] object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Find the Perfect Gift
              </h2>
              <p className="text-xl text-white mb-8">
                Discover unique presents for every occasion
              </p>
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Shop Now
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Featured Gifts
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredProducts.map((product) => (
                <Card key={product.id}>
                  <CardHeader>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                  </CardHeader>
                  <CardContent>
                    <CardTitle className="mb-2">{product.name}</CardTitle>
                    <p className="text-muted-foreground">
                      ${product.price.toFixed(2)}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Add to Cart</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-muted py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Shop by Occasion
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {occasions.map((occasion) => (
                <Card key={occasion.id} className="overflow-hidden">
                  <img
                    src={occasion.image}
                    alt={occasion.name}
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-4">
                    <CardTitle className="mb-2">{occasion.name}</CardTitle>
                    <Button variant="link" className="p-0">
                      Explore Gifts
                      <ChevronRight className="ml-1 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Customer Satisfaction
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
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
              ))}
            </div>
          </div>
        </section>

        <section className="bg-primary text-primary-foreground py-16">
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

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="bg-muted rounded-lg p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Join Our Newsletter</h2>
              <p className="mb-6">
                Get exclusive offers and gift ideas delivered to your inbox
              </p>
              <div className="flex justify-center">
                <Input
                  className="w-full max-w-sm mr-2"
                  placeholder="Enter your email"
                />
                <Button>Subscribe</Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-muted">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About GiftHaven</h3>
              <p className="text-muted-foreground">
                We curate unique and thoughtful gifts for every occasion, making
                gift-giving a joyful experience.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Shop
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Occasions
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Shipping & Returns
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Gift Cards
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 text-center">
            <p className="text-muted-foreground">
              &copy; 2024 GiftHaven. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
