import React from "react"

import { useNavigate } from "react-router-dom"
import {
  Container,
  Flex,
  Grid,
  Group,
  Input,
  Paper,
  Select,
  Text,
  Button,
  useMantineTheme
} from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import { useSupabaseClient } from "@supabase/auth-helpers-react"
import { type Database } from "../../../../types/database.types"
import useRoomStyles from "../Room/useRoomStyles"
import ProfileHeader from "../../../components/ProfileHeader"
import UserAvatar from "../../../components/UserAvatar"
import userIcon from "../../../../public/images/user-avatar-robot.svg"
import useGlobalStore from "../../../store/useGlobalStore"

export default function Profile () {
  const navigate = useNavigate()
  const isMobile = useMediaQuery("(max-width: 900px)")
  const supabase = useSupabaseClient<Database>()
  const { classes: roomClasses } = useRoomStyles()
  const theme = useMantineTheme()
  const { clearState } = useGlobalStore()

  const signOut = async () => {
    await supabase.auth.signOut()
    clearState()
    navigate("/")
  }

  return (
    <div>
      <div className={roomClasses.headerContainer}>
        <ProfileHeader title={"My Account"} />
      </div>
      <div
        className={roomClasses.messagesContainer}
        style={{
          alignItems: "center",
          display: "flex"
        }}
      >
        <Paper
          shadow="xs"
          radius="lg"
          p="xl"
          w={"100%"}
          mx={isMobile ? "0" : "8xl"}
        >
          <Container maw={"100%"} p={"xxl"} style={{}}>
            <UserAvatar src={userIcon} online={true} size="lg" />

            <Text
              align="center"
              size="xl"
              color={theme.colors.gray[4]}
              mt={"xl"}
              weight={"500"}
            >
              metadude
            </Text>

            <Flex direction="column" gap={16}>
              <Input.Wrapper style={{ color: "white" }}>
                <label>Location</label>
                <Input
                  placeholder="San Francisco, CA"
                  // p={"sm"}
                  styles={{
                    input: {
                      padding: "1.5rem",
                      border: "1px solid #232627",
                      borderRadius: "0.8rem",
                      backgroundColor: "#141414",
                      color: "white"
                    }
                  }}
                />
              </Input.Wrapper>
              <Grid gutter={"xs"}>
                <Grid.Col span={6}>
                  <Input.Wrapper style={{ color: theme.white }}>
                    <label>Age</label>
                    <Input
                      placeholder="Your Age"
                      value={26}
                      type="Number"
                      styles={{
                        input: {
                          border: "none",
                          backgroundColor: "#232627",
                          padding: "1.5rem 1rem",
                          color: "white"
                        }
                      }}
                      style={{ marginRight: "1rem" }}
                    />
                  </Input.Wrapper>
                </Grid.Col>
                <Grid.Col span={6}>
                  <Paper bg={"transparent"} style={{ color: "white" }}>
                    <label>Pronouns</label>
                    <Select
                      placeholder="He/Him"
                      styles={{
                        input: {
                          border: "none",
                          backgroundColor: "#232627",
                          padding: "1.5rem 1rem",
                          color: "white"
                        }
                      }}
                      data={[
                        { value: "He/Him", label: "He/Him" },
                        { value: "She/Her", label: "She/Her" }
                      ]}
                    />
                  </Paper>
                </Grid.Col>
              </Grid>
            </Flex>
          </Container>
          <Group
            mb={"lg"}
            mt={"4xl"}
            style={{
              gap: theme.spacing.xs
            }}
          >
            {/* <Button fullWidth variant="transparent" size="md">
              <Text color={theme.white}>Subscription Settings</Text>
            </Button> */}
            <Button fullWidth variant="transparent" size="md" onClick={signOut}>
              <Text color={theme.colors.red[8]}>Logout</Text>
            </Button>
          </Group>
        </Paper>
      </div>
    </div>
  )
}
