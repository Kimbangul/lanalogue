import GlobalStyle from "@/components/common/GlobalStyle";
import ClientProvider from "@/components/common/ClientProvider";
import FooterView from "@/components/layout/footer/FooterView";
import HeaderView from "@/components/layout/header/HeaderView";
import WrapperView from "@/components/layout/wrapper/WrapperView";

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({children}: { children: React.ReactNode
}) {
  return (
    <ClientProvider>
    <html lang="en">
      <body>
        <WrapperView>
        <HeaderView />
        {children}
        <FooterView />
        </WrapperView>
      </body>
    </html>
    </ClientProvider>
  )
}
