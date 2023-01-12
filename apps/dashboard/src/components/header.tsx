import {
  Text,
  Burger,
  MediaQuery,
  useMantineTheme,
  Header as MantineHeader,
} from "@mantine/core";
import { type Dispatch, type SetStateAction } from "react";
import Image from "next/image";

export function Header(props: {
  setOpened: Dispatch<SetStateAction<boolean>>;
  opened: boolean;
}) {
  const { colors } = useMantineTheme();

  return (
    <MantineHeader height={60} p="md">
      <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
        <Image
          width={32}
          height={32}
          src="/images/white-200.png"
          alt="White Logo"
        />
        <Text fz="xl" fw={500}>
          Dashboard
        </Text>

        <MediaQuery largerThan="sm" styles={{ display: "none" }}>
          <Burger
            onClick={() => props.setOpened((o) => !o)}
            color={colors.gray[6]}
            opened={props.opened}
            size="sm"
            mr="xl"
          />
        </MediaQuery>
      </div>
    </MantineHeader>
  );
}
