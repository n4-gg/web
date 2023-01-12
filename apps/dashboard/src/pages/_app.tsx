import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { MantineProvider } from "@mantine/core";
import { Analytics } from "@vercel/analytics/react";
import { api } from "@/utils/api";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session} refetchOnWindowFocus={false}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: "dark",
        }}
      >
        <Component {...pageProps} />

        <Analytics />
      </MantineProvider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
