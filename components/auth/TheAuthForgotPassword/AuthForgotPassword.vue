<template>
  <div class="Auth-forgotPassword--forgotPassword">
    <div class="mb30">
      <p class="tx-secondary">
        Для восстановления пароля введите адрес электронной почты или номер телефона указанный в вашем профиле.
        На указанный адрес/номер телефон будет отправлен код подтверждения.
      </p>
    </div>
    <Form ref="forgotPasswordForm"
          :rules="formRules"
          :model="formModel">
      <Row type="flex" justify="center">
        <Col span="24">
          <Form-item prop="emailOrPhone" class="no-vertical-margin">
            <Input v-model.trim="formModel.emailOrPhone"
                   clearable
                   v-lowercase
                   :disabled="loading"
                   :placeholder="'E-mail или телефон'"/>
          </Form-item>
        </Col>
      </Row>

      <Row class="mt40"
           type="flex"
           justify="center"
           align="middle">

        <Col span="12">
          <Button type="primary" size="default"
                  :disabled="loading"
                  :loading="loading"
                  @click="$_submitForm()"
                  @keyup.native.enter="$_submitForm()">
            Далее
          </Button>
        </Col>

        <Col span="12" class="d-flex justify-end">
          <div style="text-align: center;">
            <nuxt-link :to="'login'">На страницу входа</nuxt-link>
          </div>
        </Col>
      </Row>
    </Form>
  </div>
</template>

<script>
import {mixinEmailOrPhoneValidator} from '~/lib/mixins/validators';

export default {
  name: 'auth-forgot-password',
  mixins: [mixinEmailOrPhoneValidator],

  data: function () {
    return {
      loading: false,

      formModel: {
        emailOrPhone: '',
      },

      formRules: {
        emailOrPhone: [
          {required: true, validator: this.emailOrPhoneValidator, trigger: 'change'},
        ],
      },
    };
  },

  methods: {
    $_submitForm() {
      this.$refs['forgotPasswordForm'].validate((valid) => {
        if (valid) {
          this.$_forgotPassword();
        }
      });
    },

    $_forgotPassword() {

    },
  },
};
</script>

