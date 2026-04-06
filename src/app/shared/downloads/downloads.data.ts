export type DownloadPlatformId = 'web' | 'windows' | 'mac' | 'linux' | 'android' | 'ios';

export interface DownloadOption {
  label: string;
  href: string;
  icon: string;
  description: string;
  showOnHome?: boolean;
  itemPropDownloadUrl?: boolean;
}

export interface DownloadPlatform {
  id: DownloadPlatformId;
  label: string;
  icon: string;
  summary: string;
  homeBehavior: 'link' | 'menu';
  options: readonly DownloadOption[];
}

export const currentDesktopRelease = '3.1.13';

export const downloadPlatforms: readonly DownloadPlatform[] = [
  {
    id: 'web',
    label: 'Web',
    icon: 'public',
    summary: 'Open Nostria instantly in your browser with nothing to install.',
    homeBehavior: 'link',
    options: [
      {
        label: 'Launch Web App',
        href: 'https://nostria.app',
        icon: 'rocket_launch',
        description: 'Use Nostria on the web right away.',
        showOnHome: false
      }
    ]
  },
  {
    id: 'windows',
    label: 'Windows',
    icon: 'computer',
    summary: 'Install Nostria on Windows from the Store or with direct x64 and ARM64 installers.',
    homeBehavior: 'menu',
    options: [
      {
        label: 'Microsoft Store',
        href: 'https://apps.microsoft.com/store/detail/9N7F0TWQ0D8G',
        icon: 'store',
        description: 'Install or update through the Microsoft Store.',
        itemPropDownloadUrl: true
      },
      {
        label: 'Windows x64 (.exe)',
        href: 'https://github.com/nostria-app/nostria/releases/download/v3.1.13/Nostria_3.1.13_x64-setup.exe',
        icon: 'download',
        description: 'Direct installer for 64-bit Intel and AMD Windows PCs.',
        itemPropDownloadUrl: true
      },
      {
        label: 'Windows x64 (.msi)',
        href: 'https://github.com/nostria-app/nostria/releases/download/v3.1.13/Nostria_3.1.13_x64_en-US.msi',
        icon: 'inventory_2',
        description: 'MSI package for 64-bit Windows deployment workflows.',
        showOnHome: false,
        itemPropDownloadUrl: true
      },
      {
        label: 'Windows ARM64 (.exe)',
        href: 'https://github.com/nostria-app/nostria/releases/download/v3.1.13/Nostria_3.1.13_arm64-setup.exe',
        icon: 'download',
        description: 'Direct installer for ARM64 Windows devices.',
        itemPropDownloadUrl: true
      },
      {
        label: 'Windows ARM64 (.msi)',
        href: 'https://github.com/nostria-app/nostria/releases/download/v3.1.13/Nostria_3.1.13_arm64_en-US.msi',
        icon: 'inventory_2',
        description: 'MSI package for ARM64 Windows deployment workflows.',
        showOnHome: false,
        itemPropDownloadUrl: true
      }
    ]
  },
  {
    id: 'mac',
    label: 'Mac',
    icon: 'laptop_mac',
    summary: 'Download the universal macOS build for Apple Silicon and Intel Macs.',
    homeBehavior: 'link',
    options: [
      {
        label: 'macOS Universal (.dmg)',
        href: 'https://github.com/nostria-app/nostria/releases/download/v3.1.13/Nostria_3.1.13_universal.dmg',
        icon: 'download',
        description: 'Universal DMG for both Apple Silicon and Intel Macs.',
        itemPropDownloadUrl: true
      }
    ]
  },
  {
    id: 'linux',
    label: 'Linux',
    icon: 'terminal',
    summary: 'Choose between a portable AppImage or a .deb package for Debian-based distributions.',
    homeBehavior: 'menu',
    options: [
      {
        label: 'Linux AppImage',
        href: 'https://github.com/nostria-app/nostria/releases/download/v3.1.13/Nostria_3.1.13_amd64.AppImage',
        icon: 'download',
        description: 'Portable AppImage for 64-bit Linux systems.',
        itemPropDownloadUrl: true
      },
      {
        label: 'Linux .deb',
        href: 'https://github.com/nostria-app/nostria/releases/download/v3.1.13/Nostria_3.1.13_amd64.deb',
        icon: 'inventory_2',
        description: 'Debian package for Ubuntu, Debian, and compatible distributions.',
        itemPropDownloadUrl: true
      }
    ]
  },
  {
    id: 'android',
    label: 'Android',
    icon: 'android',
    summary: 'Get Nostria from an Android app store or install the APK directly.',
    homeBehavior: 'menu',
    options: [
      {
        label: 'Zapstore',
        href: 'https://zapstore.dev/apps/app.nostria.twa',
        icon: 'store',
        description: 'Install Nostria through Zapstore.'
      },
      {
        label: 'Play Store',
        href: 'https://play.google.com/store/apps/details?id=app.nostria.twa',
        icon: 'store',
        description: 'Install or update through Google Play.'
      },
      {
        label: 'Android APK',
        href: 'https://github.com/nostria-app/nostria/releases/download/v3.1.12/Nostria_3.1.12.apk',
        icon: 'download',
        description: 'Direct APK download for manual installation.',
        itemPropDownloadUrl: true
      }
    ]
  },
  {
    id: 'ios',
    label: 'iOS',
    icon: 'phone_iphone',
    summary: 'Try the latest iPhone build through Apple TestFlight.',
    homeBehavior: 'link',
    options: [
      {
        label: 'iOS TestFlight',
        href: 'https://testflight.apple.com/join/ysTpCtum',
        icon: 'phone_iphone',
        description: 'Join the TestFlight beta for iPhone.'
      }
    ]
  }
];

export const homeDownloadPlatforms = downloadPlatforms.filter(platform => platform.id !== 'web');