import * as colors from './src/utils/colors'

export default {
  title: 'Sevi Library',
  base: '/docs',
  ignore: ['**/blog/**', 'readme.md'],
  menu: ['Getting Started', 'For anyone', 'For groups', 'For admins'],
  themeConfig: {
    colors: {
      primary: colors.primary,
    },
  },
}
