<template>
  <Container>
    <template #title>
      Вход
    </template>
    <template #form>
      <LoginForm/>
    </template>
  </Container>
</template>

<script>
import LoginForm from '~/components/auth/TheAuthLogin';
import Container from '~/components/auth/TheAuthContainer';

export default {
  layout: 'auth',

  components: {
    Container,
    LoginForm
  }
}
</script>
