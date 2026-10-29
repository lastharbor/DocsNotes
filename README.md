# Notes for DevOps

Конспекты по Linux, сетям, базам данных, виртуализации и MikroTik.
Сайт: <https://lastharbor.github.io/mkdocs-notes/>

Собирается [Zensical](https://zensical.org/), конфиг в `zensical.toml`, страницы в `docs/`.

## Локальный запуск

```bash
python -m venv .venv
.venv/bin/pip install -r requirements.txt   # Windows: .venv\Scripts\pip
.venv/bin/zensical serve                    # http://localhost:8000
```

Сборка: `zensical build --clean`, результат в `site/`.

## Структура

| Каталог | Содержимое |
|---|---|
| `docs/linux`, `docs/networking`, `docs/databases` | конспекты по темам, картинки рядом в `img/` |
| `docs/virtualization` | Proxmox |
| `docs/scripts` | готовые скрипты и разборы, файлы для скачивания в `files/` |
| `docs/resources` | подборка ссылок |

## Деплой

Push в `main` запускает `.github/workflows/CI.yml`: сборка и публикация в ветку `gh-pages`.
