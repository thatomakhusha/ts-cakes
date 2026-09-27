import Link from "next/link";
import Image from "next/image";

const DashboardHeader = () => {
    return ( 
        <header className="bg-cream">
            <Link
                    href="/"
                >
                    <Image
                        src="/images/logo/Bakers Website logo-.png"
                        alt="T's Cakes logo"
                        width={100}
                        height={100}
                        className="h-auto w-20"
                    />
                </Link>
        </header>
     );
}
 
export default DashboardHeader;