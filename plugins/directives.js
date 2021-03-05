import Vue from 'vue';
import {toUpperCase} from '~/lib/directives/to-upper-case';
import {toLowCase} from '~/lib/directives/to-low-case';
import {capitalize} from '~/lib/directives/capitalize';

Vue.directive('uppercase', toUpperCase);
Vue.directive('lowercase', toLowCase);
Vue.directive('capitalize', capitalize);
