import { createTheme, responsiveFontSizes } from "@mui/material";
import { amber, deepOrange, grey } from '@mui/material/colors';
export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
        // palette values for light mode
        primary: { main: '#ff014f' },
        // secondary: { main: '#ff014f' },
        divider: grey[300],
        background: {
          default: '#ecf0f3',
          paper: 'linear-gradient(145deg, #e2e8ec, #ffffff)',
          paperHover: 'linear-gradient(145deg, #6a67ce, #fc636b)',
        },
        shadow: {
          default: '5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff'
        },
        text: {
          primary: grey[800],
          secondary: grey[700],
        },
      }
      : {
        // palette values for dark mode
        primary: { main: '#ff014f' },
        // secondary: { main: '#ff014f' },
        divider: grey[800],
        background: {
          default: '#212428',
          paper: 'linear-gradient(145deg, #1e2024, #23272b)',
          paperHover: 'linear-gradient(145deg, #23272b,  #141414)',
        },
        shadow: {
          default: '10px 10px 19px #1c1e22, -10px -10px 19px #262a2e'
        },
        text: {
          primary: '#fff',
          secondary: grey[500],
        },
      }),
  },
});


// getDesignTokens = responsiveFontSizes(getDesignTokens)
const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          backgroundImage: theme.palette.background.paper,
          boxShadow: theme.palette.shadow.default,
        })
      }
    },
    MuiSvgIcon: {
      styleOverrides: {
        fontSizeLarge: {
          width: '2em',
          height: '2em',
        }
      }
    }
  }
})

export const defaultTheme = {
  components: {
    MuiTypography: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          color: theme.palette.text.primary,
          fontFamily: "Montserrat , sans-serif"
        })
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          boxShadow: theme.palette.shadow.default,
          backgroundImage: theme.palette.background.paper,
          position: 'relative',
          transition: 'all 0.45s',
          zIndex: 100,
          borderRadius: '6px',
          "& .hover-up,.hover-icon": {
            transition: 'all .4s'
          },
          "&:before": {
            borderRadius: "inherit",
            backgroundImage: theme.palette.background.paperHover,
            content: "''",
            display: 'block',
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            opacity: 0,
            width: '100%',
            zIndex: "-100",
            transition: 'opacity 0.45s'
          }
        }),
        elevation1: ({ ownerState, theme }) => ({
          "&:hover": {
            "&:before": {
              opacity: 1
            },
            transform: 'translateY(-4px)'
          }
        }),
        elevation2: ({ ownerState, theme }) => ({
          "&:hover": {
            "&:before": {
              opacity: 1
            },
            "& .hover-up": {
              transform: 'translateY(-15px)'
            },
            "& .hover-icon": {
              opacity: 1,
            }
          }
        }),
        elevation3: ({ ownerState, theme }) => ({
          "& p,h5,.hover-up,.hover-icon,svg": {
            transition: 'all .4s'
          },
          "&:hover": {
            "&:before": {
              opacity: 1
            },
            "& p,h5": {
              color: theme.palette.background.default
            },
            "& svg:first-child": {
              stroke: theme.palette.background.default
            },
            "& .hover-up": {
              transform: 'translateY(-15px)'
            },
            "& .hover-icon": {
              opacity: 1,
            }
          }
        }),
      }
    },
    MuiSvgIcon: {
      styleOverrides: {
        fontSizeLarge: {
          width: '1.4em',
          height: '1.4em',
        }
      }
    },
    MuiStack: {
      defaultProps: {
        direction: "row",
      },
    },
    MuiLink: {
      defaultProps: {
        underline: "none",
      },
    },
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          background: theme.palette.background.paper,
          boxShadow: theme.palette.shadow.default
        })
        // containedInfo: {
        //   backgroundColor: "#efefef",
        //   boxShadow: "none",
        //   color: "black",
        //   ":hover": {
        //     color: "white",
        //   },
        // },
        // sizeLarge: {
        //   padding: "8px 32px",
        //   fontSize: "1.2rem",
        // },
        // sizeMedium: {
        //   padding: "6px 24px",
        //   fontSize: "1rem",
        // },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& label": {
            right: 20,
            left: "unset",
            transformOrigin: "top right",
          },
          "& p": {
            textAlign: "right",
          },
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          "& label": {
            right: 20,
            left: "unset",
            transformOrigin: "top right",
          },
          "& .MuiSelect-select": {
            paddingRight: "12px !important",
          },
          "& svg": {
            left: 8,
            right: "unset",
          },
          "& .MuiFilledInput-root": {
            ":before": {
              borderBottom: "1px solid #80808040",
            },
            ":hover": {
              ":before": {
                borderBottom: "1px solid #80808040 !important",
              },
            },
          },
        },
      },
    },
  },
  typography: {
    // fontFamily: "IranYekan",
    // allVariants: {
    //   direction: "rtl",
    // },
    subtitle2: {
      fontSize: 13,
      fontWeight: 400,
    },
    body2: {
      opacity: 0.8,
    },
  },
};
