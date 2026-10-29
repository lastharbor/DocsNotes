# Реляционные базы данных

![Реляционные БД: схема 1](img/relational-01.png)

![Реляционные БД: схема 2](img/relational-02.png)

![Реляционные БД: схема 3](img/relational-03.png)

## Типы данных MySQL

![Типы данных MySQL](img/relational-04.png)

## DML, DDL, Transaction

![DML, DDL, Transaction: 1](img/relational-05.png)

![DML, DDL, Transaction: 2](img/relational-06.png)

![DML, DDL, Transaction: 3](img/relational-07.png)

## Транзакции

### ACID

[ACID. Что под капотом у транзакции](https://habr.com/ru/companies/simbirsoft/articles/572540/) (Хабр)

| Свойство | Что гарантирует |
|---|---|
| **Атомарность** (Atomicity) | транзакция не может выполниться частично |
| **Согласованность** (Consistency) | после завершения транзакции данные остаются консистентными и валидными |
| **Изолированность** (Isolation) | параллельно выполняемые транзакции не влияют друг на друга |
| **Прочность** (Durability) | если пользователь получил подтверждение, изменения не будут отменены из-за сбоя |

### BASE

- Базовая доступность (Basically available)
- Мягкое состояние (Soft state)
- Согласованность в конечном счёте (Eventual consistency)
