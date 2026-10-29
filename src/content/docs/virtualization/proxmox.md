---
title: "Proxmox"
---

Короткие заметки по администрированию Proxmox VE.

## Остановить зависшую виртуальную машину

Если `qm stop` не срабатывает из-за блокировки, сначала снимите её, потом остановите машину:

```bash
rm /var/lock/qemu-server/lock-<VMID>.conf
qm stop <VMID>
```

:::caution[Внимание]
Остановка без блокировки обрывает работу гостевой ОС так же, как выдернутый из розетки сервер. Используйте её, только когда штатное завершение не помогло.
:::

:::tip[Блокировка в конфиге ВМ]
Если машина остановилась, но в конфиге осталась строка `lock:` (например, после неудачного бэкапа или миграции), её снимает `qm unlock <VMID>`.
:::

## Wake-on-LAN для ноды

Цель: чтобы сервер Proxmox включался «магическим пакетом» по сети.

1. **Включите пробуждение в BIOS.** На материнской плате нужно разрешить пробуждение по PCI (в разных прошивках пункт называется по-разному).

2. **Проверьте, что сетевая карта умеет WOL.** `enp3s0` здесь и дальше заменяйте на имя своего интерфейса:

    ```bash
    ethtool enp3s0 | grep Wake-on
    ```

    Строка `Wake-on: g` значит, что WOL включён. `Wake-on: d` значит, что выключен: после перезагрузки настройка сбрасывается, поэтому её нужно закрепить юнитом systemd.

3. **Создайте юнит systemd:**

    ```bash
    sudo systemctl edit wol.service --full --force
    ```

    Содержимое юнита:

    ```ini
    [Unit]
    Description=Enable Wake-on-LAN
    After=network-online.target

    [Service]
    Type=oneshot
    ExecStart=/sbin/ethtool --change enp3s0 wol g

    [Install]
    WantedBy=network-online.target
    ```

4. **Включите и запустите юнит:**

    ```bash
    sudo systemctl daemon-reload
    sudo systemctl enable wol.service
    sudo systemctl start wol.service
    ```

5. **Проверьте.** Выключите ноду и отправьте магический пакет на её MAC-адрес, например командой `/tool wol` на MikroTik (пример: [WOL через Telegram-бота](../../scripts/telegram-wol/)).

:::note[Источник]
[Как удалённо разбудить Linux по сети с помощью Wake On Lan?](https://winitpro.ru/index.php/2024/02/06/wake-on-lan-razbudit-linux-po-seti/) — Windows для системных администраторов.
:::
