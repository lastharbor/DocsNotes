import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightImageZoom from 'starlight-image-zoom';
import mermaid from 'astro-mermaid';

export default defineConfig({
  site: 'https://lastharbor.github.io',
  base: '/DocsNotes',
  integrations: [
    mermaid({ theme: 'default', autoTheme: true }),
    starlight({
      title: 'Notes for DevOps',
      description: 'Конспекты по Linux, сетям, базам данных, виртуализации и MikroTik',
      defaultLocale: 'root',
      locales: { root: { label: 'Русский', lang: 'ru' } },
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/lastharbor/DocsNotes' },
      ],
      editLink: { baseUrl: 'https://github.com/lastharbor/DocsNotes/edit/main/' },
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
