# HOSTING

- Servicio de almacenamiento para alojar webs
- Ordenador en vete tu a saber donde, normalmente en wisconsin
- Puede ser compartido o dedicado
    - compartido  limitado, lo normal
    - dedicado: control total sobre el ordenador
- sistema de backup

- Puedo configurar mi ordenador de casa como servidor, pero entonces no lo puedo apagar o mi web deja de estar accesible



!!!!!!!!!!Mirar 1and1


# FTP & SFTP

- Protocolo de transferencia de archivos
- Aceso SSH crea u n tunel encriptado para subir y bajar ficheroas a un servidor remoto, en  wisconsin

- Primero crea una conexión y luego transfiere archivos
- Necesita parámetros

- Hay diversos programas para facilitar la tarea
    - filezilla
    - winscp...


1. descargar e instalar  filezilla





2. configurar user ssh en el hosting

host: home413842422.1and1-data.host
protocol: SFTP
port: 22
username: acc361389967
pwd: YoSoy3lduendej$


3. Ingresar los datos en FIlezilla
    - Gestor de sitios / nuevo sitio
    - Protocolo -> sftp
    - servidor -> host de 1and1
    - puerto: 22
    - usuario -> username 1and1
    - Contraseña -> pwd 1and1

4. conectar y subir/bajar ficheros

5. Explicación de ventanas de filezilla



# SFT DEPLOY
1. instalar extensión sftp de Natizinskunk

2. Mirar la docu

3. ctrl+shift+ P -> abrir sftp.json

4. Configurar con los datos de ssh de 1and1

{
    "name": "My Server",
    "host": "home413842422.1and1-data.host",
    "protocol": "sftp",
    "port": 22,
    "username": "acc361389967",
    "password": "YoSoy3lduendej$",
    "remotePath": "/",
    "uploadOnSave": true
}


