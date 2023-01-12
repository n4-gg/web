import { Illustration } from "@/components/500-drawing";
import {
  createStyles,
  Container,
  Title,
  Text,
  Button,
  Group,
} from "@mantine/core";
import { type NextPage } from "next";
import { useRouter } from "next/router";

const useStyles = createStyles((theme) => ({
  root: {
    paddingTop: 120,
    paddingBottom: 120,
    backgroundColor: theme.fn.variant({
      variant: "filled",
      color: theme.primaryColor,
    }).background,
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  inner: {
    position: "relative",
  },

  image: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    zIndex: 0,
    opacity: 0.65,
  },

  content: {
    paddingTop: 220,
    position: "relative",
    zIndex: 1,

    [theme.fn.smallerThan("sm")]: {
      paddingTop: 120,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    textAlign: "center",
    fontWeight: 900,
    fontSize: 38,
    color: theme.white,

    [theme.fn.smallerThan("sm")]: {
      fontSize: 32,
    },
  },

  description: {
    maxWidth: 460,
    margin: "auto",
    marginTop: theme.spacing.xl,
    marginBottom: theme.spacing.xl * 1.5,
    color: theme.colors[theme.primaryColor]![1],
  },
}));

const Custom500: NextPage = () => {
  const { classes } = useStyles();
  const { back } = useRouter();

  return (
    <div className={classes.root}>
      <Container>
        <div className={classes.inner}>
          <Illustration className={classes.image} />

          <div className={classes.content}>
            <Title className={classes.title}>All of our servers are busy</Title>

            <Text size="lg" align="center" className={classes.description}>
              We cannot handle your request right now, please wait for a couple
              of minutes and refresh the page. Our team is already working on
              this issue.
            </Text>

            <Group position="center">
              <Button size="md" variant="white" onClick={() => back()}>
                Go back
              </Button>
            </Group>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Custom500;
