import { Button, Flex, Group, Navbar, Text, rem, useMantineTheme } from "@mantine/core"
import React from "react"
import { useNavigate } from "react-router"
import iconImgSrc from "../../../public/icons/account.svg"
import user from "../../../public/images/user-avatar-bot.svg"
import UserAvatar from "../UserAvatar"
import useSideMenuStyles from "./SideMenu.styles"
import FriendsSideMenuScreen from "./SideMenuScreens/FriendsSideMenuScreen"

const SideMenu = ({ closeMenu }): JSX.Element => {
  const { classes } = useSideMenuStyles()
  const theme = useMantineTheme()
  const navigate = useNavigate()

  return (
    <Navbar className={classes.container} width={{ sm: 400 }}>
      <Navbar.Section className={classes.wrapper} grow>
        <div className={classes.main}>
          <Text
            p={"lg"}
            size={"xl"}
            weight={700}
            mb={6}
            color={theme.colors.gray[0]}
            style={{
              textShadow: "0 0 10px #00000045",
              lineHeight: "initial"
            }}
          >
            COJOURNEY
          </Text>

          <Flex direction={"column"} justify={"space-between"}>
            <FriendsSideMenuScreen />
            <Flex
              pos={"absolute"}
              bottom={"0"}
              w={"100%"}
              p={"xl"}
              direction={"row"}
              gap={"xl"}
              align={"center"}
              justify="space-between"
              style={{
                borderTop: "0.0625rem solid #2A2A2A"
              }}
            >
              <Group>
                <UserAvatar src={user} online={true} />
                <div>
                  <Text color={theme.white} weight={500}>
                    metadude (me)
                  </Text>
                  <Text size="xs" color="dimmed">
                    Online
                  </Text>
                </div>
              </Group>
              <Group
                style={{
                  textAlign: "center"
                }}
              >
                <Button
                  size={"sm"}
                  bg={"#292929"}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    backgroundColor: "#292929",
                    paddingLeft: rem(20),
                    color: "#757474"
                  }}
                  onClick={() => { closeMenu(); navigate("/profile") }}
                >
                  <Text mr={"md"}>My Account</Text>
                  <img src={iconImgSrc} alt="Icon" width={"20px"} height={"20px"} />
                </Button>
              </Group>
            </Flex>
          </Flex>
        </div>
      </Navbar.Section>
    </Navbar>
  )
}

export default SideMenu