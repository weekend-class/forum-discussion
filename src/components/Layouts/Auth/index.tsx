'use client'
import {
  BackgroundImage,
  Container,
  Grid,
  MediaQuery,
  Stack,
  Text,
} from '@mantine/core'
import Image from 'next/image'
import type { ReactNode } from 'react'

export function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <Container fluid p={0}>
      <Grid gutter={0}>
        <Grid.Col span={12} sm={6} md={5}>
          <Container size={400}>{children}</Container>
        </Grid.Col>
        <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
          <Grid.Col sm={6} md={7}>
            <BackgroundImage
              src="https://images.unsplash.com/photo-1677618031630-768ddc4f4fad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
              w="100%"
              h="100vh"
              sx={(theme) => ({
                width: '100%',
                height: '100vh',
                borderRadius: `${theme.radius.xl}px 0 0 ${theme.radius.xl}px`,
              })}
            >
              <Stack align="center" pt="5vh">
                <Image src="/logo.svg" width={186.29} height={60} alt="logo" />
                <Text size="lg" color="white">
                  Lorem ipsum dolor sit amet.
                </Text>
              </Stack>
            </BackgroundImage>
          </Grid.Col>
        </MediaQuery>
      </Grid>
    </Container>
  )
}

export default AuthLayout
