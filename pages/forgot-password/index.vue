<template>
  <Container>
    <template #title>
      Восстановление пароля
    </template>
    <template #form>
      <ForgotPasswordForm/>
    </template>
  </Container>
</template>

<script>
import ForgotPasswordForm from '~/components/auth/TheAuthForgotPassword'
import Container from '~/components/auth/TheAuthContainer'

export default {
  layout: 'auth',
  components: {
    Container,
    ForgotPasswordForm
  }
}
</script>
