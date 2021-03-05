<template>
  <div class="registration-confirmation-form--container">
    <Form ref="registrationConfirmationForm"
          :rules="formRules"
          :model="formModel">
      <Row type="flex">
        <Col span="24">
          <Form-item class="no-vertical-margin" prop="confirmationCode">
            <Input :mask="'XXX-XXXX'" v-model.trim="formModel.confirmationCode" clearable
                   :placeholder="'Введите код подтверждения'"/>
          </Form-item>
        </Col>
      </Row>

      <Row class="mt50"
           type="flex"
           justify="space-between">
        <Col>
          <FormItem style="margin: 0">
            <Button type="primary"
                    style="width: 130px"
                    size="default"
                    :loading="loading"
                    :disabled="loading"
                    @click="$_submitForm()"
                    @keyup.native.enter="$_submitForm()">
              Далее
            </Button>
          </FormItem>
        </Col>

        <Col>
          <div style="text-align: center" class="mt15">
            <nuxt-link :to="'login'">
              На страницу входа
            </nuxt-link>
          </div>
        </Col>
      </Row>
    </Form>
  </div>
</template>

<script>

export default {
  name: 'registration-confirmation-form',

  data: function () {
    return {
      loading: false,

      formModel: {
        confirmationCode: '',
      },

      formRules: {}
    };
  },

  methods: {
    $_submitForm() {
      this.$refs['registrationConfirmationForm'].validate(async (valid) => {
        if (valid) {
          await this.$_registrationConfirmation();
        }
      });
    },

    $_registrationConfirmation() {

    },

    $_resendCode() {

    },
  },
};
</script>
