import GlobalStyle from "@/components/common/GlobalStyle";
import ClientProvider from "@/components/common/ClientProvider";
import FooterView from "@/components/layout/footer/FooterView";
import HeaderContainer from "@/components/layout/header/HeaderContainer";
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
        <HeaderContainer />
        {children}
        <FooterView />
        </WrapperView>
      </body>
    </html>
    </ClientProvider>
  )
}
