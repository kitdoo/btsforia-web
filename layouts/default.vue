<template>
  <div class="layout">
    <Layout>
      <Header>
        <img src="~assets/images/logo.png" alt="logo" class="logo">

        <Menu mode="horizontal"
              theme="dark"
              @on-select="$_onSelect"
              :class="{'d-none': $device.isMobile}"
              :active-name="active">
          <div class="layout-nav">
            <MenuItem name="main">
              <font-awesome-icon class="icon-menu" far icon="home"/>
              <span>{{ $t('layout.menu.main.link.text') }}</span>
            </MenuItem>
            <Submenu name="events">
              <template slot="title">
                <font-awesome-icon class="icon-menu" far icon="calendar-week"/>
                <span>{{ $t('layout.menu.events.link.text') }}</span>
              </template>
              <MenuGroup>
                <MenuItem name="index">
                  <font-awesome-icon class="icon-menu" far icon="birthday-cake"/>
                  <span>{{ $t('layout.menu.congratulations-events.link.text') }}</span>
                </MenuItem>
              </MenuGroup>
              <MenuGroup>
                <MenuItem name="index">
                  <font-awesome-icon class="icon-menu" far icon="hand-holding-heart"/>
                  <span>{{ $t('layout.menu.charity-events.link.text') }}</span>
                </MenuItem>
              </MenuGroup>
            </Submenu>
            <MenuItem name="reports">
              <font-awesome-icon class="icon-menu" far icon="file-alt"/>
              <span>{{ $t('layout.menu.reports.link.text') }}</span>
            </MenuItem>
            <MenuItem name="documents">
              <font-awesome-icon class="icon-menu" far icon="file"/>
              <span>{{ $t('layout.menu.documents.link.text') }}</span>
            </MenuItem>
            <MenuItem name="contacts">
              <font-awesome-icon class="icon-menu" far icon="address-book"/>
              <span>{{ $t('layout.menu.contacts.link.text') }}</span>
            </MenuItem>
          </div>
        </Menu>

        <!--        <div class="user-avatar-wrap" v-if="!$device.isMobile">-->
        <!--          <UserAvatar/>-->
        <!--        </div>-->

        <Icon :class="{'d-none': !$device.isMobile}"
              class="menu-icon"
              size="25" type="md-menu"
              @click.native="$_hideMenu"/>
        <Menu class="mobile-menu" theme="dark"
              v-if="$device.isMobile"
              @on-select="$_onSelect"
              :class="classMobileMenu"
              :active-name="active">
          <div class="layout-nav">
            <MenuItem name="main">
              <font-awesome-icon class="icon-menu" far icon="home"/>
              <span>{{ $t('layout.menu.main.link.text') }}</span>
            </MenuItem>
            <Submenu name="events">
              <template slot="title">
                <font-awesome-icon class="icon-menu" far icon="calendar-week"/>
                <span>{{ $t('layout.menu.events.link.text') }}</span>
              </template>
              <MenuGroup>
                <MenuItem name="index">
                  <font-awesome-icon class="icon-menu" far icon="birthday-cake"/>
                  <span>{{ $t('layout.menu.congratulations-events.link.text') }}</span>
                </MenuItem>
              </MenuGroup>
              <MenuGroup>
                <MenuItem name="index">
                  <font-awesome-icon class="icon-menu" far icon="hand-holding-heart"/>
                  <span>{{ $t('layout.menu.charity-events.link.text') }}</span>
                </MenuItem>
              </MenuGroup>
            </Submenu>
            <MenuItem name="reports">
              <font-awesome-icon class="icon-menu" far icon="file-alt"/>
              <span>{{ $t('layout.menu.reports.link.text') }}</span>
            </MenuItem>
            <MenuItem name="documents">
              <font-awesome-icon class="icon-menu" far icon="file"/>
              <span>{{ $t('layout.menu.documents.link.text') }}</span>
            </MenuItem>
            <MenuItem name="contacts">
              <font-awesome-icon class="icon-menu" far icon="address-book"/>
              <span>{{ $t('layout.menu.contacts.link.text') }}</span>
            </MenuItem>
          </div>
        </Menu>

      </Header>
      <Content class="layout-content">
        <nuxt></nuxt>
      </Content>
      <Footer class="layout-footer-center">
        <div class="copywriter">{{ $t('layout.footer.owner') }} {{ $t('layout.footer.copywriter') }}</div>
      </Footer>

    </Layout>
  </div>
</template>

<script>
import UserAvatar from "../components/avatar/TheUserAvatar";

export default {
  components: {UserAvatar},

  data() {
    return {
      collapseMenu: false,
      classMobileMenu: ''
    };
  },

  computed: {
    active() {
      if (this.$route.name) {
        let p = this.$route.name.replace(/(___[aA-zZ]{2})$/, '').split('-');
        return p[0];
      }
      return null;
    }
  },

  methods: {
    $_onSelect: function (name) {
      this.$router.push(this.localePath(name));
    },

    $_hideMenu() {
      if (this.collapseMenu === false) {
        this.classMobileMenu = ' show-menu';
      } else {
        this.classMobileMenu = ' hide-menu';
      }

      this.collapseMenu = !this.collapseMenu;
    }
  },
};
</script>

<style lang="less">
@import '~assets/css/main';

.layout {
  display: flex;
  flex-direction: column;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  height: 100vh;

  .ivu-layout-header {
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    padding: 0 30px;
    flex-wrap: wrap;
    background-color: @color-purple;

    @media @mobile, @md-and-down {
      padding: 10px 20px;
      justify-content: space-between;
    }

    .menu-icon {
      color: white;
    }

    .user-avatar-wrap {
      margin-left: auto;
    }

    .ivu-menu-dark {
      background-color: @color-purple;
    }

    .ivu-menu-horizontal {
      display: flex;
      align-items: center;
      line-height: 50px;
      height: 50px;
    }

    .ivu-menu {
      .ivu-menu-item {
        border-radius: 30px;
        transition: background-color 0.3s ease-out 0.3s;

        .ivu-menu-submenu {
          transition: background-color 0.3s ease-out 0.3s;
        }

        &:hover {
          border-radius: 30px;
          background-color: @color-purple-fade;
          color: white;
          transition: background-color 0.07s ease-out 0.07s;
        }
      }

      .ivu-menu-submenu-active {
        background-color: @color-gray-light;
      }

      .ivu-menu-item-group {
        &:not(:last-child) {
          margin-bottom: 5px;
        }

        .ivu-menu-item {
          padding-bottom: 10px;
          border-radius: unset;

          .icon-menu {
            path {
              fill: @color-purple-fade;
            }
          }

          &:hover {
            background-color: @color-gray-light;
            color: @color-black;
            transition: background-color 0.07s ease-out 0.07s;
          }
        }

        .ivu-menu-item-active {
          background-color: white;
          color: @color-black;
        }
      }

      .icon-menu {
        margin-right: 5px;
      }
    }

    .mobile-menu {
      display: block;
      overflow: hidden;
      height: 0;
      width: 100% !important;
      padding: 0;

      .ivu-menu-item {
        padding: 0 !important;
        width: 100%;

        &:hover {
          background-color: transparent !important;
        }
      }

      .ivu-menu-submenu {
        width: 100%;

        .ivu-menu-submenu-title {
          padding: 0;
        }

        &:hover {
          background-color: transparent !important;
        }

        .ivu-menu {
          padding-left: 10px;
        }

        .icon-menu {
          margin-right: 5px;
        }

        .ivu-menu-item-group {
          .ivu-menu-item {
            padding: 0 15px;
            border-radius: unset;
            color: white;

            .icon-menu {
              path {
                fill: white;
              }
            }
          }
        }
      }

    }

    .show-menu {
      height: auto;
      overflow: auto;
      transition: all 0.3s ease-out 0.3s;
    }

    .hide-menu {
      height: 0;
      overflow: hidden;
      transition: all 0.5s ease-out 0.5s;
    }

    .logo {
      height: 35px;
      padding-right: 15px;
    }
  }

  .layout-content {
    padding: 50px;
    flex: 1 0 auto;
  }

  .layout-footer-center {
    width: 100%;
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    background-color: @color-gray-light;
    font-size: 14px;
    padding: 13px 35px;

    @media @mobile {
      justify-content: center;
    }

    .copywriter {
      color: @color-gray-dark;
      text-align: right;
    }


  }
}
</style>

<i18n src="./LayoutDefaultLang.json"/>
