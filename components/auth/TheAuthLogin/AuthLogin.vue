<template>
  <div class="Auth-login--login">
    <Form ref="loginForm"
          :rules="formRules"
          :model="formModel"
          autocomplete="on">
      <Row type="flex" :gutter="15">
        <Col span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24" :xxl="24">
          <Form-item prop="email">
            <Input v-model.trim="formModel.email"
                   clearable :disabled="loading"
                   v-lowercase
                   :placeholder="'Электронная почта'"/>
          </Form-item>
        </Col>
      </Row>

      <Row type="flex" :gutter="15">
        <Col span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24" :xxl="24">
          <Form-item prop="password">
            <Input v-model="formModel.password"
                   type="password"
                   password
                   :disabled="loading"
                   @keyup.native.enter="$_submitForm()"
                   :placeholder="'Пароль'"/>
          </Form-item>
        </Col>
      </Row>

      <Row>
        <Col>
          <FormItem prop="checked">
            <Checkbox v-model="formModel.remember">
              Запомнить меня
            </Checkbox>
          </FormItem>
        </Col>
      </Row>

      <Row type="flex"
           justify="space-between"
           class="mb20">
        <Col span="12">
          <Button type="primary"
                  size="default"
                  :loading="loading"
                  :disabled="loading"
                  @click="$_submitForm()"
                  @keyup.native.enter="$_submitForm()">Войти
          </Button>
        </Col>

        <Col span="12" class="mt10 d-flex justify-end">
          <!--                    <nuxt-link :to="'registration'">-->
          <!--                        Регистрация-->
          <!--                    </nuxt-link>&nbsp;|&nbsp;-->
          <nuxt-link :to="'forgot-password'">
            Забыли пароль?
          </nuxt-link>
        </Col>
      </Row>
    </Form>
  </div>
</template>

<script>
import {mixinEmailValidator} from '~/lib/mixins/validators';

export default {
  name: 'auth-login',
  mixins: [mixinEmailValidator],

  data: function () {
    return {
      loading: false,
      formModel: {
        email: '',
        password: '',
        remember: true,
      },

      formRules: {
        password: [
          {required: true, message: 'Пароль должен быть указан', trigger: 'change'},
        ],

        email: [
          {required: true, validator: this.emailValidator, trigger: 'change'},
        ],
      },
    };
  },

  methods: {
    $_submitForm() {
      this.$refs['loginForm'].validate(async (valid) => {
        if (valid) {
          await this.$_login();
        }
      });
    },

    $_login() {

    },
  },
};
</script>
