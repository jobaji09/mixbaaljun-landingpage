#!/bin/bash

# --- CONFIGURACIÓN ---
REMOTE_HOST="mictlan"
REMOTE_DIR="/opt/bitacora-gastos"
# Generamos un tag único basado en la fecha y hora: Ej. 20260429_1830
TAG=$(date +%Y%m%d_%H%M)

# Capturamos el parámetro (backend, frontend o vacío)
SERVICE=${1:-all}

echo "🚀 Iniciando despliegue atómico en Mictlán (Tag: $TAG)..."

# --- FUNCIÓN: DESPLIEGUE BACKEND ---
deploy_backend() {
  echo "☕ Procesando BACKEND..."
  cd ./bitacoradegastos && mvn clean package -DskipTests &&  mvn flyway:migrate "-Dflyway.configFiles=flywayConfig.conf" && cd ..
  echo "📤 Sincronizando con la Raspberry..."
  rsync -avz --delete ./bitacoradegastos/target/*.jar $REMOTE_HOST:$REMOTE_DIR/bitacora-backend/app.jar
  echo "🏗️  Construyendo imágenes Docker en Mictlán..."
  ssh $REMOTE_HOST "docker build -t bitacora-backend:$TAG $REMOTE_DIR/bitacora-backend"
  echo "🔄 Actualizando versiones en el .env..."
  ssh $REMOTE_HOST "sed -i 's/BACKEND_TAG=.*/BACKEND_TAG=$TAG/' $REMOTE_DIR/.env"
}

deploy_frontend(){
  echo "☕ Procesando FRONTEND..."
  # 1. Definimos la URL que queremos (la de Mictlán)
  # Puedes ponerla fija o leerla de un .env local en WSL
  export VITE_URL="http://mictlan.local/bitacora-api"
  cd ./bitacora-de-gastos && VITE_URL=$VITE_URL npm run build && cd ..
  echo "📤 Sincronizando con la Raspberry..."
  rsync -avz --delete ./bitacora-de-gastos/dist/ $REMOTE_HOST:$REMOTE_DIR/bitacora-frontend/dist/
  echo "🏗️  Construyendo imágenes Docker en Mictlán..." 
  ssh $REMOTE_HOST "docker build -t bitacora-frontend:$TAG $REMOTE_DIR/bitacora-frontend"
  echo "🔄 Actualizando versiones en el .env..." 
  ssh $REMOTE_HOST "sed -i 's/FRONTEND_TAG=.*/FRONTEND_TAG=$TAG/' $REMOTE_DIR/.env"

}

# --- LÓGICA DE EJECUCIÓN ---
case $SERVICE in
    "backend")
        deploy_backend
        ;;
    "frontend")
        deploy_frontend
        ;;
    "all")
        deploy_backend
        deploy_frontend
        ;;
    *)
        echo "❌ Error: Parámetro no reconocido. Usa: ./deploy.sh [backend|frontend]"
        exit 1
        ;;
esac

# 5. APLICAR CAMBIOS
echo "⚓ Levantando la nueva versión..."
ssh $REMOTE_HOST "cd $REMOTE_DIR && docker compose up -d"

echo "✅ ¡Despliegue exitoso! Versión activa: $TAG"
