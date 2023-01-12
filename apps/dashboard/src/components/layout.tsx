import { type ReactNode, useState } from "react";
import {
  AppShell,
  Container,
  Center,
  useMantineTheme,
  Loader,
} from "@mantine/core";
import { Header } from "./header";
import { Head } from "./head";
import { useSession } from "next-auth/react";
import { Navbar } from "./navbar";

export function Layout(props: { children: ReactNode }) {
  const { status } = useSession({ required: true });

  const { colorScheme, colors } = useMantineTheme();
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Head />

      {status === "loading" ? (
        <Center sx={{ minHeight: "100vh" }}>
          <Loader />
        </Center>
      ) : (
        <AppShell
          styles={{
            main: {
              background:
                colorScheme === "dark" ? colors.dark[8] : colors.gray[0],
            },
          }}
          navbarOffsetBreakpoint="sm"
          navbar={<Navbar opened={opened} />}
          header={<Header opened={opened} setOpened={setOpened} />}
        >
          <Container>{props.children}</Container>
        </AppShell>
      )}
    </>
  );
}
