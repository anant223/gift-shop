import { Container, Input, Logo, Button } from "../index";
import {
  Search,
  ShoppingBag,
  Menu,
  X,
  User,
  Heart,
  Star,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-20 bg-[0_0%_100%] border-b bg-white lg:px-[60px]  shadow-lg">
      <Container>
        <div className="py-4 flex items-center justify-between text-red-900">
          <Logo />
          <nav className="p-2">
            <ul className="hidden md:flex space-x-4 font-medium lg:text-lg sm:text-base">
              <li>
                {" "}
                <a href="#" className="hover:text-red-400 hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-red-400 hover:underline">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-red-400 hover:underline">
                  Occasions
                </a>
              </li>
              <li>
                {" "}
                <a href="#" className=" hover:text-red-400 hover:underline">
                  About
                </a>
              </li>
              <li>
                {" "}
                <a href="#" className=" hover:text-red-400 hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex items-center space-x-4 p-2">
            <Button
              shape="medium"
              leftIcon={<Search className="h-5 w-5" />}
            >
              <span className="sr-only">Search</span>
            </Button>
            <Button
              leftIcon={<ShoppingBag className="h-5 w-5 text-red-500" />}
            >
              <span className="sr-only">Cart</span>
            </Button>
            <Button
              leftIcon={<User className="h-5 w-5 text-red-500" />}
            >
              <span className="sr-only">Login</span>
            </Button>
            <Button
              className="md:hidden bg-red-400 p-2 rounded-full"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              leftIcon={
                mobileMenuOpen ? (
                  <X className="h-5 w-5 text-white" />
                ) : (
                  <Menu className="h-5 w-5 text-white" />
                )
              }
            >
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
      </Container>
    </header>
  );
}

export default Header