import * as colors from './src/utils/colors'

export default {
  title: 'Coolest Library',
  base: '/docs',
  ignore: ['**/blog/**', 'readme.md'],
  menu: ['Getting Started'],
  themeConfig: {
    colors: {
      primary: colors.primary,
    },
  },
}
