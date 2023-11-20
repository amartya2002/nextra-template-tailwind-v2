import { useRouter } from 'next/router'
import Navbar from "./components/Navbar"
export default {

  logo: <span>Docs Template</span>,

  project: {
    link: "https://github.com/shuding/nextra",
  
  },

  // navbar: {
  //   component: (
  //     <Navbar/>
  //   )
  // },

  // useNextSeoProps() {
  //   return {
  //     title : 'This is my title',
  //     titleTemplate : '%s | Next SEO'
  //   }
  // },

  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Nextra" />
      <meta property="og:description" content="The next site builder" />
    </>
  ),

  // primaryHue:{ dark: 20, light: 200 },
  // primarySaturation:{ dark: 50, light: 50 },

  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – Docs Template'
      }
    }
  },


  // darkMode: true,
  sidebar: {
    toggleButton: true,
  
  },


  footer: {
    text: (
      <span>
        MIT {new Date().getFullYear()} ©{' '}
        <a href="https://nextra.site" target="_blank">
          Nextra
        </a>
        .
      </span>
    )
  },

  gitTimestamp: true,
};
