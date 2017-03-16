import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {

  projects: {

    // Applications at Yieldmo
    'yieldmo-applications': {
      name: 'Applications at Yieldmo',
      url: '/project/yieldmo-applications',
      slug: 'yieldmo-applications',
      links: [
        {
          url: 'http://adbuilder.yieldmo.com',
          text: 'Ad Builder'
        },
        {
          url: 'http://yieldmo.com',
          text: 'Yieldmo'
        }
      ],
      textBlocks: [
        'In 2016, after many months of building an owning a tool called Ad Builder, I helped the Applications team at Yieldmo consolidate and organize a wide array of applications.',
        'The Applications team was made up of 13 Engineers, Designers and Product folks. We delivered several inidividual projects under the overall initiative of cleaning up our set of internal and external tools.',
        'On the Engineering side, we established an entirely new service/back-end architecture for our applications. We cleared up an enourmous amount of tech debt and organized to get the most out of our team, allowing us to support the existing tools while building the next generation of Applications.',
        'We were also able to develop a set of packages and libraries to make life easier on the front end. These packages distributed versioned data, brand elements, and function UI components to any Application via NPM or Bower.',
        'On the Design side, we were able to completely rethink our core external Applications. The team resdesigned our blog, our website, our component libraries, as well as many other applications.'
      ],
      images: [
        '/images/yieldmo-applications-01.png',
        '/images/yieldmo-applications-02.png',
        '/images/yieldmo-applications-03.png',
        '/images/yieldmo-applications-04.png',
        '/images/yieldmo-applications-06.png',
        '/images/yieldmo-applications-07.png',
        '/images/yieldmo-applications-08.png'
      ]
    },

    // Ad Builder at Yieldmo
    'yieldmo-ad-builder': {
      name: 'Ad Builder at Yieldmo',
      url: '/project/yieldmo-ad-builder',
      slug: 'yieldmo-ad-builder',
      links: [
        {
          url: 'http://adbuilder.yieldmo.com',
          text: 'Ad Builder'
        }
      ],
      textBlocks: [
        'In 2015 I moved from San Francisco to New York and joined Yieldmo, a GV & USV backed startup in the AdTech space.',
        'The primary product of Yieldmo is ad formats, which reach 2 out of every 3 mobile device users in the US (stat is from late 2015). I joined the team as an Engineering Lead on a project called "Ad Builder". The idea of this tool was to allow users to build their custom versions of our Ad Formats.',
        'I worked with a great team of designers and engineers to coordinate the build and launch of this tool. After launch (15 August 2015) it became the primary tool used internally and externally for building and trafficking creatives within the Yieldmo platform.'
      ],
      images: [
        '/images/yieldmo-ad-builder-01.gif',
        '/images/yieldmo-ad-builder-02.png',
        '/images/yieldmo-ad-builder-03.png',
        '/images/yieldmo-ad-builder-04.png',
      ]
    },

    // GHIT App
    'ghit-app': {
      name: 'GitHub Issue Tracker',
      url: '/project/ghit-app',
      slug: 'ghit-app',
      links: [
        {
          url: 'http://www.ghit.io',
          text: 'Ghit Marketing page'
        },
        {
          url: 'https://itunes.apple.com/us/app/ghit-a-github-issue-tracker/id929836674?ls=1&mt=8',
          text: 'Ghit (App Store)'
        }
      ],
      textBlocks: [
        'In 2014 I launched an iOS app for GitHub users. I called it GHIT (<u>G</u>it<u>H</u>ub <u>I</u>ssue <u>T</u>racker) It leverages the GitHub Api and allows users to maintain all of the issues associated with their repos. Using Objective C and GitHub\'s Octokit library, I built an app that I wanted to use.  Turns out other folks did too - it was downloaded by over 5,000 users in its first year, and still has thousands of users to this day.'
      ],
      images: [
        '/images/ghit-01.png'
      ]
    },

    // Highsmith Calendar
    'highsmith-calendar': {
      name: 'Highsmith Calendar',
      url: '/project/highsmith-calendar',
      slug: 'highsmith-calendar',
      links: [
        {
          url: 'http://adamvanlente.github.io/highsmith/',
          text: 'Highsmith'
        }, {
          url: 'https://github.com/adamvanlente/highsmith',
          text: 'GitHub'
        }
      ],
      textBlocks: [
        'As I was building some new tools for RetroDuck.com, I was getting very tired of a javascript calendar tool I was using. I needed more features, so I spent a Saturday and Sunday building and tweaking my own Javascript calendar picker tool. I call it Highsmith. You can check out a sample here, and view the code here.'
      ],
      images: [
        '/images/highsmith-01.png'
      ]
    },

    // Name that Seagal
    'name-that-seagal': {
      name: 'Name that Seagal',
      url: '/project/name-that-seagal',
      slug: 'name-that-seagal',
      links: [
        {
          url: 'http://www.namethatseagal.com/',
          text: 'Name that Seagal'
        }, {
          url: 'https://github.com/adamvanlente/namethatseagal/',
          text: 'GitHub'
        }
      ],
      textBlocks: [
        'You get the movie name, you name the Seagal character. Its simple, and as awesome as it sounds. This is a game I made as a birthday gift for a friend, but I also wanted to create some code that could be reused for any type of quiz-game. The game can be played here, and you can read the code here.'
      ],
      images: [
        '/images/seagal-01.png'
      ]
    },

    // Urban Mapping
    'urban-mapping': {
      name: 'Urban Mapping',
      url: '/project/urban-mapping',
      slug: 'urban-mapping',
      links: [],
      textBlocks: [
        'In January 2014 I began updating the Urban Mapping corporate website and Developer Center. Below are a few screenshots highlighting the work I did for Urban Mapping. Overall, the focus of this project was to give the site a more modern look, in addition to making the pages responsive to different screen sizes.'
      ],
      images: [
        '/images/umi-01.png',
        '/images/umi-02.png',
        '/images/umi-03.png',
        '/images/umi-04.png',
        '/images/umi-05.png',
        '/images/umi-06.png',
        '/images/umi-07.png',
        '/images/umi-08.png',
        '/images/umi-09.png'
      ]
    }
  }
}

const store = new Vuex.Store({
  state
})

export default store
