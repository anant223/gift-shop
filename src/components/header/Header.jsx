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
    <header className="sticky top-0 z-20 bg-[0_0%_100%] border-b bg-white">
      <Container>
        <div className="py-4 flex items-center justify-between text-gray-600">
          <Logo />
          <nav className="hidden md:flex space-x-6 font-normal">
            <a
              href="#"
              className="hover:text-red-400"
            >
              Home
            </a>
            <a
              href="#"
              className=" hover:text-red-400"
            >
              Shop
            </a>
            <a
              href="#"
              className=" hover:text-red-400"
            >
              Occasions
            </a>
            <a
              href="#"
              className=" hover:text-red-400"
            >
              About
            </a>
            <a
              href="#"
              className=" hover:text-red-400"

            >
              Contact
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            <Button
              shape="medium"
              className="mr-2"
              leftIcon={<Search className="h-5 w-5" />}
            >
              <span className="sr-only">Search</span>
            </Button>

            <Button
              className="mr-2"
              leftIcon={<ShoppingBag className="h-5 w-5 text-red-500" />}
            >
              <span className="sr-only">Cart</span>
            </Button>
            <Button
              className="mr-2"
              leftIcon={<User className="h-5 w-5 text-red-500" />}
            >
              <span className="sr-only">Login</span>
            </Button>
            <Button
              className="md:hidden bg-red-400 p-2 rounded-full"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              leftIcon={mobileMenuOpen ? (
                <X className="h-5 w-5 text-white" />
              ) : (
                <Menu className="h-5 w-5 text-white" />
              )}
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