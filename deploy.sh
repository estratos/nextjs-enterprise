#!/bin/bash
echo "🚀 Iniciando deploy con pnpm..."

# Configuración
APP_NAME="next-app"
APP_DIR="/home/tuusuario/web/tudominio.com/public_html"
LOG_DIR="/home/tuusuario/.pm2/logs"

cd $APP_DIR

# Backup current build
echo "📦 Haciendo backup..."
tar -czf backup-$(date +%Y%m%d-%H%M%S).tar.gz .next 2>/dev/null || true

# Git pull
echo "🔄 Actualizando código..."
git pull origin main

# Install dependencies
echo "📥 Instalando dependencias..."
pnpm install --production --frozen-lockfile

# Build application
echo "🏗️ Construyendo aplicación..."
pnpm run build

# Restart application
echo "🔄 Reiniciando aplicación..."
pm2 restart $APP_NAME

# Wait and check status
sleep 5
pm2 status $APP_NAME

echo "✅ Deploy completado!"