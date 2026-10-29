# Notes for DevOps

Конспекты по Linux, сетям, базам данных, виртуализации и MikroTik.
Сайт: <https://lastharbor.github.io/mkdocs-notes/>

Собирается [Astro Starlight](https://starlight.astro.build/). Конфиг в `astro.config.mjs`, страницы в `src/content/docs/`.

## Локальный запуск

```bash
npm install
npm run dev      # http://localhost:4321/mkdocs-notes/
```

Сборка: `npm run build`, результат в `dist/`.

## Структура

| Каталог | Содержимое |
|---|---|
| `src/content/docs/linux`, `networking`, `databases` | конспекты по темам, картинки рядом в `img/` |
| `src/content/docs/virtualization` | Proxmox |
| `src/content/docs/scripts` | готовые скрипты и разборы |
| `src/content/docs/resources` | подборка ссылок |
| `src/assets/installchr.sh` | скрипт для страницы «CHR на Proxmox», он же отдаётся на скачивание |

## Деплой

Push в `main` запускает `.github/workflows/CI.yml`: сборка и публикация в ветку `gh-pages`.
