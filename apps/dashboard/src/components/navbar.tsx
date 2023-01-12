import { ScrollArea, Navbar, createStyles } from "@mantine/core";
import { useRouter } from "next/router";
import { FaDatabase } from "react-icons/fa";

const useStyles = createStyles((theme, _params, getRef) => {
  const icon = getRef("icon");
  return {
    header: {
      paddingBottom: theme.spacing.md,
      marginBottom: theme.spacing.md * 1.5,
      borderBottom: `1px solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[4]
          : theme.colors.gray[2]
      }`,
    },

    footer: {
      paddingTop: theme.spacing.md,
      marginTop: theme.spacing.md,
      borderTop: `1px solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[4]
          : theme.colors.gray[2]
      }`,
    },

    link: {
      ...theme.fn.focusStyles(),
      display: "flex",
      alignItems: "center",
      textDecoration: "none",
      fontSize: theme.fontSizes.sm,
      color:
        theme.colorScheme === "dark"
          ? theme.colors.dark[1]
          : theme.colors.gray[7],
      padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
      borderRadius: theme.radius.sm,
      fontWeight: 500,

      "&:hover": {
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[6]
            : theme.colors.gray[0],
        color: theme.colorScheme === "dark" ? theme.white : theme.black,

        [`& .${icon}`]: {
          color: theme.colorScheme === "dark" ? theme.white : theme.black,
        },
      },
    },

    linkIcon: {
      ref: icon,
      color:
        theme.colorScheme === "dark"
          ? theme.colors.dark[2]
          : theme.colors.gray[6],
      marginRight: theme.spacing.sm,
    },

    linkActive: {
      "&, &:hover": {
        backgroundColor: theme.fn.variant({
          variant: "light",
          color: theme.primaryColor,
        }).background,
        color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
          .color,
        [`& .${icon}`]: {
          color: theme.fn.variant({
            variant: "light",
            color: theme.primaryColor,
          }).color,
        },
      },
    },
  };
});

const data = [
  { href: "", label: "Notifications", icon: FaDatabase },
  { href: "", label: "Billing", icon: FaDatabase },
  { href: "", label: "Security", icon: FaDatabase },
  { href: "", label: "SSH Keys", icon: FaDatabase },
  { href: "", label: "Databases", icon: FaDatabase },
  { href: "", label: "Authentication", icon: FaDatabase },
  { href: "", label: "Other Settings", icon: FaDatabase },
];

export function CustomNavbar(props: { opened: boolean }) {
  const { classes, cx } = useStyles();
  const { pathname } = useRouter();

  const links = data.map((item, index) => (
    <a
      className={cx(classes.link, {
        [classes.linkActive]: item.href === pathname,
      })}
      href={item.href}
      key={index}
    >
      <item.icon className={classes.linkIcon} />
      <span>{item.label}</span>
    </a>
  ));

  return (
    <Navbar
      p="md"
      width={{ sm: 300 }}
      hiddenBreakpoint="sm"
      hidden={!props.opened}
    >
      <Navbar.Section>First section</Navbar.Section>

      {/* <Navbar.Section
        component={ScrollArea}
        grow
        mt="md"
        mx="-xs"
        px="xs"
      >
        Grow section
      </Navbar.Section> */}

      <Navbar.Section grow>
        {/* <Group className={classes.header} position="apart">
          <MantineLogo size={28} />
          <Code sx={{ fontWeight: 700 }}>v3.1.2</Code>
        </Group> */}
        {links}
      </Navbar.Section>

      <Navbar.Section>Last section</Navbar.Section>
    </Navbar>
  );
}
