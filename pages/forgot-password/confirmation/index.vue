<template>
  <Container>
    <template #title>
      Смена пароля
    </template>
    <template #form>
      <PasswordForm/>
    </template>
  </Container>
</template>

<script>
import Container from '~/components/auth/TheAuthContainer'
import PasswordForm from '~/components/auth/TheAuthForgotPasswordConfirmation'

export default {
  layout: 'auth',

  components: {
    Container,
    PasswordForm
  }
}
</script>
