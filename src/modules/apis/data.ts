import { Demo } from 'types/demo';

export const data: Array<Demo> = [
  {
    id: 'filesystem-api',
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
      apiDocURL:
        'https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API',
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
      apiDocURL:
        'https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API',
      canIUseURL: 'https://caniuse.com/fullscreen',
    },
  },
  {
    id: 'clipboard',
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
      apiDocURL:
        'https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API',
      canIUseURL: 'https://caniuse.com/async-clipboard',
    },
  },
  {
    id: 'broadcast-channel',
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
      apiDocURL:
        'https://developer.mozilla.org/en-US/docs/Web/API/Broadcast_Channel_API',
      canIUseURL: 'https://caniuse.com/broadcastchannel',
    },
  },
  {
    id: 'network-information',
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
      apiDocURL:
        'https://developer.mozilla.org/en-US/docs/Web/API/Network_Information_API',
      canIUseURL: 'https://caniuse.com/netinfo',
    },
  },
  {
    id: 'resize-observer',
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
      apiDocURL:
        'https://developer.mozilla.org/en-US/docs/Web/API/Resize_Observer_API',
      canIUseURL: 'https://caniuse.com/mdn-api_resizeobserver',
    },
  },
  {
    id: 'web-payments',
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
      apiDocURL:
        'https://developer.mozilla.org/en-US/docs/Web/API/Payment_Request_API',
      canIUseURL: 'https://caniuse.com/payment-request',
    },
  },
  {
    id: 'vibration',
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
      apiDocURL:
        'https://developer.mozilla.org/en-US/docs/Web/API/Vibration_API',
      canIUseURL: 'https://caniuse.com/vibration',
    },
  },
  {
    id: 'battery-status',
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
      apiDocURL:
        'https://developer.mozilla.org/en-US/docs/Web/API/Battery_Status_API',
      canIUseURL: 'https://caniuse.com/battery-status',
    },
  },
  {
    id: 'drag-and-drop',
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
      apiDocURL:
        'https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API',
      canIUseURL: 'https://caniuse.com/dragndrop',
    },
  },
  {
    id: 'image-capture',
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
      apiDocURL:
        'https://developer.mozilla.org/en-US/docs/Web/API/MediaStream_Image_Capture_API',
      canIUseURL: 'https://caniuse.com/mdn-api_imagecapture',
    },
  },
  {
    id: 'web-share-api',
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
      apiDocURL:
        ' https://developer.mozilla.org/en-US/docs/Web/API/Web_Share_API',
      canIUseURL: 'https://caniuse.com/web-share',
    },
  },
  {
    id: 'geolocation',
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
      apiDocURL:
        'https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API',
      canIUseURL: 'https://caniuse.com/mdn-api_geolocation',
    },
  },
  {
    id: 'picture-in-picture',
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
      apiDocURL:
        'https://developer.mozilla.org/en-US/docs/Web/API/Picture-in-Picture_API',
      canIUseURL: 'https://caniuse.com/picture-in-picture',
    },
  },
  {
    id: 'screen-capture',
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
      apiDocURL:
        'https://developer.mozilla.org/en-US/docs/Web/API/Screen_Capture_API',
      canIUseURL: 'https://caniuse.com/DisplayMedia',
    },
  },
  {
    id: 'web-speech',
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
      apiDocURL:
        'https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API',
      canIUseURL: 'https://caniuse.com/speech-recognition',
    },
  },
  {
    id: 'font-loading',
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
      apiDocURL:
        'https://developer.mozilla.org/en-US/docs/Web/API/CSS_Font_Loading_API',
      canIUseURL: 'font-loading',
    },
  },
  {
    id: 'pointer-capture',
    emoji: '👆',
    title: 'Pointer Capture API',
    description: `Pointer events are DOM events that are fired for a pointing device. They are designed to create a single DOM event model to handle pointing input devices such as a mouse, pen/stylus or touch (such as one or more fingers).`,
    meta: {
      author: {
        name: 'Supriya M',
        social: {
          email: 'sansup49+developer@gmail.com',
          github: 'supminn',
          twitter: 'supminn',
        },
      },
      apiDocURL:
        'https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events',
      canIUseURL: 'https://caniuse.com/pointer',
    },
  },
  {
    id: 'canvas-api',
    emoji: '🎨',
    title: 'Canvas API',
    description:
      'The Canvas API provides a means for drawing graphics via JavaScript and the HTML <canvas> element. It can be use for animation, game graphics, data visualization, photo manipulation and real-time video processing. This API is largely focuses on 2D graphics.',
    meta: {
      author: {
        name: 'Richard Nikolas',
        social: {
          email: 'richardnikolas1@gmail.com',
          github: 'richardnikolas',
          twitter: 'RichardTiti',
        },
      },
      apiDocURL: 'https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API',
      canIUseURL: 'https://caniuse.com/canvas',
    },
  },
  {
    id: 'url-api',
    emoji: '🌐',
    title: 'URL API',
    description:
      'The URL API is a component of the URL standard, which defines what constitutes a valid Uniform Resource Locator and the API that provides an easy way to parse, construct, normalize and encode URLs. The URL standard also defines concepts such as domains, hosts, and IP addresses.',
    meta: {
      author: {
        name: 'Williams Samuel',
        social: {
          email: 'samwill300@gmail.com',
          github: 'williamssam',
          twitter: 'williams_codes',
        },
      },
      apiDocURL: 'https://developer.mozilla.org/en-US/docs/Web/API/URL_API',
      canIUseURL: 'https://caniuse.com/url',
    },
  },
  {
    id: 'page-visibility',
    emoji: '📃',
    title: 'Page Visibility API',
    description:
      'The Page Visibility API provides events you can watch for to know when a document becomes visible or hidden, as well as features to look at the current visibility state of the page. This means that when the user minimizes the window or switches to another tab, an event will be sent.',
    meta: {
      author: {
        name: 'Williams Samuel',
        social: {
          email: 'samwill300@gmail.com',
          github: 'williamssam',
          twitter: 'williams_codes',
        },
      },
      apiDocURL: '',
      canIUseURL: 'https://caniuse.com/pagevisibility',
    },
  },
  {
    id: 'selection-api',
    emoji: '🗒️',
    title: 'Selection API',
    description:
      'The Selection API enables developers to access and manipulate the portion of a document selected by the user.',
    meta: {
      author: {
        name: 'ArunKumar Nadikattu',
        social: {
          email: 'arunaiekhil+dev@gmail.com',
          github: 'Aru-Ku',
          twitter: 'Aru_Ku_',
        },
      },
      apiDocURL:
        'https://developer.mozilla.org/en-US/docs/Web/API/Selection_API',
      canIUseURL: 'https://caniuse.com/selection-api',
    },
  },
  {
    id: 'eyedropper-api',
    emoji: '👁️‍🗨',
    title: 'EyeDropper API',
    description:
      'The EyeDropper API provides a mechanism for creating an eyedropper tool. Using this tool, users can sample colors from their screens, including outside of the browser window.',
    meta: {
      author: {
        name: 'Williams Samuel',
        social: {
          email: 'samwill300@gmail.com',
          github: 'williamssam',
          twitter: 'williams_codes',
        },
      },
      apiDocURL:
        'https://developer.mozilla.org/en-US/docs/Web/API/EyeDropper_API',
      canIUseURL: 'https://caniuse.com/mdn-api_eyedropper',
    },
  },
  {
    id: 'webrtc',
    emoji: '💬',
    title: 'WebRTC',
    description:
      'WebRTC is a technology that offers real-time communication capabilities to your application allowing developers to build powerful voice and video communication solutions.',
    meta: {
      author: {
        name: 'Geovana S. Ribeiro',
        social: {
          email: 'emaildaraveenita@gmail.com',
          github: 'raveenita',
          twitter: 'raveenita',
        },
      },
      apiDocURL: '',
      canIUseURL: 'https://caniuse.com/rtcpeerconnection',
    },
  }, //replace item here
];
