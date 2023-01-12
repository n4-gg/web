import { type NextPage } from "next";
import {
  Center,
  Anchor,
  Title,
  Text,
  Container,
  Button,
  Stack,
} from "@mantine/core";
import Image from "next/image";
import { FaDiscord } from "react-icons/fa";
import { useState } from "react";
import { signIn } from "next-auth/react";

const Login: NextPage = () => {
  const [bool, setBool] = useState(false);

  const login = async () => {
    if (bool) return;
    setBool(true);

    try {
      await signIn("discord");
    } catch (error: any) {
      console.error(`Error signing in: ${error.message}`);
    } finally {
      setTimeout(() => setBool(false), 5000);
    }
  };

  return (
    <Center sx={{ minHeight: "100vh" }}>
      <Container my={40}>
        <Stack align="center" mb={16}>
          <Image
            width={48}
            height={48}
            src="/images/white-200.png"
            alt="White Logo"
          />
        </Stack>

        <Title
          align="center"
          sx={(theme) => ({
            fontFamily: `Greycliff CF, ${theme.fontFamily}`,
            fontWeight: 900,
          })}
        >
          Login to the Dashboard
        </Title>

        <Text color="dimmed" size="sm" align="center" mt={5}>
          Lost access to your discord account?{" "}
          <Anchor<"a">
            size="sm"
            target="_blank"
            rel="noreferrer"
            href="https://docs.n4.gg/dashboard/account-recovery"
          >
            Click here
          </Anchor>
        </Text>

        <Button
          mt={30}
          fullWidth
          leftIcon={<FaDiscord size={16} />}
          loading={bool}
          onClick={login}
        >
          Discord
        </Button>
      </Container>
    </Center>
  );
};

export default Login;
