import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'صفحه اصلی',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
  },
  // {
  //   title: 'FEATURES',
  //   group: true,
  // },
  // {
  //   title: 'UI Features',
  //   icon: 'nb-keypad',
  //   link: '/pages/ui-features',
  //   children: [
  //     {
  //       title: 'Buttons',
  //       link: '/pages/ui-features/buttons',
  //     },
  //     {
  //       title: 'Grid',
  //       link: '/pages/ui-features/grid',
  //     },
  //     {
  //       title: 'Icons',
  //       link: '/pages/ui-features/icons',
  //     },
      // {
      //   title: 'Modals',
      //   link: '/pages/ui-features/modals',
      // },
      // {
  //       title: 'Popovers',
  //       link: '/pages/ui-features/popovers',
  //     },
  //     {
  //       title: 'Typography',
  //       link: '/pages/ui-features/typography',
  //     },
  //     {
  //       title: 'Animated Searches',
  //       link: '/pages/ui-features/search-fields',
  //     },
  //     {
  //       title: 'Tabs',
  //       link: '/pages/ui-features/tabs',
  //     },
  //  ],
  // },
  {
    title: 'فرم‌ها',
    icon: 'nb-compose',
    children: [
      // {
      //   title: 'Form Inputs',
      //   link: '/pages/forms/inputs',
      // },
      // {
      //   title: 'Form Layouts',
      //   link: '/pages/forms/layouts',
      // },
      // {
      //   title: 'Form CheckBox',
      //   link: '/pages/forms/checkbox',
      // },
      {
        title: 'اطلاعات من',
        link: '/pages/forms/memberInfo',
      },
      {
        title: 'فرم قبض',
        link: '/pages/forms/qabz',
      },
      {
        title: 'نمایش پیامک(ها)',
        link: '/pages/forms/water-price',
      },
      {
        title: 'لوازم کاهنده مصرف',
        link: '/pages/forms/info',
      },
      {
        title: 'درخواست پیگیری',
        link: '/pages/forms/trackrequest',
      },
      {
        title: 'خدمات انتخابی',
        link: '/pages/forms/LinkService',
      },
      {
        title: 'ثبت انشعاب جدید',
        link: '/pages/forms/registerNew',
      },
    ],
  },
  // {
  //   title: 'Components',
  //   icon: 'nb-gear',
  //   children: [
  //     {
  //       title: 'Tree',
  //       link: '/pages/components/tree',
  //     }, {
  //       title: 'Notifications',
  //       link: '/pages/components/notifications',
  //     },
  //   ],
  // },
  {
    title: 'نقشه ها',
    icon: 'nb-location',
    children: [
      // {
      //   title: 'Google Maps',
      //   link: '/pages/maps/gmaps',
      // },
      // {
      //   title: 'Leaflet Maps',
      //   link: '/pages/maps/leaflet',
      // },
      {
        title: 'آبفا منطقه',
        link: '/pages/maps/waterzone',
      },
      {
        title: 'دفاتر پیشخوان',
        link: '/pages/maps/countingoffices',
      },
      // {
      //   title: 'Bubble Maps',
      //   link: '/pages/maps/bubble',
      // },
      // {
      //   title: 'Search Maps',
      //   link: '/pages/maps/searchmap',
      // },
    ],
  },
  // {
  //   title: 'Charts',
  //   icon: 'nb-bar-chart',
  //   children: [
  //     {
  //       title: 'Echarts',
  //       link: '/pages/charts/echarts',
  //     },
  //     {
  //       title: 'Charts.js',
  //       link: '/pages/charts/chartjs',
  //     },
  //     {
  //       title: 'D3',
  //       link: '/pages/charts/d3',
  //     },
  //   ],
  // },
  {
    title: 'انتقاد و پیشنهاد',
    icon: 'nb-title',
    children: [
      // {
      //   title: 'TinyMCE',
      //   link: '/pages/editors/tinymce',
      // },
      // {
      //   title: 'CKEditor',
      //   link: '/pages/editors/ckeditor',
      // },
      {
        title: 'پیشنهادات و انتقادات',
        link: '/pages/editors/C&S',
      },
    ],
  },
  {
    title: 'جداول',
    icon: 'nb-tables',
    children: [
      // {
      //   title: 'Smart Table',
      //   link: '/pages/tables/smart-table',
      // },
      {
        title: 'دریافت اقساط',
        link: '/pages/tables/water-price-table',
      },
      {
        title: 'صورت حساب آبها',
        link: '/pages/tables/form-cardx-table',
      },
      {
        title: 'دفاتر پیشخوان',
        link: '/pages/tables/counting-office',
      },
      {
        title: 'فهرست شرکت های آبفا',
        link: '/pages/tables/water-offices',
      },
    ],
  },
  {
    title: 'Auth',
    icon: 'nb-locked',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      // {
      //   title: 'Register',
      //   link: '/auth/register',
      // },
      // {
      //   title: 'Request Password',
      //   link: '/auth/request-password',
      // },
      // {
      //   title: 'Reset Password',
      //   link: '/auth/reset-password',
      // },
    ],
  },
];
