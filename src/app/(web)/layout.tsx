import { Sidebar, TopMenu } from "@/components";
import Footer from "@/components/ui/footer/Footer";

export default function WebLayout({ children }: { children: React.ReactNode;}) {
    return (
        <main className="min-h-screen flex flex-col justify-between">

            <TopMenu />
            <Sidebar />
            {children}
            <Footer/>
        </main>
    );
}