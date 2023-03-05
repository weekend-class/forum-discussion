import { MantineThemeOverride } from '@mantine/core'

export const theme = {
  colorScheme: 'light',
  //   black: '#252525',
  //   white: '#E5E5E5',

  //   shadows: {
  //     md: '1px 1px 3px rgba(0, 0, 0, .25)',
  //     xl: '5px 5px 3px rgba(0, 0, 0, .25)',
  //   },

  //   fontFamily: 'var(--roboto-font)',
  //   headings: {
  //     fontFamily: 'var(--ubuntu-font)',
  //     sizes: {
  //       h1: { fontSize: 30 },
  //     },
  //   },
  primaryColor: 'violet',
  primaryShade: 5,

  components: {
    Container: {
      defaultProps: {
        size: 'xl',
      },
    },
    Button: {
      defaultProps: {
        radius: 'xl',
        size: 'md',
      },
      //   styles: (theme, params) => {
      //     return {
      //       root: {
      //         borderWidth: '3px',
      //         color: params.variant === 'filled' ? theme.black : undefined,
      //       },
      //     }
      //   },
    },
    Input: {
      defaultProps: {
        radius: 'xl',
      },
    },
    InputWrapper: {
      defaultProps: {
        size: 'md',
      },
    },
    // TextInput: {
    //   defaultProps: {
    //   },
    // },
    // PasswordInput: {
    //   defaultProps: {
    //     size: 'md',
    //   },
    // },
  },
  //   globalStyles: (theme) => ({
  //     '.title': {
  //       fontFamily: 'var(--ubuntu-font)!important',
  //     },
  //     '.dots-illustration': {
  //       width: '347px',
  //       color: theme.colors.primary[5],
  //       position: 'absolute',
  //       top: 0,
  //       left: 0,
  //     },
  //     '.relative': {
  //       position: 'relative',
  //     },
  //   }),
} satisfies MantineThemeOverride

export default theme
