'use client'
import {
  Box,
  Button,
  Center,
  Divider,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Title,
} from '@mantine/core'
import { IconKey, IconMail } from '@tabler/icons-react'
import Image from 'next/image'

function Auth() {
  return (
    <Stack justify="center" h="100vh" spacing="xl">
      <Center>
        <Image src="/logo.svg" width={186.29} height={60} alt="logo" />
      </Center>
      <Box>
        <Title align="center">Welcome back</Title>
        <Text align="center">Please enter your details.</Text>
      </Box>
      <form
        style={{
          width: '100%',
        }}
      >
        <Stack>
          <TextInput
            placeholder="example@mail.com"
            icon={<IconMail />}
            withAsterisk
          />
          <PasswordInput
            placeholder="••••••••"
            icon={<IconKey />}
            withAsterisk
          />
          <Button type="submit">Submit</Button>
        </Stack>
      </form>
      <Divider orientation="horizontal" label="or" labelPosition="center" />
      <Button variant="default">Sign up</Button>
    </Stack>
  )
}

export default Auth
