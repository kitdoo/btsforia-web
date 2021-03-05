<template>
  <div class="page-registration-confirmation--container">
    <Container>
      <template #title>
        Подтверждение регистрации
      </template>
      <template #form>
        <RegistrationConfirmationForm/>
      </template>
    </Container>
  </div>
</template>

<script>
import Container from '~/components/auth/TheAuthContainer';
import RegistrationConfirmationForm from '~/components/auth/TheAuthRegistrationConfirmation';

export default {
  layout: 'auth',
  components: {
    Container,
    RegistrationConfirmationForm
  }
}
</script>
