import {
  FaBullhorn as BannerAds,
  FaNewspaper as Classifieds,
  FaRegCalendarAlt as Events,
  FaMicrophoneAlt as PressRelease,
} from 'react-icons/fa'

export const adPlans = [
  {
    icon: PressRelease,
    title: 'Press Releases',
    blurb:
      'Sit nulla est ex deserunt. Anim occaecat proident nostrud ullamco deserunt. Id consequat veniam incididunt duis.',
    goTo: 'press-releases',
  },

  {
    icon: BannerAds,
    title: 'Banner Ads',
    blurb:
      'Sit nulla est ex deserunt. Anim occaecat proident nostrud ullamco deserunt. Id consequat veniam incididunt duis.',
    goTo: 'banner-ads',
  },

  {
    icon: Events,
    title: 'Events',
    blurb:
      'Sit nulla est ex deserunt. Anim occaecat proident nostrud ullamco deserunt. Id consequat veniam incididunt duis.',
    goTo: 'events',
  },

  {
    icon: Classifieds,
    title: 'Classifieds',
    blurb:
      'Sit nulla est ex deserunt. Anim occaecat proident nostrud ullamco deserunt. Id consequat veniam incididunt duis.',
    goTo: 'classifieds',
  },
]
