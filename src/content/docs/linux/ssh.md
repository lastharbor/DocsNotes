---
title: "SSH"
---

## Вход по ключу

1. Сгенерируйте ключевую пару:

    ```bash
    ssh-keygen -t ed25519 -C "comment"
    ```

    - `ssh-keygen` генерирует ключи;
    - `-t ed25519` задаёт тип ключа;
    - `-C "comment"` добавляет комментарий к ключу.

2. Скопируйте открытый ключ на сервер:

    ```bash
    ssh-copy-id -i key.pub user@server
    ```

3. Подключитесь к серверу:

    ```bash
    ssh user@server
    ```

:::tip[Смотрите также]
Импорт публичного ключа на сервер из PuTTY: [Ссылки → SSH и безопасность](../../resources/links/#ssh-и-безопасность).
:::

## Копирование файлов через SSH

Для копирования по SSH используется `scp`:

```bash
scp [опции] user1@server1:<путь до файла> user2@server2:<путь до файла>
```

Ключ `-r` копирует каталоги целиком.

| Задача | Команда |
|---|---|
| С сервера на свою машину | `scp user@server:/tmp/1.txt /home/example` |
| С себя на удалённый сервер | `scp /home/example/1.txt user@server:/tmp` |
| Каталог целиком | `scp -r /home/example/dir user@server:/tmp` |
