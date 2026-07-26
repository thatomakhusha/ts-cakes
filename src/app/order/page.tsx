import AnnouncementBar from "@/components/layout/Announcementbar";
import Navbar from "@/components/layout/Navbar";
import Container from "@/components/layout/Container";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/order/Hero";
import OrderProcess from "@/components/order/OrderingProcess";
import AllergyNotice from "@/components/order/AllergyNotice";
import QuoteForm from "@/components/order/QuoteForm";

export default function OrderPage() {
    return (
        <>
            <AnnouncementBar />
            <Navbar />

            <main>
                <Container>
                    <Hero/>
                    <OrderProcess/>
                    <AllergyNotice/>
                    <QuoteForm />
                </Container>
            </main>

            <Footer />
        </>
    );
}