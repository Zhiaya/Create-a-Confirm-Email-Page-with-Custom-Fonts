
import "./globals.css";
import NavbarComponent from "@/components/navbar/NavbarComponent";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="h-screen flex flex-col">
				<header>
					<NavbarComponent />
				</header>
				{children}
			</body>
		</html>
	);
}
