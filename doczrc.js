import * as colors from './src/utils/colors'

export default {
  title: 'Sevi Library',
  base: '/docs',
  ignore: ['**/blog/**', 'readme.md'],
  menu: ['Getting Started', 'Loans', 'Payments', 'Partners'],
  themeConfig: {
    colors: {
      primary: colors.primary,
    },
  },
}
