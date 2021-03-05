import Vue from 'vue';
import toUpperCase from '~/lib/filters/to-upper-case';
import toLowCase from '~/lib/filters/to-low-case';
import capitalize from '~/lib/filters/capitalize';

Vue.filter('uppercase', toUpperCase);
Vue.filter('lowercase', toLowCase);
Vue.filter('capitalize', capitalize);