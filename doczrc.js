import * as colors from './src/utils/colors'

export default {
  title: 'Sevi Library',
  base: '/docs',
  ignore: ['**/blog/**', 'readme.md'],
  menu: ['Getting Started', 'For anyone', 'For group admin'],
  themeConfig: {
    colors: {
      primary: colors.primary,
    },
  },
}
