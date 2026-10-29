import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightImageZoom from 'starlight-image-zoom';
import mermaid from 'astro-mermaid';

export default defineConfig({
  site: 'https://lastharbor.github.io',
  base: '/mkdocs-notes',
  redirects: {
    // Astro не добавляет base к адресу назначения, поэтому он указан явно.
    '/About': '/mkdocs-notes/',
    '/Dev Ops Basics/DevOps': '/mkdocs-notes/linux/',
    '/Dev Ops Basics/Proxmox': '/mkdocs-notes/virtualization/proxmox/',
    '/Scripts/CHR-Script': '/mkdocs-notes/scripts/chr-proxmox/',
    '/Scripts/WOLMikrotik': '/mkdocs-notes/scripts/telegram-wol/',
    '/Scripts/Static DNS mikrotik': '/mkdocs-notes/scripts/static-dns/',
  },
  integrations: [
    mermaid({ theme: 'default', autoTheme: true }),
    starlight({
      title: 'Notes for DevOps',
      description: 'Конспекты по Linux, сетям, базам данных, виртуализации и MikroTik',
      defaultLocale: 'root',
      locales: { root: { label: 'Русский', lang: 'ru' } },
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/lastharbor/mkdocs-notes' },
      ],
      editLink: { baseUrl: 'https://github.com/lastharbor/mkdocs-notes/edit/main/' },
      lastUpdated: true,
      customCss: ['./src/styles/custom.css'],
      plugins: [starlightImageZoom()],
      sidebar: [
      {
        label: 'Linux',
        collapsed: true,
        items: [
          { slug: 'linux', label: 'Обзор раздела' },
          'linux/users-permissions',
          'linux/ssh',
          'linux/monitoring',
          'linux/processes',
          'linux/cron',
          'linux/bash-scripting',
          'linux/text-tools',
          'linux/systemd',
          'linux/filesystem',
          'linux/ipc',
          'linux/packages-licenses',
          'linux/vim',
        ],
      },
      {
        label: 'Сети',
        collapsed: true,
        items: [
          { slug: 'networking', label: 'Обзор раздела' },
          'networking/ip-dns-www',
          'networking/tcp-ip',
        ],
      },
      {
        label: 'Базы данных',
        collapsed: true,
        items: [
          { slug: 'databases', label: 'Обзор раздела' },
          'databases/relational',
          'databases/nosql',
          'databases/backup',
        ],
      },
      {
        label: 'Виртуализация',
        collapsed: true,
        items: [
          { slug: 'virtualization', label: 'Обзор раздела' },
          'virtualization/proxmox',
        ],
      },
      {
        label: 'Скрипты',
        collapsed: true,
        items: [
          { slug: 'scripts', label: 'Обзор раздела' },
          'scripts/chr-proxmox',
          'scripts/telegram-wol',
          'scripts/static-dns',
        ],
      },
      { slug: 'resources/links' },
      ],
    }),
  ],
});
