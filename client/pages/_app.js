import '../styles/globals.css';
import Head from "next/head";
import Script from "next/script";
import { AuthProvider } from "../context/AuthContext";
import "bootstrap/dist/css/bootstrap.css";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

toast.configure();

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
