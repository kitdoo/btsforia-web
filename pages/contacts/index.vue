<template>
  <div class="container">
    <div class="contacts-page">
      <Row :gutter="20">
        <Col :xs="24" :sm="24" :md="10" :lg="10" class="mb15">
          <h1 class="page-title">
            {{ $t('contacts-page.title-requisite') }}
          </h1>
          <p class="page-sub-title">
            {{ $t('contacts-page.description-requisite') }}
          </p>
          <p>
            {{ $t('contacts-page.requisite.card-number') }}
          </p>
          <p>
            {{ $t('contacts-page.requisite.card-expiry-date') }}
          </p>

          <Alert type="error">
            {{ $t('contacts-page.requisite.warning-title') }}
            <div>
              {{ $t('contacts-page.requisite.warning-text') }}
            </div>
          </Alert>
        </Col>
        <Col :xs="24" :sm="24" :md="12" :lg="12" class="mb15">
          <h1 class="page-title">
            {{ $t('contacts-page.title-contacts') }}
          </h1>
          <p class="page-sub-title">
            {{ $t('contacts-page.description-contacts') }}
          </p>
          <Row :gutter="20" type="flex" justify="start">
            <Col :xs="24" :sm="12" :md="10" :lg="8">
              <h4>{{ $t('contacts-page.fanbase.title') }}</h4>
              <ul>
                <li>
                  <!--              <font-awesome-icon class="contacts-icons" fa icon="telegram-plane"/>-->
                  <i class="fab fa-twitter"></i>
                  <a href="https://t.me/BTSforia" target="_blank"> {{ $t('contacts-page.fanbase.links.telegram') }}</a>
                </li>
                <li>
                  <!--              <font-awesome-icon class="contacts-icons" icon="instagram"/>-->
                  <a href="https://www.instagram.com/btsforia_ot7" target="_blank">
                    {{ $t('contacts-page.fanbase.links.instagram') }}</a>
                </li>
                <li>
                  <!--              <font-awesome-icon class="contacts-icons" icon="vk"/>-->
                  <a href="https://vk.com/btsforia" target="_blank"> {{ $t('contacts-page.fanbase.links.vk') }}</a>
                </li>
                <li>
                  <!--              <font-awesome-icon class="contacts-icons" icon="twitter"/>-->
                  <a href="https://twitter.com/BTSforia_OT7" target="_blank">
                    {{ $t('contacts-page.fanbase.links.twitter') }}</a>
                </li>
              </ul>
            </Col>
            <Col :xs="24" :sm="12" :md="10" :lg="8">
              <h4>{{ $t('contacts-page.organizer.title') }}</h4>

              <ul>
                <li>
                  <!--            <font-awesome-icon class="contacts-icons" icon="tiktok"/>-->
                  <a href="https://vm.tiktok.com/ZSJ8gmGFw" target="_blank">
                    {{ $t('contacts-page.organizer.links.tiktok') }}</a>
                </li>
                <li>
                  <!--              <font-awesome-icon class="contacts-icons" icon="instagram"/>-->
                  <a href="https://www.instagram.com/rubiforia" target="_blank">
                    {{ $t('contacts-page.organizer.links.instagram') }}</a>
                </li>
                <li>
                  <!--              <font-awesome-icon class="contacts-icons" icon="vk"/>-->
                  <a href="https://vk.com/soulmatetae" target="_blank"> {{ $t('contacts-page.organizer.links.vk') }}</a>
                </li>
                <li>
                  <!--              <font-awesome-icon class="contacts-icons" icon="twitter"/>-->
                  <a href="twitter.com/bitchmytime" target="_blank"> {{
                      $t('contacts-page.organizer.links.twitter')
                    }}</a>
                </li>
              </ul>
            </Col>
          </Row>
        </Col>
      </Row>

    </div>
  </div>
</template>

<script>
export default {
  layout: 'default',
}
</script>

<style lang="less">
@import '~assets/css/main.less';

.contacts-page {
  ul {
    list-style-type: none;

    li {
      padding-bottom: 5px;

      a {
        text-decoration: underline;
      }
    }
  }

  h4 {
    color: @color-gray-dark;
  }

  p {
    padding-bottom: 10px;
  }

  .ivu-alert {
    text-align: left;
    width: 75%;
    @media @mobile {
      width: 100%;
      text-align: center;
    }
  }
}
</style>

<i18n src="./ContactsPageLang.json"/>
