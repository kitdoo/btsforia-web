<template>
  <div class="registration-form--container">
    <Form ref="registrationForm"
          :rules="formRules"
          :model="formModel">
      <Row>
        <Col span="24">
          <FormItem prop="last_name">
            <Input :placeholder="'Фамилия'"
                   v-model.trim="formModel.last_name" v-capitalize/>
          </FormItem>
        </Col>
      </Row>

      <Row>
        <Col span="24">
          <FormItem prop="name">
            <Input :placeholder="'Имя'"
                   v-model.trim="formModel.name" v-capitalize/>
          </FormItem>
        </Col>
      </Row>

      <Row>
        <Col span="24">
          <FormItem prop="patronymic">
            <Input :placeholder="'Отчество'"
                   v-model.trim="formModel.patronymic" v-capitalize/>
          </FormItem>
        </Col>
      </Row>

      <Row :gutter="20">
        <Col :xs="24" :sm="24" :md="24" :lg="12" :xl="12" :xxl="12">
          <FormItem prop="email">
            <Input :placeholder="'Email'"
                   v-model.trim="formModel.email" v-lowercase/>
          </FormItem>
        </Col>

        <Col :xs="24" :sm="24" :md="24" :lg="12" :xl="12" :xxl="12">
          <FormItem prop="phone">
            <Input type="text" v-model.trim="formModel.phone"
                   :placeholder="'Телефон'"/>
          </FormItem>
        </Col>
      </Row>

      <Row :gutter="20">
        <Col :xs="24" :sm="24" :md="24" :lg="12" :xl="12" :xxl="12">
          <Form-item prop="password">
            <Input v-model="formModel.password"
                   :placeholder="'Пароль'"
                   type="password"
                   password
                   :disabled="loading"/>
          </Form-item>
        </Col>

        <Col :xs="24" :sm="24" :md="24" :lg="12" :xl="12" :xxl="12">
          <Form-item prop="password2">
            <Input v-model="formModel.password2"
                   :placeholder="'Повторите пароль'"
                   :disabled="loading"
                   type="password" password/>
          </Form-item>
        </Col>
      </Row>

      <Row type="flex" justify="center" class="mt10">
        <Col span="24">
          <div class="tx-gray">
            Нажимая на кнопку «Зарегистрироваться», вы соглашаетесь с
            <a>Условиями использования</a>
            и
            <a>Обработкой персональных данных</a>
          </div>
        </Col>
      </Row>

      <Row type="flex"
           class="mt30"
           justify="space-between">
        <Col>
          <Button type="primary"
                  size="default"
                  :loading="loading"
                  :disabled="loading"
                  @click="$_submitForm()">Зарегистрироваться
          </Button>
        </Col>

        <Col>
          <div class="mt10">
            <nuxt-link :to="'login'">На страницу входа</nuxt-link>
          </div>
        </Col>
      </Row>
    </Form>
  </div>
</template>

<script>
import {mixinEmailValidator, mixinPasswordValidator, mixinPhoneValidator,} from '~/lib/mixins/validators';

export default {
  name: 'registration-form',

  mixins: [
    mixinPhoneValidator,
    mixinEmailValidator,
    mixinPasswordValidator
  ],

  data: function () {
    const confirmPasswords = (rule, value, callback) => {
      let errors = [];
      if (this.formModel.password !== value) {
        errors.push('Пароли не совпадают');
      }
      callback(errors);
    };

    return {
      loading: false,

      formModel: {
        email: '',
        phone: '',
        password: '',
        password2: '',
        last_name: '',
        patronymic: '',
        name: ''
      },

      formRules: {
        email: [
          {required: true, validator: this.emailValidator, trigger: 'change'},
        ],

        phone: [
          {required: true, validator: this.phoneValidator, trigger: 'change'},
        ],

        name: [
          {
            required: true,
            message: 'Имя должно быть указано',
            trigger: 'change'
          },
        ],

        last_name: [
          {
            required: true,
            message: 'Фамилия должна быть указана',
            trigger: 'change'
          },
        ],

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
          {required: true, validator: confirmPasswords, trigger: 'change'},
        ],
      },
    };
  },

  methods: {
    $_submitForm() {
      this.$refs['registrationForm'].validate(async (valid) => {
        if (valid) {
          await this.$_registration();
        }
      });
    },

    $_registration() {

    },
  },
};
</script>

<style lang="less">
.registration-form--container {
  height: auto;
  width: 100%;

  .ivu-divider-horizontal {
    margin: 20px 0;
  }
}
</style>
