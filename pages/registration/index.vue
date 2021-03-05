<template>
  <Container>
    <template #title>
      Регистрация
    </template>
    <template #form>
      <RegistrationForm/>
    </template>
  </Container>
</template>

<script>
import Container from '~/components/auth/TheAuthContainer';
import RegistrationForm from '~/components/auth/TheAuthRegistration'

export default {
  layout: 'auth',
  components: {
    Container,
    RegistrationForm
  },
}
</script>
