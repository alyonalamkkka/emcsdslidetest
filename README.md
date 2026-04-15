# EMCD Slides

Next.js-приложение для генерации презентаций в стиле EMCD. Пользователь вводит бриф, при необходимости прикладывает `.txt`, `.md`, `.docx` или `.pptx`, а серверная часть собирает контекст и запрашивает структуру слайдов у Claude. Если `ANTHROPIC_API_KEY` не задан, приложение возвращает моковую презентацию.

## Локальный запуск

1. Установить зависимости:

```bash
npm ci
```

2. Создать локальный env:

```bash
cp .env.local.example .env.local
```

3. При необходимости добавить ключ:

```env
ANTHROPIC_API_KEY=...
```

4. Запустить приложение:

```bash
npm run dev
```

## Production build

Сборка выполняется через `webpack`, а не через Turbopack. Это сделано специально: в закрытых средах и на некоторых серверах Turbopack может падать на этапе production build, а `webpack` здесь собирает проект стабильно.

```bash
npm run build
```

В `next.config.ts` включён `output: "standalone"`, поэтому после билда проект удобно запускать в Docker или на Node-сервере как самостоятельное приложение.

## GitHub

Если репозиторий уже привязан к `origin`, публикация выглядит так:

```bash
git push -u origin main
```

Если GitHub просит логин/пароль, есть два нормальных варианта:

### Вариант 1: HTTPS + Personal Access Token

1. В GitHub открыть `Settings -> Developer settings -> Personal access tokens`.
2. Создать токен с доступом к репозиториям.
3. При `git push` ввести:
   username: ваш GitHub-логин
   password: созданный токен

### Вариант 2: SSH

```bash
ssh-keygen -t ed25519 -C "you@example.com"
cat ~/.ssh/id_ed25519.pub
```

Публичный ключ добавить в GitHub: `Settings -> SSH and GPG keys`.

Потом сменить remote:

```bash
git remote set-url origin git@github.com:USERNAME/REPO.git
git push -u origin main
```

## Деплой на сервер через Docker

В репозитории уже есть `Dockerfile`, `.dockerignore`, `docker-compose.yml` и `.env.production.example`.

### 1. Подготовить env на сервере

```bash
cp .env.production.example .env.production
```

Заполнить:

```env
ANTHROPIC_API_KEY=...
```

### 2. Собрать и поднять контейнер

```bash
docker compose up -d --build
```

Приложение будет доступно на порту `3000`.

### 3. Обновление после нового пуша

```bash
git pull
docker compose up -d --build
```

## Что нужно для “нормального” продакшна

- VPS с установленными Docker и Docker Compose
- домен, направленный на сервер
- Nginx или Caddy перед приложением для HTTPS
- `ANTHROPIC_API_KEY` в `.env.production`

Если нужен reverse proxy через Nginx, можно проксировать домен на `127.0.0.1:3000`.
