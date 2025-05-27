import "@/styles/globals.css";
import { lexend } from "@/lib/fonts";
import { Navbar } from "@/components/layouts/navbar";
import { LayoutProvider } from "@/contexts/layout-context";
import { Footer } from "@/components/layouts/footer/footer";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${lexend.className}  antialiased`}>
				<LayoutProvider>
					<header>
						<Navbar />
					</header>

					{children}
					<Footer />
				</LayoutProvider>
			</body>
		</html>
	);
}
