#!/bin/bash

# Verifica si el usuario ha introducido la URL del repositorio
if [ -z "$1" ]; then
  echo "❗️ Debes proporcionar la URL de tu repositorio GitHub:"
  echo "Ejemplo: ./subir_a_github.sh https://github.com/tu_usuario/tu_repositorio.git"
  exit 1
fi

REPO_URL=$1

# Renombrar la rama actual a main
git branch -M main

# Añadir repositorio remoto
git remote add origin "$REPO_URL"

# Subir el proyecto
git push -u origin main

echo "✅ Código subido correctamente a GitHub en la rama 'main'"
