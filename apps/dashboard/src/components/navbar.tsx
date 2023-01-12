import { ScrollArea, Navbar as MantineNavbar } from "@mantine/core";

export function Navbar(props: { opened: boolean }) {
  return (
    <MantineNavbar
      p="md"
      hidden={!props.opened}
      width={{ base: 300 }}
      hiddenBreakpoint="sm"
    >
      <MantineNavbar.Section>First section</MantineNavbar.Section>

      <MantineNavbar.Section
        component={ScrollArea}
        grow
        mt="md"
        mx="-xs"
        px="xs"
      >
        Grow section
      </MantineNavbar.Section>

      <MantineNavbar.Section>Last section</MantineNavbar.Section>
    </MantineNavbar>
  );
}
