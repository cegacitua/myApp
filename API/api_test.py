from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

profesores = [
    {
        "id": 1,
        "nombre": "Juan Pérez",
        "cursos": [
            {
                "id": 1,
                "nombre": "Matemáticas",
                "codigo": "PGY0000",
                "seccion": "013V",
                "alumnos": [
                    {"id": 1, "nombre": "Luis Gonzalez", "rut": "21.345.678-9", "status": 0},
                    {"id": 2, "nombre": "María Parker", "rut": "18.765.432-1", "status": 0}
                ]
            },
            {
                "id": 2,
                "nombre": "Fisica",
                "codigo": "PGY0000",
                "seccion": "015V",
                "alumnos": [
                    {"id": 1, "nombre": "Camila Camus", "rut": "18.948.473-9", "status": 0},
                    {"id": 2, "nombre": "Carlos Cardenas", "rut": "19.836.279-1", "status": 0}
                ]
            },
            {
                "id": 3,
                "nombre": "Quimica",
                "codigo": "PGY0000",
                "seccion": "018V",
                "alumnos": [
                    {"id": 1, "nombre": "Andrea Andrade", "rut": "21.834.762-9", "status": 0},
                    {"id": 2, "nombre": "Hernán Henriquez", "rut": "17.837.265-1", "status": 0}
                ]
            }
        ]
    }
]


usuarios = [
    {
        "id": 1,
        "user": "docente",
        "password": "password1",
        "nombre": "Juan Perez",
        "perfil":  1,
        "correo": "docente@gmail.com"
    },
    {
        "id": 2,
        "user": "alumno",
        "password": "password2",
        "nombre": "Luis Gonzalez",
        "perfil": 2,
        "correo": "alumno@gmail.com"
    }
]


@app.route('/', methods=['GET'])
def home():
    return jsonify({"message": "Bienvenido a la API"}), 200


@app.route('/login', methods=['POST'])
def login():
    username = request.json.get('user')
    password = request.json.get('password')
    
    usuario = next((u for u in usuarios if u["user"] == username and u["password"] == password), None)
    
    if usuario:
        return jsonify({
            "id": usuario["id"],
            "nombre": usuario["nombre"],
            "user": usuario["user"],
            "correo": usuario["correo"],
            "tipoPerfil": usuario["perfil"]
        }), 200
    else:
        return jsonify({"message": "Credenciales incorrectas"}), 401


@app.route('/registrar', methods=['POST'])
def registrar():
    user = request.json.get('user')
    password = request.json.get('password')
    nombre = request.json.get('nombre')
    perfil = request.json.get('perfil')
    correo = request.json.get('correo')

    # Verificar si el usuario ya existe
    usuario_existente = next((u for u in usuarios if u["user"] == user), None)
    if usuario_existente:
        return jsonify({"message": "El nombre de usuario ya está en uso"}), 400

    # Crear el nuevo usuario
    nuevo_usuario = {
        "id": len(usuarios) + 1,  # Asignar un nuevo ID al usuario
        "user": user,
        "password": password,
        "nombre": nombre,
        "perfil": perfil,
        "correo": correo
    }
    usuarios.append(nuevo_usuario)

    return jsonify(nuevo_usuario), 201




@app.route('/profesores' and '/profesores/', methods=['GET'])
def obtener_profesores():
    return jsonify(profesores), 200

@app.route('/profesores/<int:profesor_id>/cursos', methods=['GET'])
def obtener_cursos_profesor(profesor_id):
    profesor = next((p for p in profesores if p["id"] == profesor_id), None)
    if not profesor:
        return jsonify({"message": "Profesor no encontrado"}), 404
    return jsonify(profesor["cursos"]), 200

@app.route('/profesores/<int:profesor_id>/cursos/<int:curso_id>/alumnos', methods=['GET'])
def obtener_alumnos_curso(profesor_id, curso_id):
    profesor = next((p for p in profesores if p["id"] == profesor_id), None)
    if not profesor:
        return jsonify({"message": "Profesor no encontrado"}), 404
    curso = next((c for c in profesor["cursos"] if c["id"] == curso_id), None)
    if not curso:
        return jsonify({"message": "Curso no encontrado"}), 404
    return jsonify(curso["alumnos"]), 200


@app.route('/usuarios' and '/usuarios/', methods=['GET'])
def obtener_usuarios():
    return jsonify(usuarios), 200



@app.route('/registrar_asistencia', methods=['POST'])
def registrar_asistencia():

  nombreAlumno = request.json.get('alumno_id')
  codigo = request.json.get('codigo')
  seccion = request.json.get('seccion')
  fecha = request.json.get('fecha')

  for profesor in profesores:
    for curso in profesor["cursos"]:
      if curso["codigo"] == codigo and curso["seccion"] == seccion:
        for alumno in curso["alumnos"]:
          if alumno["nombre"] == nombreAlumno:
            alumno["status"] = 1
            return jsonify({"message": "Asistencia registrada"}), 200

  return jsonify({"message": "No se pudo registrar la asistencia"}), 400





if __name__ == '__main__':
    app.run(debug=True)


