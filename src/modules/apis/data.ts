import { Demo } from 'types/demo';

export const data: Array<Demo> = [
  {
    id: '_file_system_api_',
    title: 'File System API',
    emoji: '📂',
    description:
      "Only for Chromium-based web browsers. The File System Access API makes it easy and simple to read and write the user's files and access the file system.",
    meta: {
      author: {
        name: 'Usman Sabuwala',
        social: {
          twitter: 'MaxProgramming1',
        },
      },
      canIUseURL: 'https://caniuse.com/mdn-api_window_showopenfilepicker',
    },
  },
  {
    id: 'fullscreen',
    title: 'FullScreen API',
    emoji: '📺',
    description:
      'The Fullscreen API adds methods to present a specific Element (and its descriptionendants) in full-screen mode, and to exit full-screen mode once it is no longer needed.',
    meta: {
      author: {
        name: 'Tapas Adhikary',
        social: {
          email: 'tapas.adhikary@gmail.com',
          twitter: 'tapasadhikary',
        },
      },
      canIUseURL: 'https://caniuse.com/fullscreen',
    },
  },
  {
    id: '_clipboard_api_',
    title: 'Clipboard API',
    emoji: '📋',
    description:
      'The Clipboard API provides the ability to respond to clipboard commands (cut, copy, and paste) as well as to asynchronously read from and write to the system clipboard.',
    meta: {
      author: {
        name: 'Tapas Adhikary',
        social: {
          email: 'tapas.adhikary@gmail.com',
          twitter: 'tapasadhikary',
        },
      },
      canIUseURL: 'https://caniuse.com/async-clipboard',
    },
  },
  {
    id: '_broadcast_api_',
    title: 'Broadcast',
    emoji: '📡',
    description:
      'The BroadcastChannel is a named channel that allows communication between different documents (in different windows, tabs, frames or iframes) of the same origin.',
    meta: {
      author: {
        name: 'Tapas Adhikary',
        social: {
          email: 'tapas.adhikary@gmail.com',
          twitter: 'tapasadhikary',
        },
      },
      canIUseURL: 'https://caniuse.com/broadcastchannel',
    },
  },
  {
    id: '_network_info_api_',
    title: 'Network Info',
    emoji: '📶',
    description:
      "The Network Information API provides information about the system's connection in terms of general connection type (e.g., 'wifi', 'cellular', etc.).",
    meta: {
      author: {
        name: 'Tapas Adhikary',
        social: {
          email: 'tapas.adhikary@gmail.com',
          twitter: 'tapasadhikary',
        },
      },
      canIUseURL: 'https://caniuse.com/netinfo',
    },
  },
  {
    id: '_resize_observer_api_',
    title: 'Resize Observer',
    emoji: '🧐',
    description:
      'The Resize Observer API provides a performant mechanism by which code can monitor an element for changes to its size, with notifications.',
    meta: {
      author: {
        name: 'Tapas Adhikary',
        social: {
          email: 'tapas.adhikary@gmail.com',
          twitter: 'tapasadhikary',
        },
      },
      canIUseURL: 'https://caniuse.com/mdn-api_resizeobserver',
    },
  },
  {
    id: '_payment_request_api_',
    title: 'Web payment API',
    emoji: '💳',
    description:
      'The Payment Request API provides a consistent user experience for both merchants and users. Select a preferred way to pay for things.',
    meta: {
      author: {
        name: 'Tapas Adhikary',
        social: {
          twitter: 'tapasadhikary',
          email: 'tapas.adhikary@gmail.com',
        },
      },
      canIUseURL: 'https://caniuse.com/payment-request',
    },
  },
  {
    id: '_vibration_api_',
    title: 'Vibration API',
    emoji: '📳',
    description:
      'Most modern mobile devices include vibration hardware, which lets software code provide physical feedback to the user by causing the device to shake.',
    meta: {
      author: {
        name: 'Tapas Adhikary',
        social: {
          twitter: 'tapasadhikary',
          email: 'tapas.adhikary@gmail.com',
        },
      },
      canIUseURL: 'https://caniuse.com/vibration',
    },
  },
  {
    id: '_battery_api_',
    title: 'Battery API',
    emoji: '🔋',
    description:
      "The Battery Status API, more often referred to as the Battery API, provides information about the system's battery charge level",
    meta: {
      author: {
        name: 'Tapas Adhikary',
        social: {
          twitter: 'tapasadhikary',
          email: 'tapas.adhikary@gmail.com',
        },
      },
      canIUseURL: 'https://caniuse.com/battery-status',
    },
  },
  {
    id: '_dnd_api_',
    title: 'Drag and Drop',
    emoji: '🐢',
    description:
      'HTML Drag and Drop interfaces enable applications to use drag-and-drop features in browsers.',
    meta: {
      author: {
        name: 'Tapas Adhikary',
        social: {
          twitter: 'tapasadhikary',
          email: 'tapas.adhikary@gmail.com',
        },
      },
      canIUseURL: 'https://caniuse.com/dragndrop',
    },
  },
  {
    id: '_image_capture_api_',
    title: 'Image Capture',
    emoji: '📸',
    description:
      'The ImageCapture interface provides methods to enable the capture of images or photos from a camera or other photographic device.',
    meta: {
      author: {
        name: 'Tapas Adhikary',
        social: {
          twitter: 'tapasadhikary',
          email: 'tapas.adhikary@gmail.com',
        },
      },
      canIUseURL: 'https://caniuse.com/mdn-api_imagecapture',
    },
  },
  {
    id: '_web_share_api_',
    title: 'Web Share API',
    emoji: '🔗',
    description:
      'The Web Share API helps in invoking the native sharing mechanism of the user&#x27;s device',
    meta: {
      author: {
        name: 'Usman Sabuwala',
        social: {
          twitter: 'MaxProgramming1',
          email: 'maxprogramming05@gmail.com',
        },
      },
      canIUseURL: 'https://caniuse.com/web-share',
    },
  },
  {
    id: '_geolocation_',
    title: 'Geolocation API',
    emoji: '⚓',
    description:
      'The Geolocation API allows the user to provide their location to web applications if they so desire. This demo shows how it works using an example.',
    meta: {
      author: {
        name: 'Sameer Waskar',
        social: {
          twitter: 'SameerWaskar',
          email: 'dev.wsameer@gmail.com',
        },
      },
      canIUseURL: 'https://caniuse.com/mdn-api_geolocation',
    },
  },
  {
    id: '_picture_in_picture_',
    title: 'Picture in Picture',
    emoji: '🖼️',
    description:
      'Picture-in-picture is a feature supported by some smart TVs, devices to show the content on a floating window. It allows users to continue to see the content while interacting with the background page, other sites.',
    meta: {
      author: {
        name: 'Tapas Adhikary',
        social: {
          twitter: 'tapasadhikary',
          email: 'tapas.adhikary@gmail.com',
        },
      },
      canIUseURL: 'https://caniuse.com/picture-in-picture',
    },
  },
  {
    id: '_screen_capture_',
    title: 'Screen Capture',
    emoji: '💻',
    description:
      'The Screen Capture demo introduces additions to the existing Media Capture and Streams API to let the user select a screen to capture as a media stream',
    meta: {
      author: {
        name: 'Koustov',
        social: {
          twitter: 'koustov',
          email: 'koustov@live.com',
        },
      },
      canIUseURL: 'https://caniuse.com/DisplayMedia',
    },
  },
  {
    id: '_web_speech_',
    title: 'Web Speech API',
    emoji: '🎙️',
    description:
      'The Web Speech API enables you to incorporate voice data into web apps. ',
    meta: {
      author: {
        name: 'Abiola Farounbi',
        social: {
          twitter: 'abiolaEsther_',
          email: 'farounbiabiola@gmail.com',
        },
      },
      canIUseURL: 'https://caniuse.com/speech-recognition',
    },
  },
  {
    id: 'css_font_loading',
    title: 'CSS Font Loading API',
    emoji: '✍️',
    description:
      'The CSS Font Loading API provides events and interfaces for dynamically loading font resources',
    meta: {
      author: {
        name: 'Emit Dutcher',
        social: {
          twitter: 'develemit',
          email: 'emitdutcher@gmail.com',
        },
      },
      canIUseURL: 'font-loading',
    },
  }, //replace item here
];
