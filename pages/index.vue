<template>
  <div class="container">
    <div class="main-page">
      <h1 class="page-title">
        {{ $t('main-page.title') }}
      </h1>

      <Row :gutter="20" type="flex" justify="space-between">
        <Col :xs="24" :sm="12" :md="10" :lg="10" class="mb15">
          <p>
            {{ $t('main-page.text.greeting') }}
          </p>
          <p>
            {{ $t('main-page.text.info') }}
          </p>
          <p>
            {{ $t('main-page.text.invite') }}
          </p>
          <p>
            {{ $t('main-page.text.purple') }}
          </p>
        </Col>
        <Col :xs="24" :sm="12" :md="12" :lg="12">
          <RadioGroup v-model="typeOfBTS" class="radio" type="button" @on-change="onChangeType">
            <Radio :label="$t('main-page.radio.purple')"></Radio>
            <Radio :label="$t('main-page.radio.soft')"></Radio>
            <Radio :label="$t('main-page.radio.hard')"></Radio>
            <Radio :label="$t('main-page.radio.meme')"></Radio>
          </RadioGroup>

          <div>
            <img src="~/assets/images/bg-soft.jpg" class="type" alt="" v-if="typeOfBTS==='Soft'">
            <img src="~/assets/images/bg-hard.jpg" class="type" alt="" v-if="typeOfBTS==='Hard'">
            <img src="~/assets/images/bg-meme.jpg" class="type" alt="" v-if="typeOfBTS==='Meme'">
            <img src="~/assets/images/bg-purple.jpg" class="type" alt="" v-if="typeOfBTS==='Purple'">
          </div>
        </Col>
      </Row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      typeOfBTS: "Purple",

    }
  },
  methods: {
    onChangeType(value) {
      this.typeOfBTS = value;
      console.log(value);
    }
  },
}
</script>

<style lang="less">
@import '~assets/css/main.less';

.main-page {
  .radio {
    margin-bottom: 20px;
  }

  .type {
    width: 100%;

  }

  p {
    padding-top: 15px;
    @media @mobile {
      padding-top: 5px;
    }
  }
}

</style>

<i18n src="./MainPageLang.json"/>
