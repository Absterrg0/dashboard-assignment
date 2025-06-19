  
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/dashboard/sidebar"

import { IdleLogout } from "@/components/idle-logout-component";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

            
              <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
            <IdleLogout timeout={10*60*1000} />
            {children}
          </SidebarInset>
        </SidebarProvider>
        </body>
    </html>
  );
}
