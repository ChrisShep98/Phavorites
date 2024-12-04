import type { Metadata } from "next";
import { AuthProvder } from "./providers/SessionProvider";
import "./globals.css";
import { Session } from "next-auth";
import { ThemeProvider } from "./providers/ThemeProvider";
import { SongContextProvider } from "./providers/SongContextProvider";
import { ModalContextProvider } from "./providers/ModalContextProvider";
import Nav from "./components/Nav";

export const metadata: Metadata = {
  title: "Phavorites",
  description: "Generated by create next app",
  icons: {
    icon: [
      {
        url: "/images/Red_circle.png",
      },
    ],
  },
};

export default async function RootLayout({
  children,
  session,
}: {
  children: React.ReactNode;
  session: Session;
}) {
  return (
    <AuthProvder session={session}>
      <html lang="en">
        <body>
          <ThemeProvider>
            <SongContextProvider>
              <ModalContextProvider>
                <Nav>{children}</Nav>
              </ModalContextProvider>
            </SongContextProvider>
          </ThemeProvider>
        </body>
      </html>
    </AuthProvder>
  );
}
