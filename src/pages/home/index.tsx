import Image from 'next/legacy/image'
import { NextSeo } from 'next-seo'
import { Heading, Text } from '@ignite-ui/react'

import { ClaimUsernameForm } from './components/ClaimUsernameForm'
import { Hero, HomeContainer, Preview } from './styles'

import previewImg from '@/assets/app-preview.png'

export default function Home() {
  return (
    <>
      <NextSeo
        title="Descomplique sua agenda | Ignite Call"
        description="Conecte seu calendário e permita que as pessoas marquem agendamentos no seu tempo livre."
      />

      <HomeContainer>
        <Hero>
          <Heading as="h1" size="4xl">
            Agendamento descomplicado
          </Heading>
          <Text size="xl">
            Conecte seu calendário e permita que as pessoas marquem agendamentos
            no seu tempo livre.
          </Text>

          <ClaimUsernameForm />
        </Hero>

        <Preview>
          <Image
            src={previewImg}
            alt="Calendário simbolizando aplicação em funcionamento"
            height={400}
            quality={100}
            priority
          />
        </Preview>
      </HomeContainer>
    </>
  )
}
