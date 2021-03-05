<template>
  <div class="Auth-forgotPasswordConfirmation--forgotPasswordConfirmation">
    <Form ref="forgotPasswordConfirmationForm" :rules="formRules" :model="formModel">
      <Row type="flex">
        <Col span="24" class="mb10">
          <Form-item class="no-vertical-margin" prop="confirmationCode">
            <Input v-model.trim="formModel.confirmationCode" clearable
                   :placeholder="'Код подтверждения'"/>
          </Form-item>
        </Col>
      </Row>
      <div v-if="formModel.confirmationCode.length === 7">
        <Row>
          <Col span="24" class="mb5">
            <Form-item prop="password" class="no-vertical-margin">
              <Input v-model="formModel.password" type="password" password
                     :placeholder="'Новый пароль'"/>
            </Form-item>
          </Col>
        </Row>
        <Row>
          <Col span="24">
            <Form-item prop="password2" class="no-vertical-margin">
              <Input v-model="formModel.password2" type="password" password
                     :placeholder="'Подтведите пароль'"/>
            </Form-item>
          </Col>
        </Row>
      </div>

      <Row class="mt40" type="flex" justify="center" align="middle">
        <Col span="12">
          <Button type="primary" size="default"
                  @click="$_submitForm()"
                  @keyup.native.enter="$_submitForm()">
            Далее
          </Button>
        </Col>
        <Col span="12" class="d-flex justify-end">
          <div style="text-align: center;">
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
import {mixinPasswordValidator} from '~/lib/mixins/validators';

export default {
  name: 'auth-forgot-password-confirmation',
  mixins: [
    mixinPasswordValidator
  ],
  data: function () {
    return {
      formModel: {
        password: '',
        password2: '',
        confirmationCode: ''
      },

      formRules: {
        password: [
          {
            required: true,
            message: 'Пароль должен быть указан',
            trigger: 'change'
          },
          {validator: this.passwordValidator, trigger: 'change'}
        ],

        password2: [
          {
            required: true,
            message: 'Повторите пароль еще раз',
            trigger: 'change'
          },
          {
            validator: (rule, value, callback) => {
              let errors = [];
              if (this.formModel.password !== value) {
                errors.push('Пароли не совпадают');
              }
              callback(errors);
            }, trigger: 'change',
          },
        ],
      },
    };
  },

  methods: {
    async $_submitForm() {
      this.$refs['forgotPasswordConfirmationForm'].validate((valid) => {
        if (valid) {
          this.$_passwordConfirmation();
        }
      });
    },

    $_passwordConfirmation() {

    },
  },
};
</script>
