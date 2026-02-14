import { Bounce, ToastContainer } from "react-toastify";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import "./globals.css";
import ContactForm from "./components/ContactForm/ContactForm";
import SlideForm from "./components/SlideForm/SlideForm";

export const metadata = {
  title: "Raiyan H. | Full-Stack Web Developer Portfolio",
  description: "Welcome to the portfolio of Raiyan H., a full-stack web developer specializing in modern web applications and creative solutions.",
  icons: {
    icon: "/images/icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Bounce}
          />
        <Navbar />
        {children}
        <Footer />
        <SlideForm />
      </body>
    </html>
  );
}
