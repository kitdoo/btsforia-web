<template>
    <div class="layout--container">
        <Layout style="min-height: 100%">
            <Sider ref="leftSlider" hide-trigger width="240" class="slider" collapsible :collapsed-width="70"
                   v-model="isCollapsed">
                <div class="logo-collapsed" v-if="isCollapsed">
                    <img src="~assets/images/logo.png" alt="logo">
                </div>

                <div class="logo" v-else>
                    <img src="~assets/images/logo.png" alt="logo">
                </div>

                <Menu theme="dark" width="auto" :accordion="true" :active-name="active"
                      @on-select="$_onSelect" :class="menuClasses">
                    <MenuItem name="index">
                        <i>
                            <font-awesome-icon far icon="home"/>
                        </i>
                        <span>Home</span>
                    </MenuItem>
                </Menu>

            </Sider>

            <Layout>
                <Header :style="{padding: 0, position: 'fixed', width: '100%'}" class="header">
                    <div class="top-panel">
                        <Row type="flex" justify="space-between">
                            <Col :xs="12" :sm="16" :md="16" :lg="18">
                                <Row type="flex" justify="start">
                                    <Col class="mr25 d-flex items-align-center">
                                        <Icon @click.native="$_collapsedSlider" type="md-menu" size="25"
                                              :class="{'d-none': $device.isMobile}"/>
                                    </Col>
                                </Row>
                            </Col>
                            <Col :xs="12" :sm="8" :md="8" :lg="6" class="d-flex justify-end"
                                 style="position: fixed; right: 10px">
                            </Col>
                        </Row>
                    </div>
                </Header>

                <Content class="content" v-bind:style="bcolor">
                    <nuxt/>
                </Content>

                <Footer :style="{padding: 0}" class="footer">
                    <div class="bottom-panel">
                        <Row type="flex" justify="space-between">
                            <Col span="12" class="d-flex items-align-center">
<!--                                <img src="~/assets/images/logo.png" alt="" style="height: 30px"/>-->
                            </Col>
                            <Col span="12" class="d-flex justify-end items-align-center">
                                <span style="font-size: 12px; color: #282D39">&copy; 2021 - {{year}}, Kitdoo</span>
                            </Col>
                        </Row>
                    </div>
                </Footer>
            </Layout>
        </Layout>
    </div>
</template>

<script>
    export default {
        components: {
        },

        data() {
            return {
                hideNotifications: false,
                mCollapsed: undefined,
                bcolor: {
                    backgroundColor: '#fff'
                }
            };
        },

        computed: {
            isCollapsed: {
                set(v) {
                    this.mCollapsed = v;
                },

                get() {
                    return this.mCollapsed === undefined ? this.windowWidth <= 1440 : this.mCollapsed;
                }
            },

            active() {
                if(this.$route.name) {
                    let p = this.$route.name.replace(/(___[aA-zZ]{2})$/, '').split('-');
                    return p[0];
                }
                return null;
            },

            menuClasses() {
                return [
                    'menu',
                    this.isCollapsed ? 'collapsed-menu' : '',
                ];
            },

            logoClasses() {
                return [
                    'logo',
                    this.isCollapsed ? 'logo-collapsed' : '',
                ];
            },

            year() {
                return new Date().getFullYear();
            }
        },

        methods: {
            $_onSelect: function (name) {
                this.$router.push(this.localePath(name));
            },
            $_collapsedSlider() {
                if (this.$device.isDesktopOrTablet) {
                    this.$refs.leftSlider.toggleCollapse();
                }
            }
        },

        watch: {
            $route: {
                handler(to, from) {
                    this.bcolor.backgroundColor = to.path === '/' || to.path === '/reports'
                        ? 'transparent'
                        : '#fff';

                },
                immediate: true,
            }
        },
    };
</script>

<style lang="less">
    @import '~assets/css/main';

    .layout--container {
        height: 100%;

        .ivu-layout-sider {
            position: relative;

            .ivu-layout-sider-children {
                width: inherit;
                position: fixed;
            }

            .logo {
                margin-top: 20px;
                text-align: center;
                display: block;
                margin-bottom: 20px;

                img {
                    transition: width .2s ease .2s, height .2s ease .2s;
                    height: 65px;
                }
            }

            .logo-collapsed {
                margin-top: 20px;
                text-align: center;
                display: block;
                margin-bottom: 20px;

                img {
                    transition: width .2s ease, height .2s ease;
                    width: 30px;
                }
            }

            .ivu-menu {
                &-item {
                    font-size: 16px;
                    margin-top: 10px;
                    display: flex;
                    padding: 20px 20px;
                    align-items: center;

                    i {
                        margin-right: 0;
                    }
                }

                &-item-selected {
                    color: #FFFFFF !important;
                }
            }


            .collapsed-menu {
                span {
                    width: 0 !important;
                    transition: width .2s ease !important;
                    display: none;
                }

                i {
                    transform: translateX(5px) !important;
                    transition: font-size .2s ease .2s, transform .2s ease .2s !important;
                    vertical-align: middle !important;
                    font-size: 22px !important;
                }

            }

            .menu {
                span {
                    display: inline-block;
                    overflow: hidden;
                    width: 160px;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    vertical-align: bottom;
                    transition: width .2s ease .2s;
                    margin-left: 15px;
                }

                i {
                    transform: translateX(0px);
                    transition: font-size .2s ease, transform .2s ease;
                    vertical-align: middle;
                    font-size: 16px;
                }
            }
        }

        .ivu-layout {
            &-header {
                background: #fff;
                box-shadow: 0 0 5px rgba(86, 96, 117, 0.15);
                display: flex;
                justify-content: space-between;
                align-items: center;
                z-index: 1000;

                .top-panel {
                    width: 100%;
                    flex-flow: row wrap;
                    padding: 0 15px;
                }
            }

            &-footer {
                background: #fff;
                box-shadow: 0 0 5px rgba(86, 96, 117, 0.15);
                display: flex;
                justify-content: space-between;
                align-items: center;

                .bottom-panel {
                    width: 100%;
                    padding: 10px 15px;
                    flex-flow: row wrap;

                    .lang-switcher {
                        display: flex;
                        -webkit-box-pack: end;
                        justify-content: flex-end;
                    }
                }
            }

            &-content {
                margin: 80px 15px 20px;
                background-color: #f5f7f9;
                padding: 15px 20px;
                border-radius: 5px;
            }
        }
    }
</style>
