# Системы инициализации и systemd

## Системы инициализации

- [Системы инициализации Linux](https://losst.pro/sistemy-initsializatsii-linux) (Losst)
- [Глава 9. Сервисы Unix](https://debian-handbook.info/browse/ru-RU/stable/unix-services.html) (Руководство администратора Debian)

![Системы инициализации: схема 1](img/systemd-01.png)

![Системы инициализации: схема 2](img/systemd-02.png)

![Системы инициализации: схема 3](img/systemd-03.png)

![Системы инициализации: схема 4](img/systemd-04.png)

## Systemd

[Systemd за пять минут](https://habr.com/ru/companies/slurm/articles/255845/) (Хабр)

### Базовые команды

| Задача | Команда |
|---|---|
| Запустить и остановить сервис | `systemctl start <юнит>`, `systemctl stop <юнит>` |
| Состояние сервиса | `systemctl status <юнит>` |
| Включить и выключить автозапуск | `systemctl enable <юнит>`, `systemctl disable <юнит>` |
| Перечитать юниты после правок | `systemctl daemon-reload` |
| Журнал сервиса | `journalctl -u <юнит>` |

Пример готового юнита: [Proxmox → Wake-on-LAN](../virtualization/proxmox.md#wake-on-lan-для-ноды).

## Основные виды юнитов

![Виды юнитов: 1](img/systemd-05.png)

![Виды юнитов: 2](img/systemd-06.png)

![Виды юнитов: 3](img/systemd-07.png)

![Виды юнитов: 4](img/systemd-08.png)

![Виды юнитов: 5](img/systemd-09.png)

![Виды юнитов: 6](img/systemd-10.png)

![Виды юнитов: 7](img/systemd-11.png)

![Виды юнитов: 8](img/systemd-12.png)
